import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/app/HomeScreen";
import { store } from "./src/app/redux/store";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { forecastApi } from "./src/app/redux/apiSlice";

export default function App() {
  return (
    <Provider store={store}>
      <ApiProvider api={forecastApi}>
        <View style={styles.container}>
          <HomeScreen />
          <StatusBar style="auto" />
        </View>
      </ApiProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
