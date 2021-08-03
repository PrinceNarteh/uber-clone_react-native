import { ImageProps } from "react-native-elements";

interface Data {
  id: string;
  title: string;
  image: ImageProps;
  screen: string;
}

export const data: Data[] = [
  {
    id: "123",
    title: "Get a ride",
    image: require("./assets/uber_x.png"),
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image: require("./assets/eat_icon.png"),
    screen: "EatScreen",
  },
];
