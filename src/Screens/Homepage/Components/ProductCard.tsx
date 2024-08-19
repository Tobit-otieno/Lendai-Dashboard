import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { isSmallScreen, isTablet } from "../../../Utilities/DeviceCheker";
import SimpleLabel from "../../../Components/Lables/SimpleLable";
import Spacing from "../../../Utilities/Spacing";
import SimpleButton from "../../../Components/Buttons/SimpleButton";
import { avarage } from "../../../Utilities/Fontsize";
import { primaryColor } from "../../../Utilities/Colors";

const ProductCard = (props: any) => {
  return (
    <View style={styles.Container}>
      <Image
        source={props.image}
        style={{ width: "100%", height: 130, borderRadius: 10 }}
      ></Image>
      <View>
        <Spacing bottomSpace="normal" />
        <SimpleLabel
          type={"medium"}
          fontWeight={"bold"}
          children={props.title}
          AlignText={true}
        />
        <Spacing bottomSpace="normal" />
        <SimpleLabel
          type={"normal"}
          fontWeight={"normal"}
          children={props.details}
          AlignText={true}
          color={"gray"}
        />
        <Spacing bottomSpace="normal" />
      </View>

      <SimpleButton
        fontSize={avarage}
        fontWeight={"bold"}
        fontColor={primaryColor}
        content={"Learn more"}
        onPress={undefined}
        backGroundColor={""}
        borderRadius={5}
        borderWidth={2}
        borderColor={primaryColor}
        height={50}
        width={isTablet() ? 130 : 150}
      />
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  Container: {
    borderColor: "#c7c7c4",
    borderWidth: 3,
    width: isSmallScreen() ? 350 : "16%",
    borderRadius: 16,
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
    height: 430,
    // marginRight: isSmallScreen() ? 20 : 0,
  },
});
