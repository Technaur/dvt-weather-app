import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useGetCurrentWeatherByLatAndLongQuery } from "../redux/apiSlice";
import {
  convertKelvinToCelsius,
  generateBackgroundHexColour,
  generateWeatherBackground,
} from "../functions/WeatherFunctions";
import { colors } from "../styles/Theme";
import { Temperature, Weather } from "../Interfaces/WeatherInterfaces";

type Props = {
  onWeatherLoaded: (value: string) => void;
};

const WeatherOverview = (props: Props) => {
  const {
    data: currentByLatAndLong,
    error,
    isError,
    isLoading,
  } = useGetCurrentWeatherByLatAndLongQuery({
    lat: "-34.02478408032439",
    long: "22.451752972728862",
  });

  const [kelvinTempData, setKelvinTempData] = useState<Temperature>();
  const [weatherData, setWeatherData] = useState<Weather>();

  useEffect(() => {
    if (currentByLatAndLong) {
      if (
        currentByLatAndLong.main?.temp &&
        currentByLatAndLong.main?.temp_max &&
        currentByLatAndLong.main?.temp_min
      ) {
        setKelvinTempData(currentByLatAndLong.main);
      }

      if (currentByLatAndLong.weather) {
        props.onWeatherLoaded(currentByLatAndLong.weather[0].main);
        setWeatherData(currentByLatAndLong.weather[0]);
      }
    }
  }, [currentByLatAndLong]);

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={generateWeatherBackground(weatherData?.main)}
        resizeMode="stretch"
        style={styles.imageBackgroundContainer}
      >
        <View style={styles.container}>
          <Text style={styles.textHeaderStyle}>
            {convertKelvinToCelsius(kelvinTempData?.temp)}&deg;C
          </Text>

          <Text style={styles.textLabelsStyle}>
            {weatherData?.main.toString()}
          </Text>
        </View>
      </ImageBackground>
      <View
        style={[
          styles.infoContainer,
          {
            backgroundColor: generateBackgroundHexColour(weatherData?.main),
          },
        ]}
      >
        <View>
          <Text style={styles.textLabelsStyle}>
            {convertKelvinToCelsius(kelvinTempData?.temp_min)}&deg;C
          </Text>
          <Text style={styles.textLabelSmallStyle}>Min Temp</Text>
        </View>
        <View>
          <Text style={styles.textLabelsStyle}>
            {convertKelvinToCelsius(kelvinTempData?.feels_like)}&deg;C
          </Text>
          <Text style={styles.textLabelSmallStyle}>Feels Like</Text>
        </View>

        <View>
          <Text style={styles.textLabelsStyle}>
            {convertKelvinToCelsius(kelvinTempData?.temp_max)}&deg;C
          </Text>
          <Text style={styles.textLabelSmallStyle}>Max Temp</Text>
        </View>
      </View>
    </View>
  );
};

export default WeatherOverview;

const styles = StyleSheet.create({
  imageBackgroundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  infoContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textHeaderStyle: {
    fontSize: 55,
    color: colors.white,
    textAlign: "center",
  },
  textLabelsStyle: {
    fontSize: 20,
    color: colors.white,
    textAlign: "center",
  },
  textLabelSmallStyle: {
    fontSize: 15,
    color: colors.white,
    textAlign: "center",
  },
});
