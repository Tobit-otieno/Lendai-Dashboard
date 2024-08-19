import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  FlatList,
  Animated,
} from "react-native";
import { useState, useRef } from "react";
import React from "react";
import { primaryColor } from "../../../Utilities/Colors";
import { isSmallScreen } from "../../../Utilities/DeviceCheker";
import SimpleLabel from "../../../Components/Lables/SimpleLable";
import Fontisto from "react-native-vector-icons/Fontisto";
import Spacing from "../../../Utilities/Spacing";
import TestimonialCards from "./TestimonialCards";
import Paginator from "./Paginator";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollx = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  return (
    <View
      style={{
        width: Dimensions.get("window").width,
        backgroundColor: primaryColor,
        paddingVertical: "3%",
        alignItems: "center",
      }}
    >
      {isSmallScreen() ? (
        <View>
          <SimpleLabel
            type={"medium"}
            fontWeight={"bold"}
            children={`What Foreign Investors`}
            AlignText={true}
            color={"white"}
          />
          <SimpleLabel
            type={"medium"}
            fontWeight={"bold"}
            children={`Write About Their`}
            AlignText={true}
            color={"white"}
          />
          <SimpleLabel
            type={"medium"}
            fontWeight={"bold"}
            children={`Experience With Lendai`}
            AlignText={true}
            color={"white"}
          />
        </View>
      ) : (
        <View>
          <SimpleLabel
            type={"large"}
            fontWeight={"bold"}
            children={`What Foreign Investors Write About `}
            AlignText={true}
            color={"white"}
          />
          <SimpleLabel
            type={"large"}
            fontWeight={"bold"}
            children={`Their Experience With Lendai`}
            AlignText={true}
            color={"white"}
          />
        </View>
      )}
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
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <React.Fragment key={index}>
                  <Fontisto
                    name={"star"}
                    size={isSmallScreen() ? 15 : 20}
                    color={"gold"}
                  />
                  <Spacing leftSpace="small" />
                </React.Fragment>
              ))}
          </View>
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
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <React.Fragment key={index}>
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
                </React.Fragment>
              ))}
          </View>
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
      <Spacing bottomSpace="normal" />
      <FlatList
        style={{ width: isSmallScreen() ? 350 : "100%" }}
        data={[
          {
            details: `"I tried to get a morgage for over 8 months, as a foreign buyer the process was very difficult.After talsking to like 5 diffrent lenders with no luck ,Miles got me the aproval efisiently and with no hustle ,he was a great healp definently strongly recomended!`,
          },
          {
            details: `"I tried to get a morgage for over 8 months, as a foreign buyer the process was very difficult.After talsking to like 5 diffrent lenders with no luck ,Miles got me the aproval efisiently and with no hustle ,he was a great healp definently strongly recomended!`,
          },
          {
            details: `"I tried to get a morgage for over 8 months, as a foreign buyer the process was very difficult.After talsking to like 5 diffrent lenders with no luck ,Miles got me the aproval efisiently and with no hustle ,he was a great healp definently strongly recomended!`,
          },
          {
            details: `"I tried to get a morgage for over 8 months, as a foreign buyer the process was very difficult.After talsking to like 5 diffrent lenders with no luck ,Miles got me the aproval efisiently and with no hustle ,he was a great healp definently strongly recomended!`,
          },
          {
            details: `"I tried to get a morgage for over 8 months, as a foreign buyer the process was very difficult.After talsking to like 5 diffrent lenders with no luck ,Miles got me the aproval efisiently and with no hustle ,he was a great healp definently strongly recomended!`,
          },
          {
            details: `"I tried to get a morgage for over 8 months, as a foreign buyer the process was very difficult.After talsking to like 5 diffrent lenders with no luck ,Miles got me the aproval efisiently and with no hustle ,he was a great healp definently strongly recomended!`,
          },
          {
            details: `"I tried to get a morgage for over 8 months, as a foreign buyer the process was very difficult.After talsking to like 5 diffrent lenders with no luck ,Miles got me the aproval efisiently and with no hustle ,he was a great healp definently strongly recomended!`,
          },
        ]}
        renderItem={({ item }) => <TestimonialCards details={item.details} />}
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
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
      <Spacing bottomSpace="normal" />
      <Spacing bottomSpace="normal" />
      <View style={{ width: "100%", alignItems: "center" }}>
        <Paginator
          dotColor="white"
          data={[
            {
              details: `"I tried to get a morgage for over 8 months, as a foreign buyer the process was very difficult.After talsking to like 5 diffrent lenders with no luck ,Miles got me the aproval efisiently and with no hustle ,he was a great healp definently strongly recomended!`,
              title: "",
            },
            {
              details: `"I tried to get a morgage for over 8 months, as a foreign buyer the process was very difficult.After talsking to like 5 diffrent lenders with no luck ,Miles got me the aproval efisiently and with no hustle ,he was a great healp definently strongly recomended!`,
              title: "",
            },
            {
              details: `"I tried to get a morgage for over 8 months, as a foreign buyer the process was very difficult.After talsking to like 5 diffrent lenders with no luck ,Miles got me the aproval efisiently and with no hustle ,he was a great healp definently strongly recomended!`,
              title: "",
            },
            {
              details: `"I tried to get a morgage for over 8 months, as a foreign buyer the process was very difficult.After talsking to like 5 diffrent lenders with no luck ,Miles got me the aproval efisiently and with no hustle ,he was a great healp definently strongly recomended!`,
              title: "",
            },
            {
              details: `"I tried to get a morgage for over 8 months, as a foreign buyer the process was very difficult.After talsking to like 5 diffrent lenders with no luck ,Miles got me the aproval efisiently and with no hustle ,he was a great healp definently strongly recomended!`,
              title: "",
            },
            {
              details: `"I tried to get a morgage for over 8 months, as a foreign buyer the process was very difficult.After talsking to like 5 diffrent lenders with no luck ,Miles got me the aproval efisiently and with no hustle ,he was a great healp definently strongly recomended!`,
              title: "",
            },
            {
              details: `"I tried to get a morgage for over 8 months, as a foreign buyer the process was very difficult.After talsking to like 5 diffrent lenders with no luck ,Miles got me the aproval efisiently and with no hustle ,he was a great healp definently strongly recomended!`,
              title: "",
            },
          ]}
          scrollX={scrollx}
        />
      </View>
    </View>
  );
};

export default Testimonials;

const styles = StyleSheet.create({});
