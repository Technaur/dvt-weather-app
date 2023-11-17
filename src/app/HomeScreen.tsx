import {
  Button,
  Linking,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import WeatherOverview from "./components/WeatherOverview";
import WeatherForecast from "./components/WeatherForecast";
import { colors } from "./styles/Theme";
import Loader from "./components/Loader";
import * as Location from "expo-location";

export default function HomeScreen() {
  const [theme, setTheme] = useState<string>(colors.sunny);

  const [location, setLocation] = useState<Location.LocationObject>();
  const [errorMsg, setErrorMsg] = useState("");

  const getLocationPermissions = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});

    setLocation(location);
  };

  useEffect(() => {
    (async () => {
      await getLocationPermissions();
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {!!location ? (
        <ScrollView contentContainerStyle={styles.container}>
          <WeatherOverview
            coordinates={{
              lat: location.coords.latitude,
              long: location.coords.longitude,
            }}
            onWeatherLoaded={(value: string) => {
              setTheme(value);
            }}
          />
          <WeatherForecast
            backgroundColor={theme}
            coordinates={{
              lat: location.coords.latitude,
              long: location.coords.longitude,
            }}
          />
        </ScrollView>
      ) : (
        <View style={styles.permissionContainer}>
          <Text>{errorMsg}</Text>
          <Button
            title="Enable location"
            onPress={async () => {
              if (Platform.OS === "android") {
                await getLocationPermissions();
                return;
              }
              Linking.openSettings();
            }}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  permissionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
