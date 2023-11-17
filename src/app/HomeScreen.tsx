import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useGetForecastByLatAndLongQuery } from "./redux/apiSlice";
import Loader from "./components/Loader";
import WeatherOverview from "./components/WeatherOverview";
import WeatherForecast from "./components/WeatherForecast";
import { colors } from "./styles/Theme";

export default function HomeScreen() {
  const [theme, setTheme] = useState<string>(colors.sunny);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <WeatherOverview
          onWeatherLoaded={(value: string) => {
            setTheme(value);
          }}
        />
        <WeatherForecast backgroundColor={theme} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
