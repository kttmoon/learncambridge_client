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

function Divider({ theme = "white" }) {
  if (theme === "black") {
    return <hr className="w-full h-full bg-black opacity-50" />;
  } else {
    return <hr className="w-full h-full bg-white opacity-50" />;
  }
}

// Props
Divider.propTypes = {
  theme: PropTypes.string,
};

export default Divider;
