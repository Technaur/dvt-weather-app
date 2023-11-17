import { Button, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import WeatherOverview from "./components/WeatherOverview";
import WeatherForecast from "./components/WeatherForecast";
import { colors } from "./styles/Theme";
import Loader from "./components/Loader";

export default function HomeScreen() {
  const [theme, setTheme] = useState<string>(colors.sunny);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
        <WeatherOverview
          onWeatherLoaded={(value: string) => {
            setTheme(value);
          }}
        />
        <WeatherForecast backgroundColor={theme} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
