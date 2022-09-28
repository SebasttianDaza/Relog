import { Center, Box, Flex } from "@chakra-ui/react";
import { Title, Boxes } from "@Components";

const Home = () => {
  return (
    <>
      <Center bg="blue" h="100vh">
        <Box w="30vw">
          <Title text="25 + 5 Clock" color="white" />
          <Flex mt="10" mb="10" justifyContent="space-between">
            <Boxes
              subtitle={{
                fontSize: "4xl",
                color: "white",
                text: "Break Length",
              }}
              count={{
                fontSize: "2xl",
                color: "white",
                number: 3,
              }}
            />
            <Boxes
              subtitle={{
                fontSize: "4xl",
                color: "white",
                text: "Session Length",
              }}
              count={{
                fontSize: "2xl",
                color: "white",
                number: 25,
              }}
            />
          </Flex>
        </Box>
      </Center>
    </>
  );
};

export default Home;
