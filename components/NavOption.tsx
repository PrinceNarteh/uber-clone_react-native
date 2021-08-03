import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import tw from "tailwind-react-native-classnames";

interface Props {
  id: string;
  title: string;
  image: string;
  screen: string;
}

const NavOption: React.FC<Props> = ({ image, title }) => {
  return (
    <TouchableOpacity style={tw`p-2 pl-6 pb-8 bg-gray-200 m-2 w-40`}>
      <View>
        <Image style={styles.image} source={{ uri: image }} />
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
