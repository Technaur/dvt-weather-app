import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { images } from "../styles/Images";
import { useGetCurrentWeatherByLatAndLongQuery } from "../redux/apiSlice";

type Props = {};

const WeatherOverview = (props: Props) => {
  const {
    data: forecastByLatAndLong,
    error,
    isError,
    isLoading,
  } = useGetCurrentWeatherByLatAndLongQuery({
    lat: "-34.02478408032439",
    long: "22.451752972728862",
  });

  const [forecastData, setForecastData] = useState(null);
  const [kelvinTempData, setKelvinTempData] = useState(0);

  useEffect(() => {
    if (forecastByLatAndLong) {
      setForecastData(forecastByLatAndLong);
      if (
        forecastByLatAndLong.main?.temp &&
        forecastByLatAndLong.main?.temp_max &&
        forecastByLatAndLong.main?.temp_min
      ) {
        setKelvinTempData(forecastByLatAndLong.main);
      }
    }
  }, [forecastByLatAndLong]);

  console.tron.log("QQQ: forecastByLatAndLong state", forecastByLatAndLong);
  return (
    <ImageBackground
      source={images.sunny}
      resizeMode="cover"
      style={styles.container}
    >
      <View style={styles.container}>
        <Text>WeatherOverview</Text>
      </View>
    </ImageBackground>
  );
};

export default WeatherOverview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
