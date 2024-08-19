import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import ProductAndPricing from "../../Components/Layouts/ProductAndPricing";
import SimpleButton from "../../Components/Buttons/SimpleButton";
import SimpleLabel from "../../Components/Lables/SimpleLable";
import { cardColor, primaryColor } from "../../Utilities/Colors";
import { isSmallScreen, isTablet } from "../../Utilities/DeviceCheker";
import { avarage, normal } from "../../Utilities/Fontsize";
import Spacing from "../../Utilities/Spacing";
import QuestionsCard from "../../Components/Cards/QuestionsCard";
import Fontisto from "react-native-vector-icons/Fontisto";
import { ContentSize } from "../../Utilities/ContentResize";

const PricingScreen = () => {
  return (
    <ProductAndPricing
      background={require("../../../assets/Images/PricingBackgorund.jpg")}
      topContent={
        <View
          style={{
            width: isSmallScreen() ? "90%" : "40%",
            marginHorizontal: "auto",
            position: "relative",
            top: 100,
          }}
        >
          <SimpleLabel
            type={isSmallScreen() ? "large" : "extraLarge"}
            fontWeight={"bold"}
            children={"Pricing"}
            AlignText={true}
            color={"white"}
          />
          <Spacing bottomSpace="small" />
          <SimpleLabel
            type={isSmallScreen() ? "normal" : "medium"}
            fontWeight={undefined}
            children={
              "Every single investor at lendai gets a loan offer with full transparency and no hidden fees"
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
              height={50}
              width={150}
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
        <Spacing bottomSpace="normal" />
        <View
          style={{
            width: "95%",
            alignItems: "center",
          }}
        >
          <SimpleLabel
            type={isSmallScreen() ? "medium" : "large"}
            fontWeight={"bold"}
            children={"A $ 300,000 Loan Term Sheet Example"}
            AlignText={isSmallScreen() ? true : false}
          />

          <SimpleLabel
            type={isSmallScreen() ? "medium" : "large"}
            fontWeight={"bold"}
            children={"Deseigned For Smart Foregn Investors"}
            color={primaryColor}
            AlignText={isSmallScreen() ? true : false}
          />
          <Spacing bottomSpace="small" />
          <View style={{ width: isSmallScreen() ? "95%" : "35%" }}>
            <SimpleLabel
              type={"normal"}
              fontWeight={"bold"}
              children={
                "Gain clarity on interest rates , fees,and payments options with a detailed illustration of a lendai loan"
              }
              color={"gray"}
              AlignText={true}
            />
          </View>
        </View>

        <Spacing bottomSpace="normal" />
        <Spacing bottomSpace="normal" />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderColor: primaryColor,
            borderWidth: 2,
            padding: 2,
            borderRadius: 5,
          }}
        >
          <SimpleButton
            fontSize={avarage}
            fontWeight={"bold"}
            fontColor={primaryColor}
            content={"New purchace"}
            onPress={undefined}
            backGroundColor={"white"}
            borderRadius={5}
            borderWidth={0}
            borderColor={primaryColor}
            height={50}
            width={isSmallScreen() ? 186 : 130}
          />
          <SimpleButton
            fontSize={avarage}
            fontWeight={"bold"}
            fontColor={"white"}
            content={"Refinance"}
            onPress={undefined}
            backGroundColor={primaryColor}
            borderRadius={5}
            borderWidth={0}
            borderColor={primaryColor}
            height={50}
            width={isSmallScreen() ? 186 : 130}
          />
        </View>
        <Spacing bottomSpace="normal" />
        <Spacing bottomSpace="normal" />
        {isSmallScreen() ? (
          <View style={{ width: "92%" }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <SimpleButton
                fontSize={avarage}
                fontWeight={"bold"}
                fontColor={"gray"}
                content={
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      paddingLeft: 6,
                    }}
                  >
                    {" "}
                    <Fontisto
                      name={"map-marker-alt"}
                      size={20}
                      color={"#dee2e3"}
                    />{" "}
                    Florida, United States
                  </View>
                }
                onPress={undefined}
                backGroundColor={"white"}
                borderRadius={8}
                borderWidth={2}
                borderColor={"#dfe0e4"}
                height={50}
                width={180}
              />

              <SimpleButton
                fontSize={avarage}
                fontWeight={"bold"}
                fontColor={"gray"}
                content={
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      paddingLeft: 6,
                    }}
                  >
                    {" "}
                    <Fontisto name={"home"} size={20} color={"#dee2e3"} />{" "}
                    Single Family House
                  </View>
                }
                onPress={undefined}
                backGroundColor={"white"}
                borderRadius={8}
                borderWidth={2}
                borderColor={"#dfe0e4"}
                height={50}
                width={180}
              />
            </View>
            <Spacing bottomSpace="small" />
            <View
              style={{
                width: "100%",
                padding: 3,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: "#dfe0e4",
              }}
            >
              <View style={{ width: "100%" }}>
                <View style={styles.Headers}>
                  <SimpleLabel
                    type={"avarage"}
                    fontWeight={"bold"}
                    children={"Loan Terms"}
                    AlignText={true}
                    color={"#0202c2"}
                  />
                </View>
                <View style={styles.MobileBody}>
                  <SimpleLabel
                    type={"avarage"}
                    fontWeight={"bold"}
                    children={"$ 20000 Loan Amount"}
                    AlignText={true}
                  />
                </View>

                <View style={styles.MobileBody}>
                  <SimpleLabel
                    type={"avarage"}
                    fontWeight={"bold"}
                    children={"2% interest rate"}
                    AlignText={true}
                  />
                </View>

                <View style={styles.MobileBody}>
                  <SimpleLabel
                    type={"avarage"}
                    fontWeight={"bold"}
                    children={"7% LTV"}
                    AlignText={true}
                  />
                </View>
              </View>
              <View style={{ width: "100%" }}>
                <View style={styles.Headers}>
                  <SimpleLabel
                    type={"avarage"}
                    fontWeight={"bold"}
                    children={"Proparty Details"}
                    AlignText={true}
                    color={"#0202c2"}
                  />
                </View>
                <View style={styles.MobileBody}>
                  <SimpleLabel
                    type={"avarage"}
                    fontWeight={"bold"}
                    children={"$ 20000  Yearly rate"}
                    AlignText={true}
                  />
                </View>
                <View style={styles.MobileBody}>
                  <SimpleLabel
                    type={"avarage"}
                    fontWeight={"bold"}
                    children={"$ 20  Monthly Inasurance"}
                    AlignText={true}
                  />
                </View>

                <View style={styles.MobileBody}>
                  <SimpleLabel
                    type={"avarage"}
                    fontWeight={"bold"}
                    children={"2% Yearly Taxes"}
                    AlignText={true}
                  />
                </View>
              </View>
              <View style={{ width: "100%" }}>
                <View style={styles.Headers}>
                  <SimpleLabel
                    type={"avarage"}
                    fontWeight={"bold"}
                    children={"Cloning Costs"}
                    AlignText={true}
                    color={"#0202c2"}
                  />
                </View>
                <View style={styles.MobileBody}>
                  <SimpleLabel
                    type={"avarage"}
                    fontWeight={"bold"}
                    children={"2% Loan alignation fee"}
                    AlignText={true}
                  />
                </View>
                <View style={styles.MobileBody}>
                  <SimpleLabel
                    type={"avarage"}
                    fontWeight={"bold"}
                    children={"0%  Discount Costs"}
                    AlignText={true}
                  />
                </View>

                <View style={styles.MobileBody}>
                  <SimpleLabel
                    type={"avarage"}
                    fontWeight={"bold"}
                    children={"$ 1500 Pricing Fee"}
                    AlignText={true}
                  />
                </View>
              </View>
            </View>
          </View>
        ) : (
          <View style={{ width: "70%" }}>
            <View
              style={{
                width: "100%",
                height: 60,
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 8,
                borderWidth: 2,
                borderColor: "#dee2e3",
                borderRadius: 10,
              }}
            >
              <View
                style={{
                  width: "25%",
                  borderRightColor: "#dee2e3",
                  borderRightWidth: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <SimpleLabel
                  type={"avarage"}
                  fontWeight={"bold"}
                  children={
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      {" "}
                      <Fontisto
                        name={"dollar"}
                        size={25}
                        color={"#dee2e3"}
                      />{" "}
                      <Spacing leftSpace="small" />$ 300,0000 Purchase price
                    </View>
                  }
                  color={"#aaabaf"}
                />
              </View>
              <View
                style={{
                  width: "25%",
                  borderRightColor: "#dee2e3",
                  borderRightWidth: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <SimpleLabel
                  type={"avarage"}
                  fontWeight={"bold"}
                  children={
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      {" "}
                      <Fontisto
                        name={"map-marker-alt"}
                        size={25}
                        color={"#dee2e3"}
                      />{" "}
                      <Spacing leftSpace="small" />
                      Florida, United States
                    </View>
                  }
                  color={"#aaabaf"}
                />
              </View>
              <View
                style={{
                  width: "25%",
                  borderRightColor: "#dee2e3",
                  borderRightWidth: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <SimpleLabel
                  type={"avarage"}
                  fontWeight={"bold"}
                  children={
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      {" "}
                      <Fontisto
                        name={"file-1"}
                        size={25}
                        color={"#dee2e3"}
                      />{" "}
                      <Spacing leftSpace="small" />
                      Long Term Rental
                    </View>
                  }
                  color={"#aaabaf"}
                />
              </View>
              <View
                style={{
                  width: "25%",
                  borderRightColor: "#dee2e3",
                  borderRightWidth: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <SimpleLabel
                  type={"avarage"}
                  fontWeight={"bold"}
                  children={
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      {" "}
                      <Fontisto
                        name={"home"}
                        size={25}
                        color={"#dee2e3"}
                      />{" "}
                      <Spacing leftSpace="small" />
                      Single Family Proparty
                    </View>
                  }
                  color={"#aaabaf"}
                />
              </View>
            </View>
            <Spacing bottomSpace="normal" />
            <View
              style={{
                width: "100%",
                borderRadius: 16,
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 24,
                borderWidth: 2,
                borderColor: "#dee2e3",
              }}
            >
              <View style={{ width: "48%" }}>
                <View style={{ width: "100%" }}>
                  <View style={styles.Headers}>
                    {" "}
                    <SimpleLabel
                      type={"avarage"}
                      fontWeight={"bold"}
                      children={"Loan Info"}
                      color={"#0202c2"}
                    />
                  </View>
                  <View style={styles.TableRows}>
                    <View style={styles.LeftContainer}>
                      {" "}
                      <SimpleLabel
                        type={"avarage"}
                        fontWeight={"bold"}
                        children={"Loan Amount"}
                      />
                    </View>
                    <View style={styles.RightContainer}>
                      {" "}
                      <SimpleLabel
                        type={"avarage"}
                        fontWeight={"bold"}
                        children={"$ 2000"}
                      />
                    </View>
                  </View>
                  <View style={styles.TableRows}>
                    <View style={styles.LeftContainer}>
                      {" "}
                      <SimpleLabel
                        type={"avarage"}
                        fontWeight={"bold"}
                        children={"Rate"}
                      />
                    </View>
                    <View style={styles.RightContainer}>
                      {" "}
                      <SimpleLabel
                        type={"avarage"}
                        fontWeight={"bold"}
                        children={"4%"}
                      />
                    </View>
                  </View>
                  <View style={styles.TableRows}>
                    <View style={styles.LeftContainer}>
                      {" "}
                      <SimpleLabel
                        type={"avarage"}
                        fontWeight={"bold"}
                        children={"LTV"}
                      />
                    </View>
                    <View style={styles.RightContainer}>
                      {" "}
                      <SimpleLabel
                        type={"avarage"}
                        fontWeight={"bold"}
                        children={"70%"}
                      />
                    </View>
                  </View>
                  <View style={styles.TableRows}>
                    <View style={styles.LeftContainer}>
                      {" "}
                      <SimpleLabel
                        type={"avarage"}
                        fontWeight={"bold"}
                        children={"DSCR"}
                      />
                    </View>
                    <View style={styles.RightContainer}>
                      {" "}
                      <SimpleLabel
                        type={"avarage"}
                        fontWeight={"bold"}
                        children={"1.15"}
                      />
                    </View>
                  </View>
                </View>
                <Spacing bottomSpace="normal" />
                <View style={{ width: "100%" }}>
                  <View style={styles.Headers}>
                    {" "}
                    <SimpleLabel
                      type={"avarage"}
                      fontWeight={"bold"}
                      children={"Proparty details"}
                      color={"#0202c2"}
                    />
                  </View>
                  <View style={styles.TableRows}>
                    <View style={styles.LeftContainer}>
                      {" "}
                      <SimpleLabel
                        type={"avarage"}
                        fontWeight={"bold"}
                        children={"Monthy Rent"}
                      />
                    </View>
                    <View style={styles.RightContainer}>
                      {" "}
                      <SimpleLabel
                        type={"avarage"}
                        fontWeight={"bold"}
                        children={"$ 2000"}
                      />
                    </View>
                  </View>
                  <View style={styles.TableRows}>
                    <View style={styles.LeftContainer}>
                      {" "}
                      <SimpleLabel
                        type={"avarage"}
                        fontWeight={"bold"}
                        children={"Yearly Insurance"}
                      />
                    </View>
                    <View style={styles.RightContainer}>
                      {" "}
                      <SimpleLabel
                        type={"avarage"}
                        fontWeight={"bold"}
                        children={"$ 20800"}
                      />
                    </View>
                  </View>
                  <View style={styles.TableRows}>
                    <View style={styles.LeftContainer}>
                      {" "}
                      <SimpleLabel
                        type={"avarage"}
                        fontWeight={"bold"}
                        children={"Yearly Rate"}
                      />
                    </View>
                    <View style={styles.RightContainer}>
                      {" "}
                      <SimpleLabel
                        type={"avarage"}
                        fontWeight={"bold"}
                        children={"$ 2000"}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View style={{ width: "48%" }}>
                <View style={{ width: "100%" }}>
                  <View style={styles.Headers}>
                    {" "}
                    <SimpleLabel
                      type={"avarage"}
                      fontWeight={"bold"}
                      children={"Monthy payments"}
                      color={"#0202c2"}
                    />
                  </View>
                  <View style={styles.TableRows}>
                    <View style={styles.LeftContainer}>
                      {" "}
                      <SimpleLabel
                        type={"avarage"}
                        fontWeight={"bold"}
                        children={"Monthy tax"}
                      />
                    </View>
                    <View style={styles.RightContainer}>
                      {" "}
                      <SimpleLabel
                        type={"avarage"}
                        fontWeight={"bold"}
                        children={"$ 2000"}
                      />
                    </View>
                  </View>
                  <View style={styles.TableRows}>
                    <View style={styles.LeftContainer}>
                      {" "}
                      <SimpleLabel
                        type={"avarage"}
                        fontWeight={"bold"}
                        children={"Montly Priciple"}
                      />
                    </View>
                    <View style={styles.RightContainer}>
                      {" "}
                      <SimpleLabel
                        type={"avarage"}
                        fontWeight={"bold"}
                        children={"$ 200000"}
                      />
                    </View>
                  </View>
                  <View style={styles.TableRows}>
                    <View style={styles.LeftContainer}>
                      {" "}
                      <SimpleLabel
                        type={"avarage"}
                        fontWeight={"bold"}
                        children={"Monthly Insurance"}
                      />
                    </View>
                    <View style={styles.RightContainer}>
                      {" "}
                      <SimpleLabel
                        type={"avarage"}
                        fontWeight={"bold"}
                        children={"0"}
                      />
                    </View>
                  </View>
                  <View style={styles.TableRows}>
                    <View style={styles.LeftContainer}>
                      {" "}
                      <SimpleLabel
                        type={"avarage"}
                        fontWeight={"bold"}
                        children={"Insurance Escow"}
                      />
                    </View>
                    <View style={styles.RightContainer}>
                      {" "}
                      <SimpleLabel
                        type={"avarage"}
                        fontWeight={"bold"}
                        children={"$ 20"}
                      />
                    </View>
                  </View>
                </View>
                <Spacing bottomSpace="normal" />
                <View style={{ width: "100%" }}>
                  <View style={styles.Headers}>
                    {" "}
                    <SimpleLabel
                      type={"avarage"}
                      fontWeight={"bold"}
                      children={"Cloning Coast"}
                      color={"#0202c2"}
                    />
                  </View>
                  <View style={styles.TableRows}>
                    <View style={styles.LeftContainer}>
                      {" "}
                      <SimpleLabel
                        type={"avarage"}
                        fontWeight={"bold"}
                        children={"Loan Obligation fee"}
                      />
                    </View>
                    <View style={styles.RightContainer}>
                      {" "}
                      <SimpleLabel
                        type={"avarage"}
                        fontWeight={"bold"}
                        children={"2%"}
                      />
                    </View>
                  </View>
                  <View style={styles.TableRows}>
                    <View style={styles.LeftContainer}>
                      {" "}
                      <SimpleLabel
                        type={"avarage"}
                        fontWeight={"bold"}
                        children={"Obligation fee"}
                      />
                    </View>
                    <View style={styles.RightContainer}>
                      {" "}
                      <SimpleLabel
                        type={"avarage"}
                        fontWeight={"bold"}
                        children={"$ 2000"}
                      />
                    </View>
                  </View>
                  <View style={styles.TableRows}>
                    <View style={styles.LeftContainer}>
                      {" "}
                      <SimpleLabel
                        type={"avarage"}
                        fontWeight={"bold"}
                        children={"Discount Points"}
                      />
                    </View>
                    <View style={styles.RightContainer}>
                      {" "}
                      <SimpleLabel
                        type={"avarage"}
                        fontWeight={"bold"}
                        children={"0"}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}
        <Spacing bottomSpace="small" />
        <View style={{ width: isSmallScreen() ? "90%" : "70%" }}>
          <SimpleLabel
            type={"avarage"}
            fontWeight={"normal"}
            children={
              "* every transaction olso include third pirty fees that is decided by the state the proparty is in and not Lendai ,any preliminary loan statement is for information purposes only and does not contain a binding order for lending loan approval are contengent upon borrower qualifications and final credit approval in accordance with underwritting and programme guidelines provided by lendai"
            }
            color={"gray"}
          />
        </View>
        <Spacing bottomSpace="normal" />
        <Spacing bottomSpace="normal" />
        <Spacing bottomSpace="normal" />
        <Spacing bottomSpace="normal" />
        <View
          style={{
            width: isSmallScreen() ? "90%" : "70%",
            height: isSmallScreen() ? 430 : 350,
            backgroundColor: cardColor,
            borderRadius: ContentSize(16),
            flexDirection: isSmallScreen() ? "column-reverse" : "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: isSmallScreen() ? 16 : "4%",
            paddingVertical: 24,
            marginTop: isSmallScreen() ? 10 : 90,
          }}
        >
          <View
            style={{
              width: isSmallScreen() ? "100%" : "40%",
              alignItems: isSmallScreen() ? "center" : "flex-start",
            }}
          >
            <SimpleLabel
              type={isSmallScreen() ? "medium" : "large"}
              fontWeight={"bold"}
              children={`Start Financing Your`}
              color={"white"}
            />
            <SimpleLabel
              type={isSmallScreen() ? "medium" : "large"}
              fontWeight={"bold"}
              children={`US proparty Today`}
              color={"white"}
            />
            <Spacing bottomSpace="normal" />
            <SimpleButton
              fontSize={avarage}
              fontWeight={"bold"}
              fontColor={cardColor}
              content={`let's Connect`}
              onPress={undefined}
              backGroundColor={"white"}
              borderRadius={5}
              borderWidth={2}
              borderColor={"white"}
              height={50}
              width={180}
            />
          </View>
          <View
            style={{
              height: isSmallScreen() ? 190 : 230,
              width: isSmallScreen() ? 270 : 450,
              position: "absolute",
              top: 0,
              right: isSmallScreen() ? 80 : 100,
              borderRadius: ContentSize(16),
              borderWidth: 2,
              borderColor: "white",
            }}
          />
          <View
            style={{
              height: isSmallScreen() ? 200 : 250,
              width: isSmallScreen() ? 300 : 450,
              position: "relative",
              top: isSmallScreen() ? -40 : -80,
            }}
          >
            <Image
              source={require("../../../assets/Images/House.jpg")}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: ContentSize(16),
              }}
            />
            <View
              style={{
                width: 250,
                backgroundColor: "white",
                height: 75,
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                position: "relative",
                top: isSmallScreen() ? -20 : -40,
                left: -30,
                padding: isSmallScreen() ? 10 : 16,
              }}
            >
              <SimpleLabel
                type={"normal"}
                fontWeight={"normal"}
                children={"Canadian investor"}
              />

              <SimpleLabel
                type={"normal"}
                fontWeight={"bold"}
                children={"$ 200,000.00"}
              />
            </View>
          </View>
        </View>
        <Spacing bottomSpace="normal" />
        <Spacing bottomSpace="normal" />
        <Spacing bottomSpace="normal" />
        <Spacing bottomSpace="normal" />
        <SimpleLabel
          type={isSmallScreen() ? "large" : "large"}
          fontWeight={"bold"}
          children={`FAQ'S`}
          AlignText={true}
        />
        <Spacing bottomSpace="small" />
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

export default PricingScreen;

const styles = StyleSheet.create({
  Headers: {
    backgroundColor: "#f0f7ff",
    width: "100%",
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  TableRows: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#dfe0e4",
  },
  LeftContainer: {
    width: "50%",
    borderRightWidth: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
    borderColor: "#dfe0e4",
  },
  RightContainer: {
    width: "50%",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  MobileBody: {
    borderColor: "#dfe0e4",
    borderBottomWidth: 1,
    height: 50,
    justifyContent: "center",
  },
});
