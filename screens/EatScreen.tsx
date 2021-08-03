import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FoodScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Order Your Food Here.</Text>
    </View>
  );
};

export default FoodScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
