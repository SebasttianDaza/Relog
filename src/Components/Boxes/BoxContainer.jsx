import PropTypes from "prop-types";
import { TextStyle, ContainerStyle } from "@Style-components";

const BoxContainer = ({ subtitle, children }) => {
  const { fontSize, color, text } = subtitle;
  return (
    <>
      <ContainerStyle w="80%">
        <TextStyle fontSize={fontSize} color={color}>
          {text}
        </TextStyle>
        {children}
      </ContainerStyle>
    </>
  );
};

BoxContainer.propTypes = {
  subtitle: PropTypes.shape({
    fontSize: PropTypes.string,
    color: PropTypes.string,
    text: PropTypes.string,
  }),
  children: PropTypes.node,
};

export default BoxContainer;
