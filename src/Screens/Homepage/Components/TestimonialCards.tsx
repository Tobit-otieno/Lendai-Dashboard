import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import SimpleLabel from "../../../Components/Lables/SimpleLable";
import { ContentSize } from "../../../Utilities/ContentResize";
import Fontisto from "react-native-vector-icons/Fontisto";
import { isSmallScreen } from "../../../Utilities/DeviceCheker";
import { primaryColor } from "../../../Utilities/Colors";
import Spacing from "../../../Utilities/Spacing";
import { normal } from "../../../Utilities/Fontsize";

const TestimonialCards = (props: any) => {
  return (
    <View
      style={{
        width: isSmallScreen() ? 350 : 450,
        backgroundColor: "white",
        marginHorizontal: isSmallScreen() ? "auto" : 25,
        borderRadius: ContentSize(16),
        paddingHorizontal: isSmallScreen() ? 8 : 16,
        marginTop: 30,
        paddingVertical: isSmallScreen() ? 24 : 16,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: isSmallScreen() ? "center" : "flex-start",
        }}
      >
        <Fontisto
          name={"star"}
          size={isSmallScreen() ? 25 : 20}
          color={primaryColor}
        />
        <Fontisto
          name={"star"}
          size={isSmallScreen() ? 25 : 20}
          color={primaryColor}
        />
        <Fontisto
          name={"star"}
          size={isSmallScreen() ? 25 : 20}
          color={primaryColor}
        />
        <Fontisto
          name={"star"}
          size={isSmallScreen() ? 25 : 20}
          color={primaryColor}
        />
        <Fontisto
          name={"star"}
          size={isSmallScreen() ? 25 : 20}
          color={primaryColor}
        />
      </View>
      <Spacing bottomSpace="normal" />
      <SimpleLabel
        type={"normal"}
        fontWeight={"bold"}
        children={props.details}
        color={"gray"}
        AlignText={isSmallScreen() ? true : false}
      />
      <Spacing bottomSpace="normal" />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: isSmallScreen() ? "center" : "flex-start",
        }}
      >
        <Image
          source={require("../../../../assets/Images/House.jpg")}
          style={{ width: 50, height: 50, borderRadius: 25 }}
        />
        <Spacing leftSpace="small" />
        <SimpleLabel
          type={"normal"}
          fontWeight={"bold"}
          children={"T.O.Otieno, Israel"}
        />
      </View>
    </View>
  );
};

export default TestimonialCards;

const styles = StyleSheet.create({});
