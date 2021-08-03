import React from "react";
import tw from "tailwind-react-native-classnames";
import { useNavigation, CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ImageProps } from "react-native-elements";
import { RootStackParamList } from "../App";

interface Props {
  id: string;
  title: string;
  image: ImageProps;
  screen: string;
}

type NavOptionScreenProps = CompositeScreenProps<
  NativeStackScreenProps<RootStackParamList, "EatScreen">,
  NativeStackScreenProps<RootStackParamList, "MapScreen">
>;

const NavOption: React.FC<Props> = ({ image, title, screen }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(screen)}
      style={tw`p-2 pl-6 pb-8 bg-gray-200 m-2 w-40`}
    >
      <View>
        <Image style={styles.image} source={image} />
        <Text style={tw`mt-2 text-lg font-bold`}>{title}</Text>
        <Icon
          style={tw`p-2 bg-black rounded-full w-10 mt-4`}
          name="arrowright"
          color="white"
          type="antdesign"
        />
      </View>
    </TouchableOpacity>
  );
};

export default NavOption;

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
});
