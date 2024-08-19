import React, { useState } from "react";
import { View, TextInput, StyleSheet, KeyboardType, Text } from "react-native";

const SimpleInput = (props: {
  onChangeText: any;
  label?: any;
  hint: string | undefined;
  keyboard?: KeyboardType;
  multiLine?: boolean;
  inputError: boolean;
  inactive?: boolean;
  minHeigt?: any;
  background?: string;
  borderRadius?: number;
  width?: any;
  value?: any;
  placeHolderColoer?: string;
}) => {
  function useStyles(inputError: boolean, inactive: boolean) {
    return StyleSheet.create({
      inputWrapper: {
        opacity: inactive ? 0.5 : 1,
        pointerEvents: inactive ? "none" : "auto",
      },
      input: {
        minHeight: props.minHeigt,
        width: props.width,
        borderColor: inputError ? "red" : "none",
        borderWidth: 0,
        borderRadius: props.borderRadius,
        paddingHorizontal: 10,
        marginBottom: 10,
        fontSize: 18,
        backgroundColor: inactive ? "#F2F2F2" : props.background,
      },
      spacer: {
        paddingBottom: 10,
      },
      bottomMargin: {
        marginBottom: 0,
      },
    });
  }

  const styles: any = useStyles(props.inputError, props.inactive || false);
  const [text, setText] = useState(props.value || "");

  const handleChangeText = (inputText: string) => {
    setText(inputText);
    if (props.onChangeText) {
      props.onChangeText(inputText);
    }
  };

  return (
    <View style={styles.inputWrapper}>
      <View style={styles.bottomMargin}>
        <View style={styles.spacer}>
          <Text>{props.label}</Text>
        </View>
        {!props.inactive && (
          <TextInput
            style={[
              styles.input,
              props.multiLine ? { minHeight: 100, paddingTop: 10 } : {},
            ]}
            onChangeText={handleChangeText}
            placeholder={props.hint}
            placeholderTextColor={props.placeHolderColoer}
            keyboardType={props.keyboard}
            multiline={props.multiLine}
            numberOfLines={props.multiLine ? 5 : 1}
            value={text}
            selectionColor="transparent"
          />
        )}
      </View>
    </View>
  );
};

export default SimpleInput;
