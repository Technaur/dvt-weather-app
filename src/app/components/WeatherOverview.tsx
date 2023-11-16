import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { images } from "../styles/Images";

type Props = {};

const WeatherOverview = (props: Props) => {
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
