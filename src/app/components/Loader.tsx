import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../styles/Theme";

type Props = {
  isLoading: boolean;
};

const Loader = (props: Props) => {
  if (!props.isLoading) return null;

  return <ActivityIndicator size="large" color={colors.white} />;
};

export default Loader;

const styles = StyleSheet.create({});
