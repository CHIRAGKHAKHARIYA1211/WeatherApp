import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../theme";

const styles = StyleSheet.create({
  map: {
    width: horizontalScale(375),
    height: verticalScale(500),
  },
  marker: {
    height: horizontalScale(25),
    width: horizontalScale(25),
    resizeMode: "contain",
    alignSelf: "center",
  },
  markerText: {
    fontSize: horizontalScale(14),
    fontWeight: "bold",
    alignSelf: "center",
  },
  detailContainer: {
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(25),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cityName: { fontSize: horizontalScale(20), fontWeight: "bold" },
  otherDesc: {
    fontSize: horizontalScale(18),
    marginTop: verticalScale(10),
  },
  temp: {
    fontSize: horizontalScale(30),
    position: "absolute",
    top: verticalScale(35),
    alignSelf: "center",
  },
  wheatherIcon: {
    height: horizontalScale(150),
    width: horizontalScale(150),
    marginTop: verticalScale(35),
  },
});

export default styles;
