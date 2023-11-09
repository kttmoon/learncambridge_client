////////////////////////////
// Global
////////////////////////////

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

////////////////////////////
// Components
////////////////////////////

// import firstLetterUppercase from "./../utils/firstLetterUppercase";

////////////////////////////
// Body
////////////////////////////

function Location({ values = [], subject = "subject" }) {
  return (
    <div className="text-sm flex gap-y-2 items-center">
      {values.map((valueString1, i1) => {
        return valueString1.split("_").map((valueString2, i2) => {
          if (i1 === 0) {
            return (
              <Link key={i2} to={`/?subject=${subject.replaceAll(" ", "-")}`}>
                <div className="flex items-center gap-x-4 mr-4">
                  <p>{valueString2.toUpperCase().replace("-", " ")}</p>
                  {i1 < values.length - 1 && <hr className="w-4 h-0.5 bg-black" />}
                </div>
              </Link>
            );
          } else {
            <div key={i2} className="flex items-center gap-x-4 mr-4">
              <p>{valueString2.toUpperCase().replace("-", " ")}</p>
              {i1 < values.length - 1 && <hr className="w-4 h-0.5 bg-black" />}
            </div>;
          }
        });
      })}
    </div>
  );
}

// Props
Location.propTypes = {
  values: PropTypes.array,
  subject: PropTypes.string,
};

export default Location;
