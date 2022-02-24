import React from "react";
import { Animated, Dimensions, StyleSheet, View } from "react-native";

const { width } = Dimensions.get("window");

function Slide({ label, right, textColor }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.titleContainer,
          transform: [
            { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
            { rotate: right ? "90deg" : "-90deg" },
          ],
        }}
      >
        <Animated.Text style={[styles.title, { color: textColor }]}>
          {label}
        </Animated.Text>
      </View>
    </View>
  );
}

export default Slide;

const styles = StyleSheet.create({
  container: {
    width,
    justifyContent: "center",
  },
  title: {
    fontSize: 80,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  titleContainer: {
    height: 100,
    justifyContent: "center",
  },
});
