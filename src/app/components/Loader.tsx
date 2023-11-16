import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {
  isLoading: boolean;
};

const Loader = (props: Props) => {
  if (!props.isLoading) return null;

  return <ActivityIndicator />;
};

export default Loader;

const styles = StyleSheet.create({});
