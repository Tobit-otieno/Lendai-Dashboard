import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const SimpleButton = (props: {
  fontSize: any;
  fontWeight: any;
  fontColor: any;
  content: any;
  onPress: any;
  backGroundColor: string;
  borderRadius: any;
  width?: any;
  borderWidth: any;
  borderColor: any;
  height: any;
  marginHorizontal?: any;
  paddingHorizontal?: any;
  centerItems?: boolean;
}) => {
  let fontFamily: string = "Museo";
  function useStyles() {
    return StyleSheet.create({
      button: {
        display: "flex",
        justifyContent: "center",
        alignItems: props.centerItems ? "flex-start" : "center",
        height: props.height,
        backgroundColor: props.backGroundColor,
        borderColor: props.borderColor,
        borderWidth: props.borderWidth,
        borderRadius: props.borderRadius,
        paddingHorizontal: props.paddingHorizontal,
        width: props.width,
        marginHorizontal: props.marginHorizontal,
      },
      font: {
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
        color: props.fontColor,
        textAlign: "center",
        fontFamily: fontFamily,
      },
    });
  }

  const styles: any = useStyles();

  return (
    <Pressable
      onPress={props.onPress}
      style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
    >
      <View style={styles.button}>
        <Text style={styles.font}>{props.content}</Text>
      </View>
    </Pressable>
  );
};

export default SimpleButton;
