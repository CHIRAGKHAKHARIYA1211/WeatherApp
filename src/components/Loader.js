import React from "react";
import { View, ActivityIndicator, StyleSheet, Modal } from "react-native";
import PropTypes from "prop-types";
import { Colors } from "../theme";
import { horizontalScale, verticalScale } from "../theme";

const Loader = ({ isAnimate }) => {
  if (!isAnimate) {
    return null;
  } else {
    return (
      <Modal transparent visible animationType="none">
        <View style={styles.container}>
          <View style={styles.overlay}>
            <ActivityIndicator
              animating
              style={styles.indicator}
              size="small"
              color="white"
            />
          </View>
        </View>
      </Modal>
    );
  }
};

Loader.propTypes = {
  isAnimate: PropTypes.bool,
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.loaderBg,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    backgroundColor: Colors.loaderBg,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(15),
    borderRadius: horizontalScale(5),
  },
  indicator: {
    height: horizontalScale(30),
    width: horizontalScale(30),
  },
});
