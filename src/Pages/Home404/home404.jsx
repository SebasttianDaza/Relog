import { useNavigate } from "react-router-dom";
import { Center, Button, Flex } from "@chakra-ui/react";
import { Title } from "@Components";

const Home404 = () => {
  const navigate = useNavigate();
  return (
    <>
      <Center bg="blue" h="100vh">
        <Flex flexDirection="column" alignItems="center">
          <Title text="Not found 404" color="white" />
          <Button colorScheme="teal" size="lg" mt="10" onClick={() => navigate("/")}>
            Go Back
          </Button>
        </Flex>
      </Center>
    </>
  );
};

export default Home404;
