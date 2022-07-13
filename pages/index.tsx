import { Center, Text } from "@chakra-ui/react";
import { Welcome } from "@components/templates";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Center
      w={"full"}
      h={"100vh"}
      color={"brand.darkBrown"}
      fontSize={"7xl"}
      flexDirection={"column"}
    >
      <Text>Welcome to Sova</Text>
      <Text fontSize={"4xl"} color={"brand.lightBrown"}>
        This is a tutorial project
      </Text>
      <Welcome />
    </Center>
  );
};

export default Home;
