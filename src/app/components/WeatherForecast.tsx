import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../styles/Theme";
import {
  useGetCurrentWeatherByLatAndLongQuery,
  useGetForecastByLatAndLongQuery,
} from "../redux/apiSlice";
import _ from "lodash";

type Props = {};

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

  const [forecastValues, setForecastValues] = useState<any[]>();

  useEffect(() => {
    if (forecastByLatAndLong && forecastByLatAndLong.list) {
      const groupedByDay = _.groupBy(forecastByLatAndLong.list, (item) => {
        return item.dt_txt.split(" ")[0];
      });

      console.tron.log("groupedByDay", groupedByDay);
    }
  }, [forecastByLatAndLong]);

  return (
    <View style={styles.container}>
      <Text>WeatherForecast</Text>
    </View>
  );
};

export default WeatherForecast;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.sunny,
  },
});
