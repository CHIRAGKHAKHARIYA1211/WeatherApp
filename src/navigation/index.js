import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { horizontalScale, Colors } from "../theme";
const Stack = createStackNavigator();
const Main = createStackNavigator();
import WheatherList from "../modules/wheatherList/WheatherList";
import WheatherDetail from "../modules/wheatherDetail/WheatherDetail";
import { Strings } from "../constants";

function HomeStack() {
  return (
    <Main.Navigator
      initialRouteName="WheatherList"
      screenOptions={({ navigation, route }) => ({
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitle,
        headerTintColor: Colors.headerTint,
      })}
    >
      <Main.Screen
        name="WheatherList"
        component={WheatherList}
        options={{
          headerTitle: Strings.appName,
        }}
      />
      <Main.Screen
        name="WheatherDetail"
        component={WheatherDetail}
        options={{
          headerTitle: Strings.appName,
          headerBackTitleVisible: false,
        }}
      />
    </Main.Navigator>
  );
}

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}
      >
        <Stack.Screen name="HomeStack" component={HomeStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const AppNavigator = () => {
  return <MainStackNavigator />;
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: Colors.headerColor,
    shadowColor: "#000",
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowRadius: 5,
    shadowOpacity: 1,
    elevation: 7,
  },
  headerTitle: {
    color: Colors.primaryFont,
    fontSize: horizontalScale(18),
  },
});

export default AppNavigator;
