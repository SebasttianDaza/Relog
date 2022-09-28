import { Box, Flex, IconButton } from "@chakra-ui/react ";
import { TriangleUpIcon, TriangleDownIcon } from "@chakra-ui/icons";
import PropTypes from "prop-types";
import { TextStyle } from "@Style-components";

const Boxes = ({ subtitle, count }) => {
  const { fontSize, color, text } = subtitle;
  const { fontSize: fontSizeNumber, color: colorNumber, number } = count;
  return (
    <>
      <Box>
        <TextStyle fontSize={fontSize} color={color}>
          {text}
        </TextStyle>
        <Flex justifyContent="space-around" alignItems="center">
          <IconButton
            variant="outline"
            colorScheme="black"
            aria-label="Up"
            icon={<TriangleUpIcon />}
          />
          <TextStyle fontSize={fontSizeNumber} color={colorNumber}>
            {number}
          </TextStyle>
          <IconButton
            variant="outline"
            colorScheme="black"
            aria-lable="down"
            icon={<TriangleDownIcon />}
          />
        </Flex>
      </Box>
    </>
  );
};

Boxes.propTypes = {
  subtitle: PropTypes.shape({
    fontSize: PropTypes.string,
    color: PropTypes.string,
    text: PropTypes.string,
  }),
  count: PropTypes.shape({
    fontSize: PropTypes.string,
    color: PropTypes.string,
    number: PropTypes.number,
  }),
};

export default Boxes;
