// SimpleLabel.tsx
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  normal,
  medium,
  avarage,
  title,
  header,
  small,
  extraLarge,
} from "../../Utilities/Fontsize";

const SimpleLabel = (props: {
  AlignText?: boolean;
  type: string;
  fontWeight: any;
  color?: any;
  styles?: any;
  marginLeft?: any;
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined;
}) => {
  let size: number;
  let fontFamily: string = "Museo";

  if (props.type === "normal") {
    size = normal;
  } else if (props.type === "medium") {
    size = medium;
  } else if (props.type === "avarage") {
    size = avarage;
  } else if (props.type === "title") {
    size = title;
  } else if (props.type === "large") {
    size = header;
  } else if (props.type === "small") {
    size = small;
  } else if (props.type === "extraLarge") {
    size = extraLarge;
  }

  const useStyles = () => {
    return StyleSheet.create({
      text: {
        fontSize: size,
        fontWeight: props.fontWeight,
        color: props.color,
        padding: 0,
        textAlign: props.AlignText ? "center" : undefined,
        fontFamily: fontFamily,
      },
    });
  };
  const styles: any = useStyles();
  return <Text style={[styles.text, props.styles]}>{props.children}</Text>;
};

export default SimpleLabel;
