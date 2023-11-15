import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useGetForecastByLatAndLongQuery } from "./redux/apiSlice";

export default function HomeScreen() {
  const {
    data: forecastByLatAndLong,
    error,
    isError,
    isLoading,
  } = useGetForecastByLatAndLongQuery({
    lat: "-34.02478408032439",
    long: "22.451752972728862",
  });
  console.tron.log("data", forecastByLatAndLong);
  return (
    <View>
      {isLoading ? <Text>Loading...</Text> : <Text>HomeScreen</Text>}
      <Button
        title="Press me"
        onPress={() => {
          console.tron.log("Pressed");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
