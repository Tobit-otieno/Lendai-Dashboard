import React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  DimensionValue,
  Dimensions,
  Image,
} from "react-native";
import { Svg, Path } from "react-native-svg";
import Header from "./Components/Header";
import { primaryColor } from "../../Utilities/Colors";
import { ScrollView } from "react-native-gesture-handler";
import { isSmallScreen, isTablet } from "../../Utilities/DeviceCheker";
import SimpleLabel from "../Lables/SimpleLable";
import Spacing from "../../Utilities/Spacing";
import SimpleButton from "../Buttons/SimpleButton";
import { avarage, normal } from "../../Utilities/Fontsize";
import Fontisto from "react-native-vector-icons/Fontisto";
import { LinearGradient } from "expo-linear-gradient";
// import Imgs from '../../../assets/Images/wavepic.png'
const HomePagelayout = (props: any) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground
        source={require("../../../assets/Images/BackGround.png")}
        imageStyle={styles.BackGround}
      >
        <LinearGradient
          colors={["rgba(138,88,245,0.95)", "rgba(138,88,245,0.5)"]} // Define your gradient colors
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.overlay}
        />
        <Header />
        <View
          style={{
            flexDirection: isSmallScreen() ? "column" : "row",
            paddingHorizontal: isSmallScreen() ? 0 : "5%",
            justifyContent: "space-between",
            marginTop: isSmallScreen() ? "5%" : "4%",
          }}
        >
          <View style={styles.textContainer}>
            <SimpleLabel
              type={isSmallScreen() ? "large" : "extraLarge"}
              fontWeight={"bold"}
              children={"US Financing for"}
              color={"white"}
            />

            <ImageBackground
              source={require("../../../assets/Images/Wave2.png")}
              style={{
                width: "93%",
                paddingTop: isSmallScreen() ? 50 : 41,
                marginTop: isSmallScreen() ? -40 : -20,
                paddingLeft: 20,
                marginLeft: isSmallScreen() ? 20 : 0,
              }}
            >
              <SimpleLabel
                type={isSmallScreen() ? "large" : "extraLarge"}
                fontWeight={"bold"}
                children={"Foreign Investors"}
                color={primaryColor}
              />
            </ImageBackground>

            <Spacing bottomSpace="small" />
            <Spacing bottomSpace="small" />
            <SimpleLabel
              type={isSmallScreen() ? "normal" : "medium"}
              fontWeight={"bold"}
              children={
                "Levlling the playing field for global investers in the US real estate market"
              }
              color={"white"}
              AlignText={isSmallScreen() ? true : false}
            />
            <Spacing bottomSpace="small" />
            <Spacing bottomSpace="small" />
            <Spacing bottomSpace="small" />
            <SimpleButton
              fontSize={normal}
              fontWeight={"bold"}
              fontColor={primaryColor}
              content={"Our investors"}
              onPress={undefined}
              backGroundColor={"white"}
              borderRadius={5}
              borderWidth={0}
              borderColor={primaryColor}
              height={60}
              width={150}
            />
          </View>
          <Spacing bottomSpace="normal" />
          <Spacing bottomSpace="normal" />
          <Spacing bottomSpace="small" />
          <View style={styles.ImageContainer}>
            <View style={styles.ImageFadedCard}>
              <View style={styles.CardOverlay}></View>
              <Image
                source={require("../../../assets/Images/House.jpg")}
                style={{ width: "100%", height: 200, borderRadius: 16 }}
              />
              <Spacing bottomSpace="normal" />
              <SimpleLabel
                type={"avarage"}
                fontWeight={undefined}
                children={"Canadian Investor"}
              />
              <Spacing bottomSpace="small" />
              <SimpleLabel
                type={"normal"}
                fontWeight={"bold"}
                children={"$ 220 ,000 Loan Amount"}
              />
              <Spacing bottomSpace="small" />
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <SimpleLabel
                  type={"small"}
                  fontWeight={undefined}
                  children={
                    <>
                      <Fontisto
                        name={"file-1"}
                        size={20}
                        color={primaryColor}
                      />
                      <Spacing leftSpace="small" />
                      Cash-out
                    </>
                  }
                />
                <Spacing leftSpace="small" />
                <Spacing leftSpace="small" />
                <SimpleLabel
                  type={"small"}
                  fontWeight={undefined}
                  children={
                    <>
                      <Fontisto
                        name={"map-marker-alt"}
                        size={20}
                        color={primaryColor}
                      />
                      <Spacing leftSpace="small" />
                      Florida, USA
                    </>
                  }
                />
              </View>
              <Spacing bottomSpace="normal" />
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <SimpleLabel
                  type={"small"}
                  fontWeight={undefined}
                  children={
                    <>
                      <Fontisto name={"home"} size={20} color={primaryColor} />
                      <Spacing leftSpace="small" />
                      single Family
                    </>
                  }
                />
                <Spacing leftSpace="small" />
                <Spacing leftSpace="small" />
                <SimpleLabel
                  type={"small"}
                  fontWeight={undefined}
                  children={
                    <>
                      <Fontisto
                        name={"shopping-sale"}
                        size={20}
                        color={primaryColor}
                      />
                      <Spacing leftSpace="small" />
                      7% LTV
                    </>
                  }
                />
              </View>
            </View>

            <View style={styles.ImageTopCard}>
              <Image
                source={require("../../../assets/Images/House.jpg")}
                style={{ width: "100%", height: 200, borderRadius: 16 }}
              />
              <Spacing bottomSpace="normal" />
              <SimpleLabel
                type={"avarage"}
                fontWeight={undefined}
                children={"Canadian Investor"}
              />
              <Spacing bottomSpace="small" />
              <SimpleLabel
                type={"normal"}
                fontWeight={"bold"}
                children={"$ 220 ,000 Loan Amount"}
              />
              <Spacing bottomSpace="small" />
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <SimpleLabel
                  type={"small"}
                  fontWeight={undefined}
                  children={
                    <>
                      <Fontisto
                        name={"file-1"}
                        size={20}
                        color={primaryColor}
                      />
                      <Spacing leftSpace="small" />
                      Cash-out
                    </>
                  }
                />
                <Spacing leftSpace="small" />
                <Spacing leftSpace="small" />
                <SimpleLabel
                  type={"small"}
                  fontWeight={undefined}
                  children={
                    <>
                      <Fontisto
                        name={"map-marker-alt"}
                        size={20}
                        color={primaryColor}
                      />
                      <Spacing leftSpace="small" />
                      Florida, USA
                    </>
                  }
                />
              </View>
              <Spacing bottomSpace="normal" />
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <SimpleLabel
                  type={"small"}
                  fontWeight={undefined}
                  children={
                    <>
                      <Fontisto name={"home"} size={20} color={primaryColor} />
                      <Spacing leftSpace="small" />
                      single Family
                    </>
                  }
                />
                <Spacing leftSpace="small" />
                <Spacing leftSpace="small" />
                <SimpleLabel
                  type={"small"}
                  fontWeight={undefined}
                  children={
                    <>
                      <Fontisto
                        name={"shopping-sale"}
                        size={20}
                        color={primaryColor}
                      />
                      <Spacing leftSpace="small" />
                      7% LTV
                    </>
                  }
                />
              </View>
            </View>

            <View style={styles.ImageFadedCard}>
              <View style={styles.CardOverlay}></View>
              <Image
                source={require("../../../assets/Images/House.jpg")}
                style={{ width: "100%", height: 200, borderRadius: 16 }}
              ></Image>
              <Spacing bottomSpace="normal" />
              <SimpleLabel
                type={"avarage"}
                fontWeight={undefined}
                children={"Canadian Investor"}
              />
              <Spacing bottomSpace="small" />
              <SimpleLabel
                type={"normal"}
                fontWeight={"bold"}
                children={"$ 220 ,000 Loan Amount"}
              />
              <Spacing bottomSpace="small" />
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <SimpleLabel
                  type={"small"}
                  fontWeight={undefined}
                  children={
                    <>
                      <Fontisto
                        name={"file-1"}
                        size={20}
                        color={primaryColor}
                      />
                      <Spacing leftSpace="small" />
                      Cash-out
                    </>
                  }
                />
                <Spacing leftSpace="small" />
                <Spacing leftSpace="small" />
                <SimpleLabel
                  type={"small"}
                  fontWeight={undefined}
                  children={
                    <>
                      <Fontisto
                        name={"map-marker-alt"}
                        size={20}
                        color={primaryColor}
                      />
                      <Spacing leftSpace="small" />
                      Florida, USA
                    </>
                  }
                />
              </View>
              <Spacing bottomSpace="normal" />
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <SimpleLabel
                  type={"small"}
                  fontWeight={undefined}
                  children={
                    <>
                      <Fontisto name={"home"} size={20} color={primaryColor} />
                      <Spacing leftSpace="small" />
                      single Family
                    </>
                  }
                />
                <Spacing leftSpace="small" />
                <Spacing leftSpace="small" />
                <SimpleLabel
                  type={"small"}
                  fontWeight={undefined}
                  children={
                    <>
                      <Fontisto
                        name={"shopping-sale"}
                        size={20}
                        color={primaryColor}
                      />
                      <Spacing leftSpace="small" />
                      7% LTV
                    </>
                  }
                />
              </View>
            </View>
          </View>
        </View>
        <Spacing bottomSpace="normal" />
        <Spacing bottomSpace="normal" />
        <Spacing bottomSpace="normal" />
        <Spacing bottomSpace="normal" />

        <View
          style={{
            width: "100%",
            flexDirection: isSmallScreen() ? "column" : "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <SimpleLabel
              type={isSmallScreen() ? "small" : "normal"}
              fontWeight={"normal"}
              children={"Excellent"}
              color={"white"}
            />
            <Spacing leftSpace="small" />
            <View style={{ flexDirection: "row" }}>
              <Fontisto
                name={"star"}
                size={isSmallScreen() ? 15 : 20}
                color={"gold"}
              />
              <Spacing leftSpace="small" />
              <Fontisto
                name={"star"}
                size={isSmallScreen() ? 15 : 20}
                color={"gold"}
              />
              <Spacing leftSpace="small" />
              <Fontisto
                name={"star"}
                size={isSmallScreen() ? 15 : 20}
                color={"gold"}
              />
              <Spacing leftSpace="small" />
              <Fontisto
                name={"star"}
                size={isSmallScreen() ? 15 : 20}
                color={"gold"}
              />
              <Spacing leftSpace="small" />
              <Fontisto
                name={"star"}
                size={isSmallScreen() ? 15 : 20}
                color={"gold"}
              />
              <Spacing leftSpace="small" />
            </View>
            <Spacing leftSpace="small" />
            <Spacing leftSpace="small" />
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Fontisto
                name={"like"}
                size={isSmallScreen() ? 15 : 20}
                color={"blue"}
              />
              <Spacing leftSpace="small" />
              <SimpleLabel
                type={isSmallScreen() ? "small" : "normal"}
                fontWeight={"normal"}
                children={"BiggerPokets"}
                color={"white"}
              />
            </View>
          </View>
          <Spacing leftSpace="small" />
          <Spacing leftSpace="small" />
          <Spacing leftSpace="small" />
          <Spacing leftSpace="small" />
          <Spacing bottomSpace="normal" />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <SimpleLabel
              type={isSmallScreen() ? "small" : "normal"}
              fontWeight={"normal"}
              children={"Excellent"}
              color={"white"}
            />
            <Spacing leftSpace="small" />
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  padding: 3,
                  backgroundColor: "green",
                  borderRadius: 1,
                }}
              >
                <Fontisto
                  name={"star"}
                  size={isSmallScreen() ? 14 : 17}
                  color={"white"}
                />
              </View>
              <Spacing leftSpace="small" />
              <View
                style={{
                  padding: 3,
                  backgroundColor: "green",
                  borderRadius: 1,
                }}
              >
                <Fontisto
                  name={"star"}
                  size={isSmallScreen() ? 14 : 17}
                  color={"white"}
                />
              </View>

              <Spacing leftSpace="small" />
              <View
                style={{
                  padding: 3,
                  backgroundColor: "green",
                  borderRadius: 1,
                }}
              >
                <Fontisto
                  name={"star"}
                  size={isSmallScreen() ? 14 : 17}
                  color={"white"}
                />
              </View>

              <Spacing leftSpace="small" />
              <View
                style={{
                  padding: 3,
                  backgroundColor: "green",
                  borderRadius: 1,
                }}
              >
                <Fontisto
                  name={"star"}
                  size={isSmallScreen() ? 14 : 17}
                  color={"white"}
                />
              </View>

              <Spacing leftSpace="small" />
              <View
                style={{
                  padding: 3,
                  backgroundColor: "green",
                  borderRadius: 1,
                }}
              >
                <Fontisto
                  name={"star"}
                  size={isSmallScreen() ? 14 : 17}
                  color={"white"}
                />
              </View>
              <Spacing leftSpace="small" />
            </View>
            <Spacing leftSpace="small" />
            <Spacing leftSpace="small" />
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Fontisto
                name={"star"}
                size={isSmallScreen() ? 15 : 20}
                color={"green"}
              />
              <Spacing leftSpace="small" />
              <SimpleLabel
                type={isSmallScreen() ? "small" : "normal"}
                fontWeight={"normal"}
                children={"TrustPilots"}
                color={"white"}
              />
            </View>
          </View>
        </View>

        <View style={{ width: "100%" }}>
          <Svg viewBox="0 0 1440 319">
            <Path
              fill="white"
              fillOpacity="1"
              d="M0,160L80,170.7C160,181,320,203,480,192C640,181,800,139,960,122.7C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            />
          </Svg>
        </View>
      </ImageBackground>
      <View>{props.children}</View>
    </ScrollView>
  );
};

export default HomePagelayout;

const styles = StyleSheet.create({
  BackGround: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "90vh" as DimensionValue,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  ImageContainer: {
    width: isSmallScreen() ? "100%" : "40%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    width: isSmallScreen() ? "100%" : "37%",
    alignItems: isSmallScreen() ? "center" : "flex-start",
  },
  ImageFadedCard: {
    width: isSmallScreen() ? "70%" : "48%",
    backgroundColor: "white",
    borderRadius: isSmallScreen() ? 0 : 16,
    padding: 16,
  },
  ImageTopCard: {
    width: isSmallScreen() ? "73%" : "48%",
    backgroundColor: "white",
    borderRadius: 16,
    padding: 16,
    height: isSmallScreen() ? "110%" : "110%",
    position: "absolute",
    left: isSmallScreen() ? "15%" : "30%",
    zIndex: 20,
  },
  CardOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: `rgba(138,88,245,0.6)`,
    zIndex: 2,
  },
});
