import React, { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import Dot from "./Dot";

import Slide from "./Slide";
import SubSlide from "./SubSlide";

const { width, height } = Dimensions.get("window");

function Onboard(props) {
  let mainScroll = useRef();
  let subScroll = useRef();

  const opacity = new Animated.Value(1);
  // const textColor = opacity.interpolate({
  //   inputRange: [0, 0.2, 0.25, 0.5, 0.75, 0.8, 1],
  //   outputRange: [
  //     "#49ed37",
  //     "#4532d9",
  //     "#e34f4f",
  //     "#e3cf4f",
  //     "#e645e6",
  //     "#f23555",
  //     "#ffffff",
  //   ],
  // });
  const textColor = "#fff";
  const backgroundColor = "cyan";

  const fadeSeq = () => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 0.5,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start();
    // Animated.timing(opacity, {
    //   toValue: 1,
    //   duration: 250,
    //   useNativeDriver: false,
    // }).start();
  };

  let [firstDot, setFirstDot] = useState(true);
  let [secondDot, setSecondDot] = useState(false);
  let [thirdDot, setThirdDot] = useState(false);
  let [fouthDot, setFouthDot] = useState(false);

  let toFirstPage = () => {
    setFirstDot(true);
    setSecondDot(false);
    setThirdDot(false);
    setFouthDot(false);
  };

  let toSecondPage = () => {
    setFirstDot(false);
    setSecondDot(true);
    setThirdDot(false);
    setFouthDot(false);
  };

  let toThirdPage = () => {
    setFirstDot(false);
    setSecondDot(false);
    setThirdDot(true);
    setFouthDot(false);
  };

  let toFouthPage = () => {
    setFirstDot(false);
    setSecondDot(false);
    setThirdDot(false);
    setFouthDot(true);
  };

  const buttonPressHandler = (index) => {
    fadeSeq();
    mainScroll.current.scrollTo({ x: width * index });
    subScroll.current.scrollTo({ x: width * index });
    if (index === 1) {
      toSecondPage();
    } else if (index === 2) {
      toThirdPage();
    } else if (index === 3) {
      toFouthPage();
    } else {
      toFirstPage();
    }
  };

  // let [notCurrent, setNotCurrent] = useState(true);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.slider,
          {
            backgroundColor,
            opacity,
          },
        ]}
      >
        <Animated.ScrollView
          ref={mainScroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          onScroll={(event) => {
            let currentX = event.nativeEvent.contentOffset.x;
            subScroll.current.scrollTo({
              x: currentX,
            });
            if (currentX == width) {
              toSecondPage();
            } else if (currentX == width * 2) {
              toThirdPage();
            } else if (currentX == width * 3) {
              toFouthPage();
            } else if (currentX == 0) {
              toFirstPage();
            }
          }}
          onTouchMove={() => {
            fadeSeq();
          }}
        >
          <Slide label="Relaxed" right={false} textColor={textColor} />
          <Slide label="Playful" right={true} textColor={textColor} />
          <Slide label="Excentric" right={false} textColor={textColor} />
          <Slide label="Funcky" right={true} textColor={textColor} />
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor, opacity }}
        />
        <Animated.View style={[styles.textContainer]}>
          <ScrollView
            scrollEnabled={false}
            ref={subScroll}
            horizontal
            snapToInterval={width}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
          >
            <SubSlide
              onPress={() => buttonPressHandler(1)}
              title="Find Your Outfits!"
              subTitle="Confused about your outfit? Don't worry! Find the best outfit here!"
              last={false}
            />
            <SubSlide
              onPress={() => buttonPressHandler(2)}
              title="Hear it First, Wear it First"
              subTitle="Hating the clothes in your wardrobe? Explore hundreds of outfit ideas"
              last={false}
            />
            <SubSlide
              onPress={() => buttonPressHandler(3)}
              title="Your Style, Your Way"
              subTitle="Create your individual & unique style and look amazing everyday"
              last={false}
            />
            <SubSlide
              title="Look Good, Feel Good"
              subTitle="Discover the latest trends in fashion and explore your personality"
              last={true}
            />
          </ScrollView>
        </Animated.View>
        <Dot
          firstDot={firstDot}
          secondDot={secondDot}
          thirdDot={thirdDot}
          fouthDot={fouthDot}
        />
      </View>
    </View>
  );
}

export default Onboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: 0.61 * height,
    borderBottomRightRadius: 75,
  },
  footer: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    borderTopLeftRadius: 75,
    // justifyContent: "center",
    // alignItems: "center",
  },
});
