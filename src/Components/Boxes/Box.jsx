import { Box, Flex, Text } from "@chakra-ui/react ";
import { TriangleUpIcon, TriangleDownIcon } from "@chakra-ui/icons";
import PropTypes from "prop-types";

const Boxes = ({ text, number }) => {
  return (
    <>
      <Box>
        <Text fontSize="4xl">{text}</Text>
        <Flex justifyContent="space-around" alignItems="center">
          <span>
            <TriangleUpIcon />
            {number}
            <TriangleDownIcon />
          </span>
        </Flex>
      </Box>
    </>
  );
};

Boxes.propTypes = {
  text: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

export default Boxes;
