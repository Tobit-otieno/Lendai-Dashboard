import { useFonts } from "expo-font";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, View } from "react-native";
import MobileRouting from "./src/Routing/MobileRouting";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import WebRouting from "./src/Routing/WebRouting";
import { isWeb } from "./src/Utilities/DeviceCheker";
const App = () => {
  //     const [fontsLoaded, fontError] = useFonts({
  //   Museo: require("./assets/fonts/MuseoModerno-Regular.ttf"),
  //   MuseoBold: require("./assets/fonts/MuseoModerno-Bold.ttf"),
  //   MuseoSemiBold: require("./assets/fonts/MuseoModerno-SemiBold.ttf"),
  //   MuseoBlack: require("./assets/fonts/MuseoModerno-Black.ttf"),
  // });
  return (
    <NavigationContainer>
      <GestureHandlerRootView>
        {isWeb() ? <WebRouting /> : <MobileRouting />}
      </GestureHandlerRootView>
    </NavigationContainer>
  );
};

export default App;
