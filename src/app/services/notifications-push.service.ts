import { inject, Injectable } from '@angular/core';
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';
import {InventoryService} from './inventory.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationsPushService {

  private InteractionService: InventoryService = inject(InventoryService)

  constructor() { }

init() {
  console.log('Initializing NotificationsPushService');
  PushNotifications.requestPermissions().then(result => {
    if (result.receive === 'granted') {
      // Register with Apple / Google to receive push via APNS/FCM
      PushNotifications.register();
    } else {
      // Show some error
      //this.InteractionService.presentAlert('error', 'Debes habilitar las notificaciones')
    }
  });
  this.addListener();
}

private addListener(){

 // On success, we should be able to receive notifications
 PushNotifications.addListener('registration',
  (token: Token) => {
    alert('Push registration success, token: ' + token.value);
  }
);

// Some issue with our setup and push will not work
PushNotifications.addListener('registrationError',
  (error: any) => {
    alert('Error on registration: ' + JSON.stringify(error));
  }
);

// Show us the notification payload if the app is open on our device
PushNotifications.addListener('pushNotificationReceived',
  (notification: PushNotificationSchema) => {
    alert('Push received: ' + JSON.stringify(notification));
  }
);

// Method called when tapping on a notification
PushNotifications.addListener('pushNotificationActionPerformed',
  (notification: ActionPerformed) => {
    alert('Push action performed: ' + JSON.stringify(notification));
  }
);
}
}
