import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useGetForecastByLatAndLongQuery } from "./redux/apiSlice";
import Loader from "./components/Loader";
import WeatherOverview from "./components/WeatherOverview";
import WeatherForecast from "./components/WeatherForecast";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {/* <Loader isLoading={isLoading} /> */}
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
