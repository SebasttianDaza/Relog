import { Heading } from "@chakra-ui/react";
import PropTypes from "prop-types";

const Title = ({ text, color }) => {
  return (
    <Heading as="h1" size="4xl" color={color} textAlign="center">
      {text}
    </Heading>
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Title;
