import { Center, Box, Flex } from "@chakra-ui/react";
import { Title, Boxes } from "@Components";

const Home = () => {
  return (
    <>
      <Center bg="blue" h="100vh">
        <Box w="30vw">
          <Title text="25 + 5 Clock" color="white" />
          <Flex mt="10" mb="10" justifyContent="space-between">
            <Boxes text="Break Length" number={5} />
            <Boxes text="Session Length" number={25} />
          </Flex>
        </Box>
      </Center>
    </>
  );
};

export default Home;
