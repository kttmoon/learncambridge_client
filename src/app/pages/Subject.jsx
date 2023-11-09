////////////////////////////
// Global
////////////////////////////

import { useNavigate, useParams } from "react-router-dom";

// import PropTypes from "prop-types";

////////////////////////////
// Components
////////////////////////////

import Location from "../components/Location";
import firstLetterUppercase from "./../utils/firstLetterUppercase";

////////////////////////////
// Body
////////////////////////////

const GlobalSubjects = [
  {
    level: "A",
    subjects: ["Maths", "English", "Information Technology"],
  },
  {
    level: "O",
    subjects: [
      "Maths",
      "English",
      "Information And Communication Technology",
      "Physics",
      "Chemistry",
      "Urdu",
    ],
  },
];

function Subject() {
  const myParams = useParams();
  const subject = myParams.subjectId
    .split("_")[1]
    .split("-")
    .map((part) => firstLetterUppercase(part))
    .join(" ");
  const subjectLevel = myParams.subjectId.split("_")[0].split("-")[0].toUpperCase();

  const navigate = useNavigate();

  // Check if the subject selected is valid
  GlobalSubjects.map((subjectObj, i) => {
    if (subjectObj.level === subjectLevel) {
      if (GlobalSubjects[i].subjects.includes(subject)) {
        return;
      } else {
        setTimeout(() => {
          navigate("/");
        }, 100);
      }
    }
  });

  return (
    <div className="mt-32 px-4 lg:px-6 xl:px-8 2xl:px-10 3xl:px-12 4xl:w-[1536px] 4xl:mx-auto text-black">
      <div className="flex flex-col gap-y-4">
        <Location values={[myParams.subjectId.split("_")[0]]} subject={subject} />
        <h1 className="text-3xl">{subject}</h1>
      </div>
    </div>
  );
}

// Props
// Subject.propTypes = {
//   alignment: PropTypes.string,
// };

export default Subject;
