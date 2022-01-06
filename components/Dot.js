import React from "react";
import { Dimensions, StyleSheet, View, Animated } from "react-native";

const { width } = Dimensions.get("window");

function Dot({ firstDot, secondDot, thirdDot, fouthDot }) {
  // let toAnimateOpacity = new Animated.Value(width);
  // let opacity = toAnimateOpacity.interpolate({
  //     inputRange: [0, width, width * 2, width * 3],
  //     outputRange: [1, 0.5, 0.5, 0.5]
  // });

  return (
    <View style={styles.paginationStyle}>
      <Animated.View
        style={[
          styles.dotStyle,
          { opacity: firstDot ? 1 : 0.3, transform: [{ scale: firstDot ? 1.25 : 1 }] },
        ]}
      />
      <Animated.View
        style={[
          styles.dotStyle,
          { opacity: secondDot ? 1 : 0.3, transform: [{ scale: secondDot ? 1.25 : 1 }] },
        ]}
      />
      <Animated.View
        style={[
          styles.dotStyle,
          { opacity: thirdDot ? 1 : 0.3, transform: [{ scale: thirdDot ? 1.25 : 1 }] },
        ]}
      />
      <Animated.View
        style={[
          styles.dotStyle,
          { opacity: fouthDot ? 1 : 0.3, transform: [{ scale: fouthDot ? 1.25 : 1 }] },
        ]}
      />
    </View>
  );
}

export default Dot;

const styles = StyleSheet.create({
  paginationStyle: {
    // backgroundColor: "green",
    height: 40,
    width: 130,
    alignSelf: "center",
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    top: 17,
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    // borderColor: "cyan",
    // borderWidth: 2,
    backgroundColor: "cyan",
    margin: 4,
  },
});
