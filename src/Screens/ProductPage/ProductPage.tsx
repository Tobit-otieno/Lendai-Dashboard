import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProductAndPricing from "../../Components/Layouts/ProductAndPricing";
import { isSmallScreen, isTablet } from "../../Utilities/DeviceCheker";
import SimpleLabel from "../../Components/Lables/SimpleLable";
import Spacing from "../../Utilities/Spacing";
import { avarage, normal } from "../../Utilities/Fontsize";
import SimpleButton from "../../Components/Buttons/SimpleButton";
import { primaryColor } from "../../Utilities/Colors";
import { ContentSize } from "../../Utilities/ContentResize";
import Fontisto from "react-native-vector-icons/Fontisto";
import INvestosCard from "../Homepage/Components/INvestosCard";
import QuestionsCard from "../../Components/Cards/QuestionsCard";

const ProductPage = () => {
  return (
    <ProductAndPricing
      background={require("../../../assets/Images/ProductBackgorund.jpg")}
      topContent={
        <View
          style={{
            width: isSmallScreen() ? "100%" : "40%",
            marginHorizontal: "auto",
            position: "relative",
            top: 50,
          }}
        >
          <SimpleLabel
            type={isSmallScreen() ? "large" : "extraLarge"}
            fontWeight={"bold"}
            children={"Pre-Approval Loan"}
            AlignText={true}
            color={"white"}
          />
          <Spacing bottomSpace="small" />
          <SimpleLabel
            type={isSmallScreen() ? "normal" : "medium"}
            fontWeight={undefined}
            children={
              "Get pre-qualified in under 5 minutes to determine your eligible loan amount"
            }
            color={"white"}
            AlignText={true}
          />
          <Spacing bottomSpace="normal" />
          <Spacing bottomSpace="small" />
          <View
            style={{
              width: "100%",
              alignItems: "center",
              marginBottom: isSmallScreen() ? 140 : "auto",
            }}
          >
            <SimpleButton
              fontSize={normal}
              fontWeight={"bold"}
              fontColor={primaryColor}
              content={"Contact us"}
              onPress={undefined}
              backGroundColor={"white"}
              borderRadius={5}
              borderWidth={0}
              borderColor={primaryColor}
              height={60}
              width={isTablet() ? 130 : 180}
            />
          </View>
        </View>
      }
    >
      <View
        style={{
          width: "100%",
          backgroundColor: "white",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: isSmallScreen() ? "column" : "row",
            backgroundColor: "white",
            width: isSmallScreen() ? "90%" : "80%",
            marginHorizontal: isSmallScreen() ? "5%" : "10%",
            position: "relative",
            top: isSmallScreen() ? -80 : -230,
            borderRadius: ContentSize(16),
            borderWidth: 2,
            borderColor: "#b4b4b3",
            padding: isSmallScreen() ? 5 : 16,
          }}
        >
          <View
            style={{
              width: isSmallScreen() ? "100%" : "50%",
              borderRightWidth: isSmallScreen() ? 0 : 1,
              borderColor: "#7c7c7c",
            }}
          >
            <View style={styles.oddContainer}>
              <View style={styles.titleContainer}>
                <SimpleLabel
                  type={isSmallScreen() ? "avarage" : "normal"}
                  fontWeight={"bold"}
                  children={"proparty Type"}
                />
              </View>
              <View style={styles.detailsContainer}>
                <SimpleLabel
                  type={isSmallScreen() ? "avarage" : "normal"}
                  fontWeight={"normal"}
                  children={
                    "SFR 2-4 units, Townhouse, Condons, Condhotels, 5-6 units"
                  }
                  color={"#b3b4b7"}
                />
              </View>
            </View>
            <View style={styles.evenContainer}>
              <View style={styles.titleContainer}>
                <SimpleLabel
                  type={isSmallScreen() ? "avarage" : "normal"}
                  fontWeight={"bold"}
                  children={"max loan amount"}
                />
              </View>
              <View style={styles.detailsContainer}>
                <SimpleLabel
                  type={isSmallScreen() ? "avarage" : "normal"}
                  fontWeight={"normal"}
                  children={"$ 40,000"}
                  color={"#b3b4b7"}
                />
              </View>
            </View>
            <View style={styles.oddContainer}>
              <View style={styles.titleContainer}>
                <SimpleLabel
                  type={isSmallScreen() ? "avarage" : "normal"}
                  fontWeight={"bold"}
                  children={"proparty Condition"}
                />
              </View>
              <View style={styles.detailsContainer}>
                <SimpleLabel
                  type={isSmallScreen() ? "avarage" : "normal"}
                  fontWeight={"normal"}
                  children={"C1-C4"}
                  color={"#b3b4b7"}
                />
              </View>
            </View>
            <View style={styles.evenContainer}>
              <View style={styles.titleContainer}>
                <SimpleLabel
                  type={isSmallScreen() ? "avarage" : "normal"}
                  fontWeight={"bold"}
                  children={"Occupancy"}
                />
              </View>
              <View style={styles.detailsContainer}>
                <SimpleLabel
                  type={isSmallScreen() ? "avarage" : "normal"}
                  fontWeight={"normal"}
                  children={"Leased or vaccant accepted"}
                  color={"#b3b4b7"}
                />
              </View>
            </View>
          </View>
          <View style={{ width: isSmallScreen() ? "100%" : "50%" }}>
            <View style={styles.oddContainer}>
              <View style={styles.titleContainer}>
                {" "}
                <SimpleLabel
                  type={isSmallScreen() ? "avarage" : "normal"}
                  fontWeight={"bold"}
                  children={"Terms & Rate"}
                />
              </View>
              <View style={styles.detailsContainer}>
                {" "}
                <SimpleLabel
                  type={isSmallScreen() ? "avarage" : "normal"}
                  fontWeight={"normal"}
                  children={"30-years fixed loan rate"}
                  color={"#b3b4b7"}
                />
              </View>
            </View>
            <View style={styles.evenContainer}>
              <View style={styles.titleContainer}>
                {" "}
                <SimpleLabel
                  type={isSmallScreen() ? "avarage" : "normal"}
                  fontWeight={"bold"}
                  children={"Loans to value"}
                />
              </View>
              <View style={styles.detailsContainer}>
                {" "}
                <SimpleLabel
                  type={isSmallScreen() ? "avarage" : "normal"}
                  fontWeight={"normal"}
                  children={"Up to 7% LTV"}
                  color={"#b3b4b7"}
                />
              </View>
            </View>
            <View style={styles.oddContainer}>
              <View style={styles.titleContainer}>
                {" "}
                <SimpleLabel
                  type={isSmallScreen() ? "avarage" : "normal"}
                  fontWeight={"bold"}
                  children={"US entity required"}
                />
              </View>
              <View style={styles.detailsContainer}>
                {" "}
                <Fontisto name={"shopping-sale"} size={30} color={"green"} />
              </View>
            </View>
            <View style={styles.evenContainer}>
              <View style={styles.titleContainer}>
                {" "}
                <SimpleLabel
                  type={isSmallScreen() ? "avarage" : "normal"}
                  fontWeight={"bold"}
                  children={"Multiple Equity owners"}
                />
              </View>
              <View style={styles.detailsContainer}>
                {" "}
                <SimpleLabel
                  type={isSmallScreen() ? "avarage" : "normal"}
                  fontWeight={"normal"}
                  children={"Up to 4 Owners ,5 and up exception"}
                  color={"#b3b4b7"}
                />
              </View>
            </View>
          </View>
        </View>
        <View>
          <SimpleLabel
            type={isSmallScreen() ? "large" : "large"}
            fontWeight={"bold"}
            children={"Why Get A Pre-approval Letter?"}
            AlignText={true}
          />
          <Spacing bottomSpace="normal" />
          <Spacing bottomSpace="normal" />
          <View
            style={{
              flexDirection: isSmallScreen() ? "column" : "row",
              alignItems: "center",
            }}
          >
            <INvestosCard />
            <Spacing leftSpace="small" />
            <Spacing leftSpace="small" />
            <Spacing bottomSpace="normal" />
            <INvestosCard />
            <Spacing leftSpace="small" />
            <Spacing leftSpace="small" />
            <Spacing bottomSpace="normal" />
            <INvestosCard />
          </View>
          <Spacing bottomSpace="normal" />
          <Spacing bottomSpace="normal" />
        </View>
        <SimpleButton
          fontSize={avarage}
          fontWeight={"bold"}
          fontColor={"white"}
          content={`I'm interested`}
          onPress={undefined}
          backGroundColor={primaryColor}
          borderRadius={5}
          borderWidth={0}
          borderColor={primaryColor}
          height={50}
          width={isTablet() ? 140 : 180}
        />
        <Spacing bottomSpace="normal" />
        <Spacing bottomSpace="normal" />
        <Spacing bottomSpace="normal" />
        {/* <SimpleLabel
          type={isSmallScreen() ? "large" : "large"}
          fontWeight={"bold"}
          children={"How It Works"}
          AlignText={true}
        />
        <View
          style={{ width: "100%", height: 29, backgroundColor: primaryColor }}
        ></View> */}
        <Spacing bottomSpace="normal" />
        

        <View
          style={{
            width: isSmallScreen() ? "90%" : "70%",
            backgroundColor: primaryColor,
            borderRadius: 16,
            padding: 16,
            alignItems: "center",
          }}
        >
          <Spacing bottomSpace="normal" />
          <View style={{ flexDirection: "row" }}>
            <Fontisto
              name={"star"}
              size={isSmallScreen() ? 15 : 20}
              color={"gold"}
            />
            <Spacing leftSpace="small" />
            <Fontisto
              name={"star"}
              size={isSmallScreen() ? 15 : 20}
              color={"gold"}
            />
            <Spacing leftSpace="small" />
            <Fontisto
              name={"star"}
              size={isSmallScreen() ? 15 : 20}
              color={"gold"}
            />
            <Spacing leftSpace="small" />
            <Fontisto
              name={"star"}
              size={isSmallScreen() ? 15 : 20}
              color={"gold"}
            />
            <Spacing leftSpace="small" />
            <Fontisto
              name={"star"}
              size={isSmallScreen() ? 15 : 20}
              color={"gold"}
            />
          </View>
          <Spacing bottomSpace="normal" />
          <Spacing bottomSpace="normal" />
          <View style={{ width: isSmallScreen() ? "90%" : "55%" }}>
            <SimpleLabel
              AlignText={true}
              color={"white"}
              type={"normal"}
              fontWeight={"normal"}
              children={
                "I awas amazed how quick and easy it was for me to get a pre-aproval letter from lendai. All it took was a few minutes of my time and i was ready with a pre-approval letter that my agent could use to make my parchase order stand out from the other applicants"
              }
            />
            <Spacing bottomSpace="normal" />
            <Spacing bottomSpace="normal" />
            <SimpleLabel
              type={"normal"}
              fontWeight={"bold"}
              children={"T.O.Otieno"}
              color={"white"}
              AlignText={true}
            />
            <Spacing bottomSpace="normal" />
            <SimpleLabel
              type={"normal"}
              fontWeight={"normal"}
              children={"Canadian Investor"}
              color={"white"}
              AlignText={true}
            />
          </View>
        </View>
        <Spacing bottomSpace="normal" />
        <Spacing bottomSpace="normal" />
        <Spacing bottomSpace="normal" />
        <SimpleLabel
          type={isSmallScreen() ? "large" : "large"}
          fontWeight={"bold"}
          children={`FAQ'S`}
          AlignText={true}
        />
        <Spacing bottomSpace="normal" />

        <View style={{ width: isSmallScreen() ? "90%" : "50%" }}>
          <QuestionsCard />
          <QuestionsCard />
          <QuestionsCard />
          <QuestionsCard />
          <QuestionsCard />
          <QuestionsCard />
        </View>
        <Spacing bottomSpace="normal" />
        <SimpleButton
          fontSize={avarage}
          fontWeight={"bold"}
          fontColor={primaryColor}
          content={"See All"}
          onPress={undefined}
          backGroundColor={"white"}
          borderRadius={5}
          borderWidth={2}
          borderColor={primaryColor}
          height={50}
          width={isTablet() ? 100 : 120}
        />
        <Spacing bottomSpace="normal" />
        <Spacing bottomSpace="normal" />
        <Spacing bottomSpace="normal" />
      </View>
    </ProductAndPricing>
  );
};

export default ProductPage;

const styles = StyleSheet.create({
  evenContainer: {
    backgroundColor: "#f4f5f7",
    height: isSmallScreen() ? 80 : 80,
    width: "100%",
    flexDirection: "row",
  },
  oddContainer: {
    backgroundColor: "white",
    height: isSmallScreen() ? 80 : 80,
    width: "100%",
    flexDirection: "row",
  },
  titleContainer: {
    height: "100%",
    width: isSmallScreen() ? "50%" : "45%",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    justifyContent: "center",
    paddingLeft: isSmallScreen() ? 5 : 16,
    borderColor: "#7c7c7c",
  },
  detailsContainer: {
    height: "100%",
    width: isSmallScreen() ? "50%" : "55%",
    justifyContent: "center",
    borderBottomWidth: 1,
    paddingLeft: isSmallScreen() ? 5 : 16,
    borderColor: "#7c7c7c",
  },
});
