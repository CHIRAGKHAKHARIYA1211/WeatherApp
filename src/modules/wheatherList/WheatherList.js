import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import WheatherCityRow from "../../components/WheatherCityRow";
import Wrapper from "../../components/Wrapper";
import Loader from "../../components/Loader";
import { verticalScale } from "../../theme";
import { fetchCityList } from "../../action.js";
import styles from "./WheatherList.Styles";

const WheatherList = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [cityData, setCityData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetchCityList(23.68, 90.35, 50)
      .then((res) => {
        setIsLoading(false);
        setCityData(res.list);
      })
      .catch((er) => {
        setIsLoading(false);
        alert(er.message);
      });
  }, []);

  const renderCityItem = (item, index) => {
    return (
      <WheatherCityRow
        data={item}
        index={index}
        onPressCityRow={() => {
          props.navigation.navigate("WheatherDetail", {
            cityDetail: item,
          });
        }}
      />
    );
  };

  return (
    <Wrapper>
      <FlatList
        style={{ marginTop: verticalScale(10) }}
        data={cityData}
        keyExtractor={(item, i) => i.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item, index }) => {
          return renderCityItem(item, index);
        }}
      />
      <Loader isAnimate={isLoading} />
    </Wrapper>
  );
};

export default WheatherList;
