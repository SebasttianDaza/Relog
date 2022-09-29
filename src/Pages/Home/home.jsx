import { Center, Box, Flex } from "@chakra-ui/react";
import { Title, Boxes, BoxContainer, IconButtons } from "@Components";
import { TextStyle } from "@Style-components";

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
          <BoxContainer
            subtitle={{
              fontSize: "2xl",
              color: "white",
              text: "Session",
            }}
          >
            <TextStyle fontSize="5xl" color="white">
              25:00
            </TextStyle>
          </BoxContainer>
          <Flex justifyContent="space-around" mt="10" mb="10">
            <IconButtons
              settings={{
                variant: null,
                colorScheme: "blue",
                ariaLabel: "Start",
              }}
            />
            <IconButtons
              settings={{
                variant: null,
                colorScheme: "blue",
                ariaLabel: "Start",
              }}
            />
            <IconButtons
              settings={{
                variant: null,
                colorScheme: "blue",
                ariaLabel: "Start",
              }}
            />
          </Flex>
          <TextStyle fontSize="1xl" color="white">
            Created and designed by Sebastian Daza
          </TextStyle>
        </Box>
      </Center>
    </>
  );
};

export default Home;
