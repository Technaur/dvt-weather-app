import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../styles/Theme";
import {
  useGetCurrentWeatherByLatAndLongQuery,
  useGetForecastByLatAndLongQuery,
} from "../redux/apiSlice";
import _ from "lodash";
import { Forecast, Temperature } from "../Interfaces/WeatherInterfaces";
import {
  convertKelvinToCelsius,
  generateWeatherBackground,
} from "../functions/WeatherFunctions";
import Loader from "./Loader";

type Props = {
  backgroundColor: string;
};

const WeatherForecast = (props: Props) => {
  const {
    data: forecastByLatAndLong,
    error,
    isError,
    isLoading,
  } = useGetForecastByLatAndLongQuery({
    lat: "-34.02478408032439",
    long: "22.451752972728862",
  });

  const [forecastValues, setForecastValues] = useState<Forecast[]>();

  useEffect(() => {
    if (forecastByLatAndLong && forecastByLatAndLong.list) {
      const groupedByDay = _.groupBy(forecastByLatAndLong.list, (item) => {
        return item.dt_txt.split(" ")[0];
      });
      const forecast: Forecast[] = [];

      for (const key in groupedByDay) {
        const element = groupedByDay[key];

        if (key === new Date().toISOString().split("T")[0]) {
          continue;
        }

        const maxTemp = _.maxBy(element, (item) => {
          return item.main.temp_max;
        });
        const minTemp = _.minBy(element, (item) => {
          return item.main.temp_min;
        });

        const temperature: Temperature = {
          temp_max: maxTemp.main.temp_max,
          temp_min: minTemp.main.temp_min,
          feels_like: maxTemp.main.feels_like,
          temp: maxTemp.main.temp,
        };

        forecast.push({
          date: key,
          temperature,
          weather: maxTemp.weather[0],
        });
      }
      setForecastValues(forecast);
    }
  }, [forecastByLatAndLong]);

  return (
    <View
      style={[styles.container, { backgroundColor: props.backgroundColor }]}
    >
      {isLoading && <Loader isLoading />}
      {forecastValues?.map((item, index) => {
        return (
          <View style={styles.itemContainer} key={index}>
            <Text style={styles.textContainer}>{item.date}</Text>
            <Text style={styles.textContainer}>{item.weather.main}</Text>
            <Text style={styles.textContainer}>
              {convertKelvinToCelsius(item.temperature.temp_max)}&deg;C
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default WeatherForecast;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.sunny,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  textContainer: {
    color: colors.white,
    fontSize: 18,
  },
});
