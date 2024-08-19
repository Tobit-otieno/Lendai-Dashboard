import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import {
  isSmallScreen,
  isTablet,
  isWeb,
} from "../../../Utilities/DeviceCheker";
import SimpleLabel from "../../Lables/SimpleLable";
import SimpleLink from "../../Links/SimpleLink";
import Fontisto from "react-native-vector-icons/Fontisto";
import Spacing from "../../../Utilities/Spacing";
import SimpleButton from "../../Buttons/SimpleButton";
import { avarage, normal } from "../../../Utilities/Fontsize";
import { primaryColor } from "../../../Utilities/Colors";
import SideNavigation from "./SideNavigation";
import { useNavigation } from "@react-navigation/native";
import { NavigateFunction, useNavigate } from "react-router-dom";
const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  function toEmoji(code: string): string {
    return code
      .split("")
      .map((letter) => String.fromCodePoint(letter.charCodeAt(0) + 0x1f1a5))
      .join("");
  }

  let natigate: NavigateFunction | ((arg0: string, arg1: {}) => void);
  if (isWeb()) {
    natigate = useNavigate();
  }

  return (
    <View>
      {!isSmallScreen() ? (
        <View
          style={{
            height: 90,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: isTablet() ? 16 : "5%",
          }}
        >
          <View style={styles.Logo}>
            {/* <Image
              source={require('../../../assets/Images/Logo.jpeg')}
              style={{ width: 50, height: 50 }}
            /> */}
            <SimpleLabel
              type={"medium"}
              fontWeight={undefined}
              children={"Lendai"}
              color={"white"}
            />
          </View>
          <View style={styles.Links}>
            <SimpleLink
              onPress={() => natigate("/products", {})}
              children={
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <SimpleLabel
                    type={"avarage"}
                    fontWeight={"bold"}
                    children={"Products"}
                  />
                  <Spacing rightSpace="small" />
                  <Fontisto name={"angle-down"} size={15} color={"white"} />
                </View>
              }
              type={"avarage"}
              fontWeight={"bold"}
              color={"white"}
            />
            <SimpleLink
              onPress={() => natigate("/pricing", {})}
              children={"Pricing"}
              type={"avarage"}
              fontWeight={"bold"}
              color={"white"}
            />
            <SimpleLink
              onPress={undefined}
              children={"Patners"}
              type={"avarage"}
              fontWeight={"bold"}
              color={"white"}
            />
            <SimpleLink
              onPress={() => natigate("/", {})}
              children={
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <SimpleLabel
                    type={"avarage"}
                    fontWeight={"bold"}
                    children={"About Us"}
                  />
                  <Spacing rightSpace="small" />
                  <Fontisto name={"angle-down"} size={15} color={"white"} />
                </View>
              }
              type={"avarage"}
              fontWeight={"bold"}
              color={"white"}
            />
            <SimpleLink
              onPress={undefined}
              children={"Learn"}
              type={"avarage"}
              fontWeight={"bold"}
              color={"white"}
            />
            <SimpleLink
              onPress={undefined}
              children={"Contact Us"}
              type={"avarage"}
              fontWeight={"bold"}
              color={"white"}
            />
          </View>
          <View style={styles.Buttons}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <SimpleLabel
                type={"normal"}
                fontWeight={undefined}
                children={toEmoji("US")}
              />
              <Spacing rightSpace="small" />
              <SimpleLabel
                type={"avarage"}
                fontWeight={"bold"}
                children={"En"}
                color={"white"}
              />
              <Spacing rightSpace="small" />
              <Fontisto name={"angle-down"} size={15} color={"white"} />
            </View>
            <Spacing rightSpace="small" />
            <Spacing rightSpace="small" />
            <Spacing rightSpace="small" />
            <SimpleButton
              fontSize={avarage}
              fontWeight={"bold"}
              fontColor={"white"}
              content={"Partner login"}
              onPress={undefined}
              backGroundColor={""}
              borderRadius={5}
              borderWidth={2}
              borderColor={"white"}
              height={50}
              width={isTablet() ? 130 : 180}
            />
            <Spacing rightSpace="small" />
            <SimpleButton
              fontSize={avarage}
              fontWeight={"bold"}
              fontColor={primaryColor}
              content={"Investor login"}
              onPress={undefined}
              backGroundColor={"white"}
              borderRadius={5}
              borderWidth={0}
              borderColor={primaryColor}
              height={50}
              width={isTablet() ? 130 : 180}
            />
          </View>
        </View>
      ) : (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: "10%",
            height: 85,
            justifyContent: "space-between",
          }}
        >
          {/* <Image
              source={require('../../../assets/Images/Logo.jpeg')}
              style={{ width: 50, height: 50 }}
            /> */}
          <SimpleLabel
            type={"medium"}
            fontWeight={undefined}
            children={"Lendai"}
            color={"white"}
          />

          <SimpleLink
            onPress={openDrawer}
            children={
              <Fontisto name={"nav-icon-a"} size={30} color={"white"} />
            }
            type={"avarage"}
            fontWeight={"bold"}
            color={"white"}
          />
        </View>
      )}
      <SideNavigation
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  Logo: {},
  Links: {
    flexDirection: "row",
    width: "50%",
    justifyContent: "space-between",
    marginHorizontal: isTablet() ? "3%" : "7%",
  },
  Buttons: {
    flexDirection: "row",
    alignItems: "center",
  },
});
