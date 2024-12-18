export const conversionTable = {
    gramos: { gramos: 1, ml: 0, tazas: 0, onzas: 0 },
    ml: { gramos: 0, ml: 1, tazas: 1 / 240, onzas: 1 / 29.5735 },
    tazas: { gramos: 0, ml: 240, tazas: 1, onzas: 8 },
    onzas: { gramos: 0, ml: 29.5735, tazas: 1 / 8, onzas: 1 },
  };