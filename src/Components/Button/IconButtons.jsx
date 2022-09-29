import { IconButton } from "@chakra-ui/react ";
import PropTypes from "prop-types";

const IconButtons = ({ settings, icon }) => {
  const { variant, colorScheme, ariaLabel } = settings;
  return (
    <>
      <IconButton variant={variant} colorScheme={colorScheme} aria-label={ariaLabel} icon={icon} />
    </>
  );
};

IconButtons.propTypes = {
  settings: PropTypes.shape({
    variant: PropTypes.string,
    colorScheme: PropTypes.string,
    ariaLabel: PropTypes.string,
  }),
  icon: PropTypes.node,
};

export default IconButtons;
