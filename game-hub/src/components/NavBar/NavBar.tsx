import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image boxSize="60px" src={logo} />
      <Text>NavBar</Text>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
