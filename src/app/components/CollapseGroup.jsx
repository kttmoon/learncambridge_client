////////////////////////////
// Global
////////////////////////////

import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

////////////////////////////
// Components
////////////////////////////

////////////////////////////
// Body
////////////////////////////

function CollapseGroup({ theme = "blue", title = "title", subjects = [], subjectQuery = "" }) {
  // Initializers

  const filteredSubjects = subjects.filter((subject) => {
    if (subject.toLowerCase() === subjectQuery.toLowerCase()) {
      return subject;
    }
    return;
  });

  const [isCollapseGroupOpen, setIsCollapseGroupOpen] = useState(true);

  // Handlers
  function onClick() {
    setIsCollapseGroupOpen((cur) => !cur);
  }

  // JSX
  return (
    <div
      className={`w-full overflow-hidden flex flex-col gap-y-4 ${
        isCollapseGroupOpen ? "h-full" : "h-16"
      }`}
    >
      {/* Title */}
      <div
        className={`w-full h-16 flex items-center justify-between py-4 text-base px-6 cursor-pointer ${
          theme === "blue"
            ? "text-white border border-blue bg-blue"
            : theme === "purple"
            ? "text-white border border-purple bg-purple"
            : "text-white border border-black bg-black"
        }`}
        onClick={onClick}
      >
        <span>{title}</span>
        <div className="">
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            className={`fill-none transition duration-300 ${
              isCollapseGroupOpen ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 1L7 7L1 1"
              className={`stroke-[1.5] ${
                theme === "blue"
                  ? "stroke-white"
                  : theme === "purple"
                  ? "stroke-white"
                  : "stroke-white"
              }`}
            />
          </svg>
        </div>
      </div>

      {/* Details */}
      <div className="w-full h-full flex flex-col gap-y-4 text-black py-4 border border-l-0 border-r-0">
        {/* If subject query exists and there is an empty filteredSubjectArr */}
        {subjectQuery.length > 0 && filteredSubjects.length > 0 ? (
          filteredSubjects.map((subject, i) => {
            return (
              <Link
                key={i}
                to={`/subject/${title.toLowerCase().replaceAll(" ", "-")}_${subject
                  .toLowerCase()
                  .replaceAll(" ", "-")}`}
              >
                <p
                  className={`bg-white px-6 py-4 border border-black text-sm hover:bg-white-dark duration-100 cursor-pointer ${
                    theme === "blue"
                      ? "border-blue"
                      : theme === "purple"
                      ? "border-purple"
                      : "border-black"
                  }`}
                >
                  {subject}
                </p>
              </Link>
            );
          })
        ) : subjectQuery.length === 0 ? (
          subjects.map((subject, i) => {
            return (
              <Link
                key={i}
                to={`/subject/${title.toLowerCase().replaceAll(" ", "-")}_${subject
                  .toLowerCase()
                  .replaceAll(" ", "-")}`}
              >
                <p
                  className={`bg-white px-6 py-4 border text-sm hover:bg-white-dark duration-100 cursor-pointer ${
                    theme === "blue"
                      ? "border-blue"
                      : theme === "purple"
                      ? "border-purple"
                      : "border-black"
                  }`}
                >
                  {subject}
                </p>
              </Link>
            );
          })
        ) : (
          <p className="bg-white px-6 py-1 text-sm">
            We currently don&lsquo;t have the subject you searched for
          </p>
        )}
      </div>
    </div>
  );
}

// Props
CollapseGroup.propTypes = {
  subjectQuery: PropTypes.string,
  theme: PropTypes.string,
  title: PropTypes.string,
  subjects: PropTypes.array,
};

export default CollapseGroup;
