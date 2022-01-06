import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Button from "./Button";

const { width, height } = Dimensions.get("window");

function SubSlide({ onPress, title, subTitle, last }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
      <Button
        style={{
          width: 200,
          height: 45,
          backgroundColor: last ? "#2cb9b0" : "#c4f5f2",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 40,
          marginTop: 15,
        }}
        last={last}
        onPress={onPress}
      />
    </View>
  );
}

export default SubSlide;

const styles = StyleSheet.create({
  container: {
    width,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontSize: 19,
    fontWeight: "bold",
    margin: 8,
  },
  subTitle: {
    textAlign: "center",
    marginHorizontal: 33,
    fontSize: 15,
  },
});
