import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../styles/Theme";

type Props = {};

const WeatherForecast = (props: Props) => {
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
