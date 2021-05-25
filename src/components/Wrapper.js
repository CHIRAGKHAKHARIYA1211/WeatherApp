import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Colors } from "../theme";

const Wrapper = ({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default Wrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBG,
  },
});
