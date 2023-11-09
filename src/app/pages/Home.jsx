////////////////////////////
// Global
////////////////////////////

import { useRef } from "react";

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

////////////////////////////
// Components
////////////////////////////

import Button from "./../components/Button";
import Divider from "./../components/Divider";
import LineText from "./../components/LineText";
import SearchBar from "./../components/SearchBar";
import Text from "./../components/Text";
import { useLocation } from "react-router-dom";
import CollapseGroup from "../components/CollapseGroup";

////////////////////////////
// Body
////////////////////////////

function Home() {
  // Initializer
  const subjectsRef = useRef(null);

  const myLocation = useLocation();
  const myLocationSearch = myLocation.search;

  let myLocationSearchQueryArr = [];

  if (myLocationSearch.length > 0) {
    myLocationSearchQueryArr = myLocationSearch
      .replaceAll("?", "")
      .trim()
      .split("&")
      .map((obj1) => {
        const queryName = obj1.split("=")[0];
        let queryValue = obj1.split("=")[1];

        queryValue = queryValue.replaceAll("-", " ");

        return { query: queryName, value: queryValue };
      });

    setTimeout(() => {
      myLocationSearchQueryArr.forEach((queryObj) => {
        if (queryObj.query === "subject" && queryObj.value.length > 0) {
          executeScrollToSubjects();
        }
      });
    }, 100);
  }

  // const options =

  // Handlers
  function executeScrollToSubjects() {
    if (subjectsRef.current) {
      subjectsRef.current.scrollIntoView();
    }
  }

  // JSX
  return (
    <div className="mt-64 flex flex-col w-screen max-w-[100vw] gap-y-32 px-4 lg:px-6 xl:px-8 2xl:px-10 3xl:px-12 4xl:w-[1536px] 4xl:mx-auto text-black ">
      {/* Hero section */}
      <div className="flex flex-col gap-y-8">
        <h1 className="text-3xl font-semibold w-full">
          Step up your <LineText content="cambridge" size="big" /> journey
        </h1>

        <Text location="Home">
          We are working towards the <LineText content="future of cambridge learning" />. Providing
          everything you need to ace your exams
        </Text>

        <Button content="Start Now" theme="purple" onClick={executeScrollToSubjects} />
      </div>
      {/* Divider */}
      <div className="w-full h-1">
        <Divider theme="light" />
      </div>
      {/* Why us */}
      <div className="flex flex-col gap-y-4 items-center w-full">
        <h2 className="text-2xl font-semibold">
          <LineText content="Why Us" alignment="center" size="big" />
        </h2>
        <p className="text-base text-center"></p>

        <Text location="Home" alignment="center">
          You might think that we are just one of many websites which teaches cambridge subjects or
          just provides notes and past papers. See below and maybe{" "}
          <LineText content="think again" />
        </Text>
      </div>
      {/* Why us cards */}
      <div className="flex flex-col items-center w-full gap-y-16">
        {/* Card-1 */}
        <div className="flex flex-col items-center justify-center w-4/5 gap-y-8 px-8">
          <div className="w-3/6 h-3/6 p-8 border rounded-md border-purple">
            <svg
              viewBox="0 0 33 39"
              className="fill-none w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.8656 34.0401H13.0453C9.87003 34.0401 3.87224 32.4348 3.87224 26.3488C3.87224 20.2628 9.87003 18.6575 13.0453 18.6575H20.8778C21.1424 18.6575 27.4048 18.5693 27.4048 13.6123C27.4048 8.6553 21.1424 8.56709 20.8778 8.56709H12.0575C11.7066 8.56709 11.37 8.4277 11.1219 8.17958C10.8738 7.93147 10.7344 7.59494 10.7344 7.24405C10.7344 6.89316 10.8738 6.55663 11.1219 6.30852C11.37 6.0604 11.7066 5.92101 12.0575 5.92101H20.8778C24.0531 5.92101 30.0509 7.5263 30.0509 13.6123C30.0509 19.6983 24.0531 21.3036 20.8778 21.3036H13.0453C12.7807 21.3036 6.51832 21.3918 6.51832 26.3488C6.51832 31.3058 12.7807 31.394 13.0453 31.394H21.8656C22.2165 31.394 22.5531 31.5334 22.8011 31.7816C23.0493 32.0296 23.1887 32.3662 23.1887 32.717C23.1887 33.0679 23.0493 33.4045 22.8011 33.6525C22.5531 33.9007 22.2165 34.0401 21.8656 34.0401Z"
                className="fill-purple"
              />
              <path
                d="M7.15339 13.4183C5.92409 13.4078 4.72539 13.0337 3.70833 12.3432C2.69128 11.6526 1.90137 10.6764 1.43816 9.53769C0.974936 8.39896 0.859143 7.14859 1.10537 5.94415C1.35158 4.73972 1.9488 3.6351 2.82175 2.76952C3.69469 1.90391 4.80432 1.31607 6.01079 1.08006C7.21728 0.844046 8.46662 0.970406 9.60139 1.44324C10.7362 1.91608 11.7056 2.71421 12.3875 3.73708C13.0695 4.75994 13.4334 5.96177 13.4334 7.19113C13.4334 8.01335 13.2707 8.82745 12.9544 9.58642C12.6382 10.3454 12.1747 11.0342 11.5909 11.6132C11.007 12.1921 10.3143 12.6497 9.55267 12.9595C8.79103 13.2693 7.9756 13.4252 7.15339 13.4183ZM7.15339 3.61009C6.4556 3.61009 5.77347 3.81699 5.19327 4.20468C4.61307 4.59235 4.16088 5.14337 3.89383 5.78805C3.62681 6.43272 3.55693 7.1421 3.69307 7.8265C3.8292 8.51089 4.16523 9.13953 4.65864 9.63295C5.15207 10.1264 5.7807 10.4624 6.46509 10.5985C7.14949 10.7347 7.85887 10.6648 8.50355 10.3978C9.14822 10.1307 9.69924 9.6785 10.0869 9.09832C10.4746 8.51812 10.6815 7.83599 10.6815 7.1382C10.6815 6.67487 10.5902 6.2161 10.4129 5.78805C10.2356 5.36 9.97576 4.97106 9.64815 4.64344C9.32053 4.31583 8.93159 4.05595 8.50355 3.87865C8.0755 3.70134 7.61672 3.61009 7.15339 3.61009Z"
                className="fill-purple"
              />
              <path
                d="M26.7697 38.8912C25.5373 38.8948 24.3316 38.5324 23.3053 37.8503C22.2789 37.1683 21.4781 36.197 21.0041 35.0594C20.5301 33.9219 20.4041 32.6692 20.6424 31.4602C20.8808 30.2511 21.4724 29.1397 22.3426 28.2672C23.2128 27.3945 24.3223 26.7997 25.5308 26.558C26.7392 26.3162 27.9922 26.4386 29.1311 26.9092C30.2699 27.3801 31.2435 28.1783 31.9285 29.2027C32.6135 30.2271 32.9792 31.4317 32.9792 32.6641C32.9792 34.3126 32.3256 35.8938 31.1615 37.061C29.9976 38.2285 28.4182 38.8865 26.7697 38.8912ZM26.7697 29.0831C26.0718 29.0831 25.3899 29.29 24.8097 29.6777C24.2295 30.0653 23.7772 30.6164 23.5101 31.261C23.2432 31.9058 23.1733 32.6151 23.3093 33.2995C23.4455 33.9838 23.7816 34.6125 24.275 35.1059C24.7684 35.5993 25.3971 35.9354 26.0814 36.0716C26.7658 36.2076 27.4752 36.1377 28.1199 35.8707C28.7645 35.6037 29.3156 35.1514 29.7032 34.5712C30.0909 33.991 30.2978 33.3091 30.2978 32.6112C30.2978 31.6755 29.9261 30.778 29.2644 30.1165C28.6027 29.4548 27.7054 29.0831 26.7697 29.0831Z"
                className="fill-purple"
              />
            </svg>
          </div>
          <Text location="Home" alignment="center">
            Personalized Point System With Carefully Crafted Paths For You To{" "}
            <LineText content="Ace Your Exams" theme="purple" />
          </Text>
        </div>

        {/* Card-2 */}
        <div className="flex flex-col items-center justify-center w-4/5 gap-y-8 px-8">
          <div className="w-3/6 h-3/6 p-8 border rounded-md border-blue">
            <svg
              viewBox="0 0 14 12"
              className="fill-none w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 1.90195L6.65351 2.23542C6.74418 2.32961 6.86927 2.38283 7 2.38283C7.13074 2.38283 7.25583 2.32961 7.34649 2.23542L7 1.90195ZM3.79454 8.90372C3.58947 8.73496 3.28642 8.76439 3.11765 8.96944C2.94888 9.17448 2.9783 9.47757 3.18337 9.64632L3.79454 8.90372ZM0.80756 6.97418C0.934993 7.20718 1.22719 7.29277 1.4602 7.16531C1.69322 7.03784 1.77879 6.74566 1.65135 6.51266L0.80756 6.97418ZM1.06916 4.23355C1.06916 2.85447 1.84843 1.69799 2.91212 1.21177C3.94551 0.739408 5.33402 0.8645 6.65351 2.23542L7.34649 1.56847C5.78082 -0.0581845 3.96347 -0.326278 2.51229 0.337059C1.09142 0.986541 0.107407 2.49465 0.107407 4.23355H1.06916ZM4.75425 10.8779C5.08268 11.1368 5.43525 11.4129 5.79255 11.6216C6.14975 11.8303 6.55734 12 7 12V11.0382C6.8015 11.0382 6.56792 10.9609 6.27779 10.7913C5.98779 10.6218 5.68693 10.3885 5.34966 10.1226L4.75425 10.8779ZM9.24577 10.8779C10.1605 10.1568 11.3297 9.33055 12.2469 8.29775C13.1806 7.24642 13.8926 5.94259 13.8926 4.23355H12.9308C12.9308 5.64246 12.3543 6.72841 11.5278 7.65914C10.6848 8.60839 9.62214 9.35651 8.65038 10.1226L9.24577 10.8779ZM13.8926 4.23355C13.8926 2.49465 12.9086 0.986541 11.4877 0.337059C10.0365 -0.326278 8.21919 -0.0581845 6.65351 1.56847L7.34649 2.23542C8.66596 0.8645 10.0545 0.739408 11.0879 1.21177C12.1516 1.69799 12.9308 2.85447 12.9308 4.23355H13.8926ZM8.65038 10.1226C8.31306 10.3885 8.01222 10.6218 7.72222 10.7913C7.43209 10.9609 7.19851 11.0382 7 11.0382V12C7.44267 12 7.85026 11.8303 8.20746 11.6216C8.56478 11.4129 8.9173 11.1368 9.24577 10.8779L8.65038 10.1226ZM5.34966 10.1226C4.83934 9.72031 4.32073 9.33677 3.79454 8.90372L3.18337 9.64632C3.71572 10.0844 4.27805 10.5025 4.75425 10.8779L5.34966 10.1226ZM1.65135 6.51266C1.29152 5.85475 1.06916 5.10952 1.06916 4.23355H0.107407C0.107407 5.28347 0.376667 6.1863 0.80756 6.97418L1.65135 6.51266Z"
                className="fill-blue"
              />
            </svg>
          </div>
          <Text location="Home" alignment="center">
            Beautiful User Interface. <LineText content="Easy On The Eyes" /> With Being Super
            Supportive and Helpful
          </Text>
        </div>
      </div>
      {/* Divider */}
      <div className="w-full h-1">
        <Divider theme="light" />
      </div>
      {/* Subjects */}
      <div className="flex flex-col w-full gap-y-8" id="subjects" ref={subjectsRef}>
        <h2 className="text-2xl font-semibold">
          <LineText content="Subjects" size="big" />
        </h2>
        <Text location="Home">
          Explore our library of subjects from A and O Level. Could not find a subject which you
          were looking for? <LineText content="Tell us" theme="purple" />
        </Text>
        <div className="w-full h-full">
          <SearchBar />
        </div>
        <CollapseGroup
          theme="purple"
          title="A Levels"
          subjects={GlobalSubjects[0].subjects}
          subjectQuery={[
            myLocationSearchQueryArr.map((queryObj) => {
              if (queryObj.query === "subject" && queryObj.value.length > 0) {
                return queryObj.value;
              }
            }),
          ].join("")}
        />
        <CollapseGroup
          title="O Levels"
          subjects={GlobalSubjects[1].subjects}
          subjectQuery={[
            myLocationSearchQueryArr.map((queryObj) => {
              if (queryObj.query === "subject" && queryObj.value.length > 0) {
                return queryObj.value;
              }
            }),
          ].join("")}
        />
      </div>
      Other
    </div>
  );
}

export default Home;
