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

function LineText({ content = "content", alignment = "left", size = "small", theme = "blue" }) {
  // Making sure all the styles load
  // eslint-disable-next-line no-unused-vars
  const allThemes = "blue purple";

  if (size === "big") {
    return (
      <span
        className={`flex flex-col w-fit h-fit gap-y-1 mb-2 ${
          alignment === "center" ? "items-center" : ""
        }`}
      >
        <span className="">{content}</span>
        <span
          className={`w-4/6 bg-${theme} h-2 ${
            theme === "blue" ? "bg-blue" : theme === "purple" ? "bg-purple" : "bg-black"
          }`}
        ></span>
      </span>
    );
  } else {
    return (
      <span
        className={`underline decoration-[1.5px] underline-offset-4 ${
          theme === "blue"
            ? "decoration-blue"
            : theme === "purple"
            ? "decoration-purple"
            : "decoration-black"
        }`}
      >
        {content}
      </span>
    );
  }
}

// Props
LineText.propTypes = {
  content: PropTypes.string,
  alignment: PropTypes.string,
  size: PropTypes.string,
  theme: PropTypes.string,
};

export default LineText;
