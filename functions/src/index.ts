import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

// Inicializa Firebase Admin SDK
admin.initializeApp();

/**
 * Convierte una fecha en formato string (día-mes-año) o un objeto Date a un objeto Date.
 * Si el formato es inválido, retorna una fecha inválida (NaN).
 */
function convertDate(fecha: string | Date): Date {
  if (fecha instanceof Date) {
    return fecha; // Si ya es un objeto Date, regresarlo directamente
  }

  if (typeof fecha === "string") {
    // Detecta el separador usado en la fecha ("/" o "-")
    const separator = fecha.includes("/") ? "/" : "-";
    const parts = fecha.split(separator);

    if (parts.length === 3) {
      // Convertir de día-mes-año a año-mes-día
      const [day, month, year] = parts.map(part => parseInt(part, 10));
      return new Date(year, month - 1, day); // Meses en JS empiezan desde 0
    }
  }

  console.error("Formato de fecha inválido:", fecha);
  return new Date(NaN); // Retorna fecha inválida si no coincide el formato
}

/**
 * Función programada para enviar notificaciones sobre ítems a punto de vencer o ya vencidos.
 */
exports.notifyExpiringItems = functions.pubsub
  .schedule("30 18 * * *") // 12:30 PM todos los días
  .timeZone("America/Santiago")
  .onRun(async (context) => {
    const db = admin.firestore();
    const today = new Date();
    const oneWeekFromNow = new Date();
    oneWeekFromNow.setDate(today.getDate() + 7);

    try {
      const usersSnapshot = await db.collection("usuarios").get();
      if (usersSnapshot.empty) {
        console.log("No hay usuarios en la colección.");
        return;
      }

      for (const userDoc of usersSnapshot.docs) {
        console.log(`Procesando usuario: ${userDoc.id}`);

        const inventorySnapshot = await userDoc.ref.collection("inventario").get();
        if (inventorySnapshot.empty) {
          console.log(`El usuario ${userDoc.id} no tiene ítems en el inventario.`);
          continue;
        }

        const expiringItems: string[] = [];
        const expiredItems: string[] = [];

        inventorySnapshot.forEach((itemDoc) => {
          const item = itemDoc.data();
          console.log("Procesando ítem:", item.nombre, "Fecha de vencimiento:", item.fechaVencimiento);

          const expirationDate = convertDate(item.fechaVencimiento);

          if (!expirationDate || isNaN(expirationDate.getTime())) {
            console.error(`Fecha inválida para el ítem ${item.nombre || 'desconocido'} del usuario ${userDoc.id}`);
            return; // Continúa con el siguiente ítem
          }

          if (expirationDate < today) {
            expiredItems.push(item.nombre || 'Ítem desconocido');
          } else if (expirationDate <= oneWeekFromNow) {
            expiringItems.push(item.nombre || 'Ítem desconocido');
          }
        });

        if (expiringItems.length > 0 || expiredItems.length > 0) {
          // Validación y extracción del token FCM
          const fcmTokenData = userDoc.data().fcmToken;
          const userToken = typeof fcmTokenData === 'object' && 'token' in fcmTokenData
            ? fcmTokenData.token
            : fcmTokenData;

          console.log(`Token FCM del usuario ${userDoc.id}:`, userToken);

          if (userToken && typeof userToken === 'string' && userToken.trim() !== '') {
            const notificationBody = createNotificationBody(expiredItems, expiringItems);
            const message = {
              notification: {
                title: "Aviso de inventario",
                body: notificationBody,
              },
              token: userToken.trim(),
            };

            try {
              console.log(`Enviando notificación al usuario ${userDoc.id} con token: ${userToken}`);
              const response = await admin.messaging().send(message);
              console.log(`Notificación enviada con éxito al usuario ${userDoc.id}: ${response}`);
            } catch (error) {
              console.error(`Error enviando notificación a ${userDoc.id}:`, error);
            }
          } else {
            console.error(`El usuario ${userDoc.id} no tiene un token FCM válido.`);
          }
        } else {
          console.log(`No hay ítems por vencer o vencidos para el usuario ${userDoc.id}.`);
        }
      }
    } catch (error) {
      console.error("Error al procesar notificaciones:", error);
    }
  });

/**
 * Crea el cuerpo del mensaje para la notificación.
 */
function createNotificationBody(expiredItems: string[], expiringItems: string[]): string {
  let body = "";
  if (expiredItems.length > 0) {
    body += `Productos vencidos: ${expiredItems.join(", ")}. `;
  }
  if (expiringItems.length > 0) {
    body += `Productos por vencer: ${expiringItems.join(", ")}.`;
  }
  return body.trim();
}
