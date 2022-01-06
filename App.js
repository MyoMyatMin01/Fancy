import MaskedView from "@react-native-community/masked-view";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";

import OnboardStack from "./stack-routes/OnboardStack";

export default function App() {
  let [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch("https://reactnative.dev/movies.json");
      const json = await response.json();
      const movies = json.movies;
      setData(movies);
      console.log(movies);
    } catch (error) {
      console.log(error);
    }
  };
  // getMovies();

  return (
    // <OnboardStack/>
    <View style={styles.container}>
      {/* <FlatList
        data={data}
        keyExtractor={(data) => data.id}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      /> */}
      <ActivityIndicator size="large" color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
