import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { isSmallScreen } from "../../../Utilities/DeviceCheker";
import { primaryColor } from "../../../Utilities/Colors";
import SimpleLabel from "../../../Components/Lables/SimpleLable";
import Spacing from "../../../Utilities/Spacing";

const INvestosCard = () => {
  return (
    <View
      style={{
        width: isSmallScreen() ? "90%" : 410,
        borderRadius: 16,
        backgroundColor: "white",
        paddingHorizontal: 18,
        borderWidth: 2,
        borderColor: "grey",
        justifyContent: "space-between",
        paddingVertical: 30,
      }}
    >
      <Image
        source={require("../../../../assets/Images/Lens.png")}
        style={{ width: 60, height: 60, borderRadius: 30 }}
      />
      <Spacing bottomSpace="normal" />
      <View>
        <SimpleLabel
          type={"normal"}
          fontWeight={"bold"}
          children={"Efficient"}
        />
        <Spacing bottomSpace="small" />
        <SimpleLabel
          color={"grey"}
          type={"normal"}
          fontWeight={"normal"}
          children={
            "We are commited to full pricing transparency and will provide you with detailed offer withought hidden fees"
          }
        />
      </View>
    </View>
  );
};

export default INvestosCard;

const styles = StyleSheet.create({});
