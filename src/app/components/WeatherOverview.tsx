import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { images } from "../styles/Images";
import { useGetForecastByLatAndLongQuery } from "../redux/apiSlice";

type Props = {};

const WeatherOverview = (props: Props) => {
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
