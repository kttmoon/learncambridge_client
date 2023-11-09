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

function Button({ content = "content", theme = "blue", onClick = () => {} }) {
  // Making sure all the styles load
  // eslint-disable-next-line no-unused-vars
  const allThemes = "blue purple";

  // JSX
  return (
    <button
      className={`py-4 text-base font-medium text-center outline-4 outline-offset-4 text-white ${
        theme === "blue"
          ? "bg-blue outline-blue-dark"
          : theme === "purple"
          ? "bg-purple outline-purple-dark"
          : "bg-black outline-black-dark"
      }`}
      onClick={onClick}
    >
      {content}
    </button>
  );
}

// Props
Button.propTypes = {
  content: PropTypes.string,
  theme: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
