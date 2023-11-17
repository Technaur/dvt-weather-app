export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Temperature {
  temp: number;
  temp_min: number;
  temp_max: number;
  feels_like: number;
}

export interface Forecast {
  date: string;
  temperature: Temperature;
  weather: Weather;
}
