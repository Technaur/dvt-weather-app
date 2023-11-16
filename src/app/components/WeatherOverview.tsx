import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useGetCurrentWeatherByLatAndLongQuery } from "../redux/apiSlice";
import {
  convertKelvinToCelsius,
  generateBackgroundHexColour,
  generateWeatherBackground,
} from "../functions/WeatherFunctions";
import { colors } from "../styles/Theme";

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
  const [kelvinTempData, setKelvinTempData] = useState<{
    temp: number;
    temp_min: number;
    temp_max: number;
    feels_like: number;
  }>();

  const [weatherData, setWeatherData] = useState<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>();

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

      if (forecastByLatAndLong.weather) {
        setWeatherData(forecastByLatAndLong.weather[0]);
      }
    }
  }, [forecastByLatAndLong]);

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
