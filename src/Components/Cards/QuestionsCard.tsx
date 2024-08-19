import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ContentSize } from "../../Utilities/ContentResize";
import { isSmallScreen } from "../../Utilities/DeviceCheker";
import { TouchableOpacity } from "react-native-gesture-handler";
import Fontisto from "react-native-vector-icons/Fontisto";
import SimpleLabel from "../Lables/SimpleLable";

const QuestionsCard = () => {
  return (
    <View
      style={{
        borderRadius: ContentSize(16),
        width: "100%",
        height: 80,
        marginBottom: 16,
        borderWidth: 2,
        borderColor: "#f3f3f3",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: isSmallScreen() ? 10 : 20,
        justifyContent: "space-between",
      }}
    >
      <SimpleLabel
        type={"avarage"}
        fontWeight={"bold"}
        children={"I have a proparty under constracton , can you help"}
        color={"#515158"}
      />
      <TouchableOpacity
        style={{
          width: 30,
          height: 30,
          backgroundColor: "#e4e7ee",
          borderRadius: 4,
          alignItems: "center",
          justifyContent: "center",
          marginRight: 8,
        }}
      >
        <Fontisto
          name={"plus-a"}
          size={isSmallScreen() ? 15 : 20}
          color={"#77818b"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default QuestionsCard;

const styles = StyleSheet.create({});
