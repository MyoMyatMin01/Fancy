import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function Button({ onPressLast, onPress, style, last }) {
  return (
    <TouchableOpacity onPress={last ? onPressLast : onPress} >
      <View style={style}>
        <Text style={{ color: last ? "#fff" : "#000" }}>
          {last ? "Let's get started" : "Next"}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default Button;

const styles = StyleSheet.create({});
