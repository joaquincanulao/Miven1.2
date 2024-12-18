import { Injectable } from '@angular/core';

type Unidad = 'gramos' | 'ml' | 'tazas' | 'onzas';

@Injectable({
  providedIn: 'root',
})
export class UnitConversionService {
  private conversionTable: Record<Unidad, Record<Unidad, number>> = {
    gramos: { gramos: 1, ml: 0, tazas: 0, onzas: 0 },
    ml: { gramos: 0, ml: 1, tazas: 1 / 240, onzas: 1 / 29.5735 },
    tazas: { gramos: 0, ml: 240, tazas: 1, onzas: 8 },
    onzas: { gramos: 0, ml: 29.5735, tazas: 1 / 8, onzas: 1 },
  };

  convertirUnidad(cantidad: number, unidadOrigen: Unidad, unidadDestino: Unidad): number {
    if (unidadOrigen === unidadDestino) return cantidad;

    const conversionFactor = this.conversionTable[unidadOrigen]?.[unidadDestino];
    if (!conversionFactor) {
      throw new Error(`No se puede convertir de ${unidadOrigen} a ${unidadDestino}`);
    }

    return cantidad * conversionFactor;
  }
}

