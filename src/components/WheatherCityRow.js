import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { horizontalScale, verticalScale } from "../theme";
import { kelvinToCel, tempUnitSymbol } from "../utils";

const DEFAULT_DATA = {
  id: 1185241,
  name: "Dhaka",
  coord: {
    lat: 23.7104,
    lon: 90.4074,
  },
  main: {
    temp: 301.15,
    feels_like: 306.72,
    temp_min: 301.15,
    temp_max: 301.15,
    pressure: 1003,
    humidity: 89,
  },
  dt: 1621876145,
  wind: {
    speed: 4.12,
    deg: 130,
  },
  sys: {
    country: "BD",
  },
  rain: {
    "1h": 31.58,
  },
  snow: null,
  clouds: {
    all: 75,
  },
  weather: [
    {
      id: 503,
      main: "Rain",
      description: "very heavy rain",
      icon: "10n",
    },
  ],
};

const WheatherCityRow = (props) => {
  const { onPressCityRow, data, index } = props;
  return (
    <TouchableOpacity
      key={index}
      onPress={onPressCityRow}
      style={styles.container}
    >
      <View style={styles.nameContainer}>
        <Text style={styles.cityName}>{data.name}</Text>
        <Text>{data.weather[0].description}</Text>
      </View>
      <Text style={styles.temp}>
        {kelvinToCel(data.main.temp)}
        <Text style={styles.tempUnit}>{tempUnitSymbol}</Text>
      </Text>
    </TouchableOpacity>
  );
};
WheatherCityRow.defaultProps = {
  onPressCityRow: () => {},
  data: DEFAULT_DATA,
  index: 0,
};

WheatherCityRow.propTypes = {
  onPressCityRow: PropTypes.func,
  data: PropTypes.object,
  index: PropTypes.number,
};
export default WheatherCityRow;

const styles = StyleSheet.create({
  container: {
    padding: horizontalScale(10),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nameContainer: { alignSelf: "center" },
  cityName: {
    marginBottom: verticalScale(8),
    fontSize: horizontalScale(18),
    fontWeight: "500",
  },
  temp: {
    fontSize: horizontalScale(30),
    fontWeight: "400",
    alignSelf: "center",
  },
  tempUnit: { fontSize: horizontalScale(26) },
});
