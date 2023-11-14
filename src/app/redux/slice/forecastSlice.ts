import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CityState {
  id: number;
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface ForecastState {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  sys: {
    pod: string;
  };
  dt_txt: string;
}

const initialState: ForecastState = {
  dt: 0,
  main: {
    temp: 0,
    feels_like: 0,
    temp_min: 0,
    temp_max: 0,
    pressure: 0,
    sea_level: 0,
    grnd_level: 0,
    humidity: 0,
    temp_kf: 0,
  },
  weather: [
    {
      id: 0,
      main: "",
      description: "",
      icon: "",
    },
  ],
  clouds: {
    all: 0,
  },
  wind: {
    speed: 0,
    deg: 0,
    gust: 0,
  },
  visibility: 0,
  pop: 0,
  sys: {
    pod: "",
  },
  dt_txt: "",
};

export const forecastSlice = createSlice({
  name: "forecast",
  initialState,
  reducers: {
    requestForecast: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      //   state.value += 1;
    },
    successForecast: (state) => {
      //   state.value -= 1;
    },
    errorForecast: (state, action: PayloadAction<number>) => {
      //   state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { requestForecast, successForecast, errorForecast } =
  forecastSlice.actions;

export default forecastSlice.reducer;
