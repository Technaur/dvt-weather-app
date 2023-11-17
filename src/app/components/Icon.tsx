import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { generateWeatherIcon } from "../functions/WeatherFunctions";

type Props = {
  iconName: string;
};

const Icon = (props: Props) => {
  return (
    <Image
      source={generateWeatherIcon(props.iconName)}
      resizeMode="cover"
      style={styles.container}
    />
  );
};

export default Icon;

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
  },
});
