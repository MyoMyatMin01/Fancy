import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Onboard1, Onboard } from "../components";
// import {Onboard1} from "../components";

const { Navigator, Screen } = createStackNavigator();

const AuthenticationNavigator = () => {
  return (
    <Navigator headerMode="none" >
      <Screen name="Onboard" component={Onboard} />
    </Navigator>
  );
};

export default OnboardNavigator = () => {
  return (
    <NavigationContainer>
      <AuthenticationNavigator />
    </NavigationContainer>
  );
};
