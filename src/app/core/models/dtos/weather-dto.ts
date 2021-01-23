export interface WeatherDTO {
  days: WeatherDay[];
}

export interface WeatherDay {
  Datum: string;
  Zeit: string;
  'Temp. A.': number;
  'Temp. 3': number;
  'Feuchte A.': number;
  Luftdruck: number;
  Regen: number;
  Wind: number;
  Richtung: number;
  Helligkeit: number;
}
