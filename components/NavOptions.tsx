import React from "react";
import { FlatList, View } from "react-native";

import { data } from "../data";
import NavOption from "./NavOption";

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
