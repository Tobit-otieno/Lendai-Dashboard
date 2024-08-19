import {
  DimensionValue,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Svg, Path } from "react-native-svg";
import Header from "./Components/Header";
import { LinearGradient } from "expo-linear-gradient";

const ProductAndPricing = (props: any) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground source={props.background} imageStyle={styles.BackGround}>
        <LinearGradient
          colors={["rgba(138,88,245,0.95)", "rgba(138,88,245,0.5)"]} // Define your gradient colors
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.overlay}
        />
        <Header />
        {props.topContent}
        <View style={{ width: "100%" }}>
          <Svg viewBox="0 0 1440 319">
            <Path
              fill="white"
              fillOpacity="1"
              d="M0,160L80,176C160,192,320,224,480,245.3C640,267,800,277,960,261.3C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            />
          </Svg>
        </View>
      </ImageBackground>
      <View>{props.children}</View>
    </ScrollView>
  );
};

export default ProductAndPricing;

const styles = StyleSheet.create({
  BackGround: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
});
