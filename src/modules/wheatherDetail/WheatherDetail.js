import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import Loader from "../../components/Loader.js";
import Wrapper from "../../components/Wrapper";
import { Strings } from "../../constants/index.js";
import { horizontalScale, Icons, verticalScale } from "../../theme";
import { kelvinToCel, tempUnitSymbol } from "../../utils";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import styles from "./WheatherDetail.Styles";

const ASPECT_RATIO = horizontalScale(375) / verticalScale(812);
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const WheatherDetail = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [cityInfo, setCityInfo] = useState(props.route.params?.cityDetail);

  let region = {
    latitude: cityInfo.coord.lat,
    longitude: cityInfo.coord.lon,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };

  return (
    <Wrapper>
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={region}
        region={region}
        minZoomLevel={14}
        maxZoomLevel={14}
        style={styles.map}
      >
        <Marker coordinate={region}>
          <Image style={styles.marker} source={Icons.marker} />
          <Text style={styles.markerText}>{cityInfo.name}</Text>
        </Marker>
      </MapView>
      <View style={styles.detailContainer}>
        <View>
          <Text style={styles.cityName}>{cityInfo.name}</Text>
          <Text style={styles.otherDesc}>
            {cityInfo.weather[0].description}
          </Text>
          <Text style={styles.otherDesc}>
            {`${Strings.humidity}: `}
            {cityInfo.main.humidity}
          </Text>
          <Text style={styles.otherDesc}>
            {`${Strings.windSpeed}: `}
            {cityInfo.wind.speed}
          </Text>
          <Text style={styles.otherDesc}>
            {`${Strings.maxTemp}: `}
            {kelvinToCel(cityInfo.main.temp_max)}
            {tempUnitSymbol}
          </Text>
          <Text style={styles.otherDesc}>
            {`${Strings.minTemp}: `}
            {kelvinToCel(cityInfo.main.temp_min)}
            {tempUnitSymbol}
          </Text>
        </View>
        <View>
          <Text style={styles.temp}>
            {kelvinToCel(cityInfo.main.temp)}
            {tempUnitSymbol}
          </Text>
          <Image
            style={styles.wheatherIcon}
            source={{
              uri: `http://openweathermap.org/img/wn/${cityInfo.weather[0].icon}@2x.png`,
            }}
          />
        </View>
      </View>
      <Loader isAnimate={isLoading} />
    </Wrapper>
  );
};

export default WheatherDetail;
