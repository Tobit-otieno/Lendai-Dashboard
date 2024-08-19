import { Dimensions } from "react-native";
import { isWeb } from "./DeviceCheker";

export const ContentSize = (measure: number) => {
  const screenWidth = Dimensions.get("window").width;

  if (isWeb()) {
    return measure;
  } else {
    if (screenWidth < 400) {
      return measure * 0.8;
    } else {
      return measure * 0.8;
    }
  }
};
