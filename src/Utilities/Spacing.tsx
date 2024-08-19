import React from "react";
import { View } from "react-native";
import { ContentSize } from "./ContentResize";

const Spacing = (props: {
  bottomSpace?: string;
  horizontalSpace?: string;
  leftSpace?: string;
  rightSpace?: string;
}) => {
  let bottomSpace;
  let horizontalSpace;
  let leftSpace;
  let rightSpace;

  if (props.bottomSpace === "extraSmall") {
    bottomSpace = ContentSize(8);
  } else if (props.bottomSpace === "small") {
    bottomSpace = ContentSize(16);
  } else if (props.bottomSpace === "normal") {
    bottomSpace = ContentSize(24);
  } else if (props.bottomSpace === "medium") {
    bottomSpace = ContentSize(32);
  } else if (props.bottomSpace === "large") {
    bottomSpace = ContentSize(40);
  } else if (props.bottomSpace === "extraLarge") {
    bottomSpace = ContentSize(48);
  } else {
    bottomSpace = 0;
  }

  if (props.horizontalSpace === "extraSmall") {
    horizontalSpace = ContentSize(8);
  } else if (props.horizontalSpace === "small") {
    horizontalSpace = ContentSize(16);
  } else if (props.horizontalSpace === "medium") {
    horizontalSpace = ContentSize(24);
  } else if (props.horizontalSpace === "large") {
    horizontalSpace = ContentSize(32);
  } else if (props.horizontalSpace === "extraLarge") {
    horizontalSpace = ContentSize(40);
  } else {
    horizontalSpace = 0;
  }

  if (props.leftSpace === "extraSmall") {
    leftSpace = ContentSize(8);
  } else if (props.leftSpace === "small") {
    leftSpace = ContentSize(16);
  } else if (props.leftSpace === "medium") {
    leftSpace = ContentSize(24);
  } else if (props.leftSpace === "large") {
    leftSpace = ContentSize(32);
  } else if (props.leftSpace === "extraLarge") {
    leftSpace = ContentSize(40);
  } else {
    leftSpace = 0;
  }

  if (props.rightSpace === "extraSmall") {
    rightSpace = ContentSize(8);
  } else if (props.rightSpace === "small") {
    rightSpace = ContentSize(16);
  } else if (props.rightSpace === "medium") {
    rightSpace = ContentSize(24);
  } else if (props.rightSpace === "large") {
    rightSpace = ContentSize(32);
  } else if (props.rightSpace === "extraLarge") {
    rightSpace = ContentSize(40);
  } else {
    rightSpace = 0;
  }

  return (
    <View
      style={{
        paddingBottom: bottomSpace,
        paddingHorizontal: horizontalSpace,
        marginLeft: leftSpace,
        marginRight: rightSpace,
      }}
    />
  );
};

export default Spacing;
