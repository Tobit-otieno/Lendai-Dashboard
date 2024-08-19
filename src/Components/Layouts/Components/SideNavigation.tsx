import React from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Modal,
  Pressable,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigateFunction, useNavigate } from "react-router-dom";
import SimpleLink from "../../Links/SimpleLink";
import { primaryColor } from "../../../Utilities/Colors";
import { ContentSize } from "../../../Utilities/ContentResize";
import { isWeb, isSmallScreen } from "../../../Utilities/DeviceCheker";
import Spacing from "../../../Utilities/Spacing";
import { avarage } from "../../../Utilities/Fontsize";
import SimpleButton from "../../Buttons/SimpleButton";
import Fontisto from "react-native-vector-icons/Fontisto";
import SimpleLabel from "../../Lables/SimpleLable";

interface SideNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideNavigation: React.FC<SideNavigationProps> = ({ isOpen, onClose }) => {
  const navigation = useNavigation<any>();
  let navigate: NavigateFunction | undefined;

  if (isWeb()) {
    navigate = useNavigate();
  }

  const isTablet = Dimensions.get("window").width < 1320;

  const getWidth = () => {
    if (isSmallScreen()) {
      return "80%";
    } else if (isTablet) {
      return "30%";
    } else {
      return Dimensions.get("window").width * 0.2;
    }
  };

  const styles = StyleSheet.create({
    container: {
      width: "100%",
      backgroundColor: primaryColor,
      height: Dimensions.get("window").height,
      position: "static",
      top: 0,
      bottom: 0,
    },
  });

  function toEmoji(code: string): string {
    return code
      .split("")
      .map((letter) => String.fromCodePoint(letter.charCodeAt(0) + 0x1f1a5))
      .join("");
  }

  const navigationItems = [
    { label: "Products", path: "/products" },
    { label: "Pricing", path: "/pricing" },
    { label: "Partners", path: "/" },
    { label: "About Us", path: "/" },
    { label: "Learn", path: "/" },
    { label: "Contact Us", path: "/" },
  ];

  const handleNavigation = (path: string) => {
    if (isWeb() && navigate) {
      navigate(path, {});
    } else {
      navigation.navigate(path);
    }
    onClose();
  };

  return (
    <View style={{ position: "static" }}>
      {isWeb() ? (
        <Modal visible={isOpen} animationType="fade" transparent={true}>
          <Pressable onPress={onClose} style={{ flex: 1 }}>
            <View style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", flex: 1 }}>
              <ScrollView
                style={styles.container}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
              >
                <Spacing rightSpace="normal" />
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    alignContent: "flex-end",
                    marginTop: 24,
                    paddingHorizontal: "5%",
                  }}
                >
                  <SimpleLabel
                    type={"medium"}
                    fontWeight={undefined}
                    children={toEmoji("US")}
                  />
                  <Spacing rightSpace="small" />
                  <SimpleLabel
                    type={"normal"}
                    fontWeight={"bold"}
                    children={"En"}
                    color={"white"}
                  />
                  <Spacing rightSpace="small" />
                  <Fontisto name={"angle-down"} size={20} color={"white"} />
                </View>
                <Spacing bottomSpace="normal" />
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: "5%",
                  }}
                >
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
                    width={180}
                  />
                  <Spacing bottomSpace="normal" />
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
                    width={180}
                  />
                </View>
                <Spacing bottomSpace="normal" />
                {navigationItems.map((item) => (
                  <View
                    key={item.label}
                    style={{
                      height: 70,
                      alignItems: "flex-start",
                      justifyContent: "center",
                      borderBottomColor: "white",
                      borderBottomWidth: 3,
                      paddingHorizontal: "5%",
                    }}
                  >
                    <SimpleLink
                      onPress={() => handleNavigation(item.path)}
                      children={item.label}
                      type={""}
                      fontWeight={undefined}
                      color={"white"}
                    />
                  </View>
                ))}
              </ScrollView>
            </View>
          </Pressable>
        </Modal>
      ) : (
        <></>
      )}
    </View>
  );
};

export default SideNavigation;
