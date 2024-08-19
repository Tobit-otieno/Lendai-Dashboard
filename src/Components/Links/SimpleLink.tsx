import React, { ReactNode } from "react";
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import {
  medium,
  title,
  avarage,
  header,
  small,
  normal,
} from "../../Utilities/Fontsize";

interface SimpleTextLinkProps {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  children: ReactNode;
  type: string;
  fontWeight: any;
  color: any;
  width?: any;
  horizontalMargin?: any;
  imageSource?: any;
  imageSize?: number;
  imageMarginRight?: number;
  center?: boolean;
}

const SimpleLink: React.FC<SimpleTextLinkProps> = ({
  onPress,
  children,
  type,
  fontWeight = "normal",
  color = "#000",
  width = "auto",
  horizontalMargin = 0,
  imageSource,
  imageSize = 20,
  imageMarginRight = 5,
  center = false,
}) => {
  let size: number;
  switch (type) {
    case "medium":
      size = medium;
      break;
    case "title":
      size = title;
      break;
    case "avarage":
      size = avarage;
      break;
    case "header":
      size = header;
      break;
    case "small":
      size = small;
      break;
    case "normal":
    default:
      size = normal;
      break;
  }
  let fontFamily: string = "Museo";

  const styles = StyleSheet.create({
    linkText: {
      fontSize: size,
      fontWeight: fontWeight,
      color: color,
      width: width,
      marginHorizontal: horizontalMargin,
      fontFamily: fontFamily,
    },
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: center ? "center" : "flex-start",
      flexWrap: "wrap",
    },
  });

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        { opacity: pressed ? 0.5 : 1, flexShrink: 1, flexWrap: "wrap" },
      ]}
    >
      <View style={styles.container}>
        {imageSource && (
          <Image
            source={imageSource}
            style={{
              width: imageSize,
              height: imageSize,
              marginRight: imageMarginRight,
            }}
          />
        )}
        <Text style={styles.linkText}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default SimpleLink;
