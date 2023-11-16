//Api slice with redux toolkit query

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://api.openweathermap.org/data/2.5/";
const apiKey = "e32b717569220a1c0581614554cc99e6";

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getForecastByLatAndLong: builder.query<any, string>({
      query: ({ lat, long }: any) =>
        `forecast?lat=${lat}&lon=${long}&appid=${apiKey}`,
    }),
    getCurrentWeatherByLatAndLong: builder.query<any, string>({
      query: ({ lat, long }: any) =>
        `weather?lat=${lat}&lon=${long}&appid=${apiKey}`,
    }),
  }),
});

export const {
  useGetForecastByLatAndLongQuery,
  useGetCurrentWeatherByLatAndLongQuery,
} = weatherApi;
