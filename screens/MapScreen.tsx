import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type MapScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  "MapScreen"
>;

interface MapScreenProps {
  navigation: MapScreenNavigationProp;
}

const MapScreen: React.FC<MapScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text>This is the Map Screen</Text>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
