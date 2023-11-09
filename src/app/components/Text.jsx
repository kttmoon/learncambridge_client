////////////////////////////
// Global
////////////////////////////

import PropTypes from "prop-types";

////////////////////////////
// Components
////////////////////////////

////////////////////////////
// Body
////////////////////////////

function Text({ children, location = "Home", alignment = "left" }) {
  if (location === "Home") {
    return <p className={`text-base text-${alignment}`}>{children}</p>;
  }
}

// Props
Text.propTypes = {
  children: PropTypes.any,
  location: PropTypes.string,
  alignment: PropTypes.string,
};

export default Text;
