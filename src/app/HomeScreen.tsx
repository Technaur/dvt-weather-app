import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useGetForecastByLatAndLongQuery } from "./redux/apiSlice";
import Loader from "./components/Loader";
import WeatherOverview from "./components/WeatherOverview";
import WeatherForecast from "./components/WeatherForecast";

export default function HomeScreen() {
  const {
    data: forecastByLatAndLong,
    error,
    isError,
    isLoading,
  } = useGetForecastByLatAndLongQuery({
    lat: "-34.02478408032439",
    long: "22.451752972728862",
  });

  const [forecastData, setForecastData] = useState(forecastByLatAndLong);

  console.tron.log("QQQ: forecastByLatAndLong state", forecastByLatAndLong);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Loader isLoading={isLoading} />
        <WeatherOverview />
        <WeatherForecast />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
