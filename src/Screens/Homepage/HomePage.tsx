import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Animated,
  Image,
} from "react-native";
import React from "react";
import { useState, useRef } from "react";
import HomePagelayout from "../../Components/Layouts/HomePagelayout";
import { Svg, Path } from "react-native-svg";
import SimpleLabel from "../../Components/Lables/SimpleLable";
import { isSmallScreen, isTablet } from "../../Utilities/DeviceCheker";
import ProductCard from "./Components/ProductCard";
import Spacing from "../../Utilities/Spacing";
import Paginator from "./Components/Paginator";
import { cardColor, primaryColor } from "../../Utilities/Colors";
import Fontisto from "react-native-vector-icons/Fontisto";
import INvestosCard from "./Components/INvestosCard";
import { avarage, normal } from "../../Utilities/Fontsize";
import SimpleButton from "../../Components/Buttons/SimpleButton";
import Testimonials from "./Components/Testimonials";
import { ContentSize } from "../../Utilities/ContentResize";
import SimpleInput from "../../Components/Inputs/SimpleInput";

const Hopepage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollx = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const ViewedItemChanged = useRef(({ ViwableItem }) => {
    setCurrentIndex(ViwableItem[0].index);
  }).current;

  const viewConfig = useRef({ viewAresCovaragePercentThreshold: 50 }).current;

  return (
    <HomePagelayout>
      <SimpleLabel
        type={"large"}
        fontWeight={"bold"}
        children={"Lendai Products"}
        AlignText={true}
      />
      {!isSmallScreen() ? (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 80,
          }}
        >
          <ProductCard
            image={require("../../../assets/Images/pic1.png")}
            title={"Pre-Approval"}
            details={
              "Boost credibility and focus on proparties within your financial range"
            }
          />
          <Spacing leftSpace="small" />
          <Spacing leftSpace="small" />
          <ProductCard
            image={require("../../../assets/Images/pic2.png")}
            title={"New Purchase"}
            details={
              "Tripple your purchasing power of a new proparty and reach your investment goals"
            }
          />
          <Spacing leftSpace="small" />
          <Spacing leftSpace="small" />
          <ProductCard
            image={require("../../../assets/Images/pic3.png")}
            title={"Refinance"}
            details={`Replace excisting terms and rate or extract equity based on the proparty'S current value`}
          />
          <Spacing leftSpace="small" />
          <Spacing leftSpace="small" />
          <ProductCard
            image={require("../../../assets/Images/pic2.png")}
            title={"Portfolio Finance"}
            details={
              "Tailourd solutions for purchasing maltiple intestment proparties"
            }
          />
        </View>
      ) : (
        <View style={{ alignItems: "center" }}>
          <View
            style={{
              alignItems: "center",
              marginTop: 24,
              paddingHorizontal: 24,
              flex: 4,
            }}
          >
            <FlatList
              style={{ width: 350 }}
              data={[
                {
                  image: require("../../../assets/Images/pic1.png"),
                  title: "Pre-Approval",
                  details:
                    "Boost credibility and focus on proparties within your financial range",
                },
                {
                  image: require("../../../assets/Images/pic2.png"),
                  title: "New Purchase",
                  details:
                    "Tripple your purchasing power of a new proparty and reach your investment goals",
                },
                {
                  image: require("../../../assets/Images/pic3.png"),
                  title: "Refinance",
                  details:
                    "Replace excisting terms and rate or extract equity based on the proparty'S current value",
                },
                {
                  image: require("../../../assets/Images/pic2.png"),
                  title: "Portfolio Finance",
                  details:
                    "Tailourd solutions for purchasing maltiple intestment proparties",
                },
              ]}
              renderItem={({ item }) => (
                <ProductCard
                  image={item.image}
                  title={item.title}
                  details={item.details}
                />
              )}
              keyExtractor={(item, index) => `product-${index}`}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              pagingEnabled={true}
              bounces={false}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollx } } }],
                {
                  useNativeDriver: false,
                },
              )}
              scrollEventThrottle={32}
              onViewableItemsChanged={ViewedItemChanged}
              viewabilityConfig={viewConfig}
              ref={slidesRef}
            />
          </View>
          <Spacing bottomSpace="normal" />
          <Paginator
            dotColor={primaryColor}
            data={[
              {
                image: require("../../../assets/Images/pic1.png"),
                title: "Pre-Approval",
                details:
                  "Boost credibility and focus on proparties within your financial range",
              },
              {
                image: require("../../../assets/Images/pic2.png"),
                title: "New Purchase",
                details:
                  "Tripple your purchasing power of a new proparty and reach your investment goals",
              },
              {
                image: require("../../../assets/Images/pic3.png"),
                title: "Refinance",
                details:
                  "Replace excisting terms and rate or extract equity based on the proparty'S current value",
              },
              {
                image: require("../../../assets/Images/pic2.png"),
                title: "Portfolio Finance",
                details:
                  "Tailourd solutions for purchasing maltiple intestment proparties",
              },
            ]}
            scrollX={scrollx}
          />
        </View>
      )}
      <Spacing bottomSpace="normal" />
      <Spacing bottomSpace="normal" />

      <View
        style={{ alignItems: "center", marginTop: isSmallScreen() ? 0 : 70 }}
      >
        <View
          style={{
            width: isSmallScreen() ? "90%" : "70%",
            backgroundColor: primaryColor,
            borderRadius: 16,
            padding: 16,
            alignItems: "center",
          }}
        >
          <Spacing bottomSpace="normal" />
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
          </View>
          <Spacing bottomSpace="normal" />
          <Spacing bottomSpace="normal" />
          <View style={{ width: isSmallScreen() ? "90%" : "55%" }}>
            <SimpleLabel
              AlignText={true}
              color={"white"}
              type={"normal"}
              fontWeight={"normal"}
              children={
                "I awas amazed how quick and easy it was for me to get a pre-aproval letter from lendai. All it took was a few minutes of my time and i was ready with a pre-approval letter that my agent could use to make my parchase order stand out from the other applicants"
              }
            />
            <Spacing bottomSpace="normal" />
            <Spacing bottomSpace="normal" />
            <SimpleLabel
              type={"normal"}
              fontWeight={"bold"}
              children={"T.O.Otieno"}
              color={"white"}
              AlignText={true}
            />
            <Spacing bottomSpace="normal" />
            <SimpleLabel
              type={"normal"}
              fontWeight={"normal"}
              children={"Canadian Investor"}
              color={"white"}
              AlignText={true}
            />
          </View>
          <Spacing bottomSpace="normal" />
        </View>
        <Spacing bottomSpace="normal" />
        <Spacing bottomSpace="normal" />
        <Spacing bottomSpace="normal" />
        <SimpleLabel
          type={"large"}
          fontWeight={"bold"}
          children={"The best US leader"}
          AlignText={true}
        />
        <SimpleLabel
          type={"large"}
          fontWeight={"bold"}
          children={"for Foreign investors"}
          AlignText={true}
        />
        <Spacing bottomSpace="normal" />
        <Spacing bottomSpace="normal" />
        <View
          style={{
            flexDirection: isSmallScreen() ? "column" : "row",
            alignItems: "center",
          }}
        >
          <INvestosCard />
          <Spacing leftSpace="small" />
          <Spacing leftSpace="small" />
          <Spacing bottomSpace="normal" />
          <INvestosCard />
          <Spacing leftSpace="small" />
          <Spacing leftSpace="small" />
          <Spacing bottomSpace="normal" />
          <INvestosCard />
        </View>
        <Spacing bottomSpace="normal" />
        <Spacing bottomSpace="normal" />
        <View
          style={{
            flexDirection: isSmallScreen() ? "column-reverse" : "row",
            justifyContent: "space-between",
            width: isSmallScreen() ? "90%" : "70%",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: isSmallScreen() ? "100%" : "45%",
              alignItems: isSmallScreen() ? "center" : "flex-start",
            }}
          >
            <SimpleLabel
              type={"large"}
              fontWeight={"bold"}
              children={`Lendai's Patner`}
              AlignText={isSmallScreen() ? true : false}
            />
            <SimpleLabel
              type={"large"}
              fontWeight={"bold"}
              children={`Network`}
              AlignText={isSmallScreen() ? true : false}
            />
            <Spacing bottomSpace="normal" />
            <SimpleLabel
              type={"normal"}
              fontWeight={"normal"}
              children={
                "Lendai patners with the best real estate professionals to help foregn investors access US financing. Your investment team hould include Lendai so we can help you grow and diversify your investment portfolio in the US thus lower risks"
              }
              AlignText={isSmallScreen() ? true : false}
              color={"gray"}
            />
            <Spacing bottomSpace="normal" />
            <SimpleButton
              fontSize={avarage}
              fontWeight={"bold"}
              fontColor={"white"}
              content={"Join as a Partner"}
              onPress={undefined}
              backGroundColor={primaryColor}
              borderRadius={5}
              borderWidth={2}
              borderColor={"white"}
              height={50}
              width={isSmallScreen() ? 160 : 180}
            />
          </View>
          <View
            style={{
              width: 300,
              height: 300,
              backgroundColor: primaryColor,
              borderRadius: 150,
              marginBottom: 24,
            }}
          ></View>
        </View>
        <Spacing bottomSpace="normal" />
        <Spacing bottomSpace="normal" />
        <Spacing bottomSpace="normal" />
        <Testimonials />
        <Spacing bottomSpace="normal" />
        <Spacing bottomSpace="normal" />
        <Spacing bottomSpace="normal" />
        <SimpleLabel
          type={"large"}
          fontWeight={"bold"}
          children={`As Featured In`}
          AlignText={isSmallScreen() ? true : false}
        />
        <Spacing bottomSpace="normal" />
        <Spacing bottomSpace="normal" />
        <Spacing bottomSpace="normal" />
        <View
          style={{
            flexDirection: isSmallScreen() ? "column" : "row",
            width: isSmallScreen() ? "95%" : "auto",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../../../assets/Images/Screenshot from 2024-08-17 22-25-03.png")}
              style={styles.image}
            />
            <Spacing leftSpace="small" />
            <Spacing leftSpace="small" />
            <Image
              source={require("../../../assets/Images/Screenshot from 2024-08-17 22-25-13.png")}
              style={styles.image}
            />
          </View>
          <Spacing leftSpace="small" />
          <Spacing leftSpace="small" />
          <Spacing bottomSpace="normal" />
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../../../assets/Images/Screenshot from 2024-08-17 22-25-19.png")}
              style={styles.image}
            />
            <Spacing leftSpace="small" />
            <Spacing leftSpace="small" />
            <Image
              source={require("../../../assets/Images/Screenshot from 2024-08-17 22-25-25.png")}
              style={styles.image}
            />
          </View>
        </View>
        <Spacing bottomSpace="normal" />
        <Spacing bottomSpace="normal" />
        <Spacing bottomSpace="normal" />
        <Spacing bottomSpace="normal" />
        <Spacing bottomSpace="normal" />

        <View
          style={{
            width: isSmallScreen() ? "90%" : "70%",
            height: isSmallScreen() ? 430 : 350,
            backgroundColor: cardColor,
            borderRadius: ContentSize(16),
            flexDirection: isSmallScreen() ? "column-reverse" : "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: isSmallScreen() ? 16 : "4%",
            paddingVertical: 24,
            marginTop: isSmallScreen() ? 10 : 90,
          }}
        >
          <View
            style={{
              width: isSmallScreen() ? "100%" : "40%",
              alignItems: isSmallScreen() ? "center" : "flex-start",
            }}
          >
            <SimpleLabel
              type={isSmallScreen() ? "medium" : "large"}
              fontWeight={"bold"}
              children={`Start Financing Your`}
              color={"white"}
            />
            <SimpleLabel
              type={isSmallScreen() ? "medium" : "large"}
              fontWeight={"bold"}
              children={`US proparty Today`}
              color={"white"}
            />
            <Spacing bottomSpace="normal" />
            <SimpleButton
              fontSize={avarage}
              fontWeight={"bold"}
              fontColor={cardColor}
              content={`let's Connect`}
              onPress={undefined}
              backGroundColor={"white"}
              borderRadius={5}
              borderWidth={2}
              borderColor={"white"}
              height={50}
              width={180}
            />
          </View>
          <View
            style={{
              height: isSmallScreen() ? 190 : 230,
              width: isSmallScreen() ? 270 : 450,
              position: "absolute",
              top: 0,
              right: isSmallScreen() ? 80 : 100,
              borderRadius: ContentSize(16),
              borderWidth: 2,
              borderColor: "white",
            }}
          />
          <View
            style={{
              height: isSmallScreen() ? 200 : 250,
              width: isSmallScreen() ? 300 : 450,
              position: "relative",
              top: isSmallScreen() ? -40 : -80,
            }}
          >
            <Image
              source={require("../../../assets/Images/House.jpg")}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: ContentSize(16),
              }}
            />
            <View
              style={{
                width: 250,
                backgroundColor: "white",
                height: 75,
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                position: "relative",
                top: isSmallScreen() ? -20 : -40,
                left: -30,
                padding: isSmallScreen() ? 10 : 16,
              }}
            >
              <SimpleLabel
                type={"normal"}
                fontWeight={"normal"}
                children={"Canadian investor"}
              />

              <SimpleLabel
                type={"normal"}
                fontWeight={"bold"}
                children={"$ 200,000.00"}
              />
            </View>
          </View>
        </View>
        <Spacing bottomSpace="normal" />
        <Spacing bottomSpace="normal" />
        <Spacing bottomSpace="normal" />
        <Spacing bottomSpace="normal" />
        <Spacing bottomSpace="normal" />
        <View
          style={{
            width: isSmallScreen() ? "90%" : "70%",
            flexDirection: isSmallScreen() ? "column" : "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ width: isSmallScreen() ? "100%" : "40%" }}>
            <SimpleLabel
              type={"large"}
              fontWeight={"bold"}
              children={"Lendai Newsletter"}
              AlignText={isSmallScreen() ? true : false}
            />
            <Spacing bottomSpace="small" />
            <SimpleLabel
              type={"avarage"}
              fontWeight={"normal"}
              children={`Don't miss out if you want to ear from us on the latest US financing for foregn investors, services ,products and special products subscribe to our news letter`}
              AlignText={isSmallScreen() ? true : false}
              color={"gray"}
            />
          </View>
          <Spacing bottomSpace="normal" />
          <View style={{ width: isSmallScreen() ? "100%" : "40%" }}>
            <View
              style={{
                flexDirection: isSmallScreen() ? "column" : "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <SimpleInput
                onChangeText={undefined}
                hint={"Enter Email Address"}
                inputError={false}
                minHeigt={50}
                borderRadius={5}
                width={isSmallScreen() ? 380 : 330}
              />
              <Spacing bottomSpace="normal" />

              <SimpleButton
                fontSize={normal}
                fontWeight={"bold"}
                fontColor={"white"}
                content={"Subscribe"}
                onPress={undefined}
                backGroundColor={primaryColor}
                borderRadius={5}
                borderWidth={0}
                borderColor={primaryColor}
                height={50}
                width={isSmallScreen() ? 380 : 180}
              />
            </View>
            <Spacing bottomSpace="small" />
            <SimpleLabel
              type={"avarage"}
              fontWeight={"normal"}
              children={
                <View style={{ flexDirection: "row" }}>
                  <Fontisto
                    name={"checkbox-passive"}
                    size={isSmallScreen() ? 15 : 20}
                    color={"gray"}
                  />
                  <Spacing leftSpace="small" />I approve receiving newsletter
                  and marketing emails from lendai via email
                </View>
              }
              color={"gray"}
            />
          </View>
        </View>
        <Spacing bottomSpace="normal" />
        <Spacing bottomSpace="normal" />
        <Spacing bottomSpace="normal" />
        <Spacing bottomSpace="normal" />
      </View>
    </HomePagelayout>
  );
};

export default Hopepage;

const styles = StyleSheet.create({
  image: {
    width: isSmallScreen() ? 180 : 200,
    height: ContentSize(80),
    borderRadius: 10,
  },
});
