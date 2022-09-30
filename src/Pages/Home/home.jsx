import { useState, useEffect } from "react";
import { Center, Box, Flex, useMediaQuery } from "@chakra-ui/react";
import { Title, Boxes, BoxContainer, IconButtons } from "@Components";
import { TextStyle } from "@Style-components";
import { RepeatIcon } from "@chakra-ui/icons";

const Home = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const [isBreakLength, setIsBreakLength] = useState(5);
  const [isSessionLength, setIsSessionLength] = useState(25);
  const [isResponse, setIsResponse] = useState(2500);
  const [isPlay, setIsPlay] = useState(false);

  const handleBreakLength = (e) => {
    if (e.target.id === "up") {
      setIsBreakLength((prev) => prev + 1);
    }
    if (e.target.id === "down") {
      if (isBreakLength > 1) {
        setIsBreakLength((prev) => prev - 1);
      }
    }
  };

  const handleSessionLength = (e) => {
    let num = isResponse.toString().slice(0, 2);
    if (e.target.id === "up") {
      setIsSessionLength((prev) => prev + 1);
      if (parseInt(num) !== isSessionLength) {
        setIsResponse(isSessionLength + "00");
      }
      setIsResponse(parseInt(num) + 1 + "00");
    }
    if (e.target.id === "down") {
      let num = isResponse.toString().slice(0, 2);
      if (isSessionLength > 1) {
        setIsSessionLength((prev) => prev - 1);
        if (parseInt(num) !== isSessionLength) {
          setIsResponse(isSessionLength + "00");
        }
        setIsResponse(parseInt(num) - 1 + "00");
      }
    }
  };

  useEffect(() => {
    let interval = null;
    if (isPlay) {
      interval = setInterval(() => {
        if (isResponse > 0) {
          let number = parseInt(isResponse) - isBreakLength;
          setIsResponse(number);
        }
      }, 1000);
    }
    if (!isPlay && interval) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlay, isResponse, isBreakLength]);

  const reset = () => {
    setIsBreakLength(5);
    setIsSessionLength(25);
    setIsResponse(2500);
    setIsPlay(false);
  };

  return (
    <>
      <Center bg="blue" h="100vh">
        <Box w={isLargerThan768 ? "40%" : "100%"}>
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
                number: isBreakLength,
              }}
              onClick={handleBreakLength}
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
                number: isSessionLength,
              }}
              onClick={handleSessionLength}
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
              {/* isResponse slice : like relog or watch */}
              {isResponse.toString().slice(0, 2) + `:` + isResponse.toString().slice(2)}
            </TextStyle>
          </BoxContainer>
          <Flex justifyContent="space-around" mt="10" mb="10">
            <IconButtons
              settings={{
                variant: null,
                colorScheme: "blue",
                ariaLabel: "Start",
              }}
              onClick={() => setIsPlay((prev) => !prev)}
            />
            <IconButtons
              settings={{
                variant: null,
                colorScheme: "blue",
                ariaLabel: "Start",
              }}
              icon={<RepeatIcon />}
              onClick={() => reset()}
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
