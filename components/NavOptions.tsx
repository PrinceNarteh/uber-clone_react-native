import React from "react";
import { FlatList, View } from "react-native";
import NavOption from "./NavOption";

interface Data {
  id: string;
  title: string;
  image: string;
  screen: string;
}

const data: Data[] = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatScreen",
  },
];

const NavOptions = () => {
  return (
    <View>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NavOption {...item} />}
      />
    </View>
  );
};

export default NavOptions;
