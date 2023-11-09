////////////////////////////
// Global
////////////////////////////

import PropTypes from "prop-types";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

////////////////////////////
// Components
////////////////////////////

////////////////////////////
// Body
////////////////////////////

function SearchBar({ placeholder = "Search...", theme = "blue", size = "full" }) {
  // Initialization

  let searchPlaceholder = placeholder;

  const [searchNewQuery, setSearchNewQuery] = useState();

  const myLocation = useLocation();
  const myLocationSearch = myLocation.search;
  const myLocationSearchQueryArr = myLocationSearch
    .replace("?", "")
    .trim()
    .split("&")
    .map((obj1) => {
      const queryName = obj1.split("=")[0];
      let queryValue = obj1.split("=")[1];

      queryValue = queryValue?.replaceAll("-", " ") || "";

      return { query: queryName, value: queryValue };
    });

  myLocationSearchQueryArr.forEach((queryObj) => {
    if (queryObj.query === "subject" && queryObj.value.trim().length > 0) {
      searchPlaceholder = queryObj.value;
    }
  });

  // Making sure all the styles load
  // eslint-disable-next-line no-unused-vars
  const allThemes = "blue purple";

  // JSX
  return (
    <div
      className={`w-full h-full relative  ${
        theme === "blue" ? "bg-blue " : theme === "purple" ? "bg-purple" : "bg-black "
      }`}
    >
      {/* When there is no search query it will show a placeholder or show a default value otherwise */}
      {searchPlaceholder === placeholder ? (
        <input
          type="text"
          placeholder={searchPlaceholder}
          onChange={(e) => {
            setSearchNewQuery(e.target.value);
          }}
          className={`text-white placeholder:text-white text-base px-6 outline-none truncate ${
            size === "full" ? "w-5/6 py-4" : ""
          } ${theme === "blue" ? "bg-blue" : theme === "purple" ? "bg-purple" : "bg-black"}`}
        />
      ) : (
        <input
          type="text"
          defaultValue={searchPlaceholder}
          onChange={(e) => {
            setSearchNewQuery(e.target.value);
          }}
          className={`text-white placeholder:text-white text-base px-6 outline-none truncate ${
            size === "full" ? "w-5/6 py-4" : ""
          } ${theme === "blue" ? "bg-blue" : theme === "purple" ? "bg-purple" : "bg-black"}`}
        />
      )}

      {/* Icon */}
      <Link
        to={
          searchNewQuery
            ? `/?subject=${searchNewQuery.replaceAll(" ", "-")}`
            : `/?subject=${searchPlaceholder.replaceAll(" ", "-")}`
        }
      >
        <div className="absolute top-0 right-0 w-fit h-full flex justify-center items-center px-6">
          <svg viewBox="0 0 12 12" className="fill-none h-2/5" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.83333 9.16667C7.22657 9.16667 9.16667 7.22657 9.16667 4.83333C9.16667 2.4401 7.22657 0.5 4.83333 0.5C2.4401 0.5 0.5 2.4401 0.5 4.83333C0.5 7.22657 2.4401 9.16667 4.83333 9.16667Z"
              className="stroke-white"
            />
            <path
              d="M10.9309 11.4024C11.0611 11.5325 11.2722 11.5325 11.4024 11.4024C11.5325 11.2722 11.5325 11.0611 11.4024 10.9309L10.9309 11.4024ZM11.4024 10.9309L8.06907 7.5976L7.5976 8.06906L10.9309 11.4024L11.4024 10.9309Z"
              className="fill-white"
            />
          </svg>
        </div>
      </Link>
    </div>
  );
}

// Props
SearchBar.propTypes = {
  placeholder: PropTypes.string,
  theme: PropTypes.string,
  size: PropTypes.string,
};

export default SearchBar;
