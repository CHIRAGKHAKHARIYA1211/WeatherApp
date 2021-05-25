import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import Route from "./src/navigation";
import { Colors } from "./src/theme";

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.upperContainer} />
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={"light-content"} />
        <Route />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  upperContainer: { flex: 0, backgroundColor: Colors.headerColor },
  container: { flex: 1, backgroundColor: Colors.appBG },
});

export default App;
