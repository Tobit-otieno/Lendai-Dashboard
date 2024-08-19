import { Dimensions, Platform } from "react-native";

const { width } = Dimensions.get("window");

export const isSmallScreen = () => {
  const windowWidth = Dimensions.get("window").width;
  return windowWidth < 500;
};

export const isTablet = () => {
  const windowWidth = Dimensions.get("window").width;
  return windowWidth < 1320;
};

export const isWeb = () => {
  return Platform.OS === "web";
};
