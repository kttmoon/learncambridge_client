////////////////////////////
// Global
////////////////////////////

import { useState } from "react";

////////////////////////////
// Components
////////////////////////////

////////////////////////////
// Body
////////////////////////////

function NavBtn() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Functions
  function onClick() {
    setIsNavOpen((cur) => !cur);
  }

  return (
    <div
      className={`flex flex-col w-12 h-8  justify-between items-end cursor-pointer ${
        isNavOpen ? "h-12" : ""
      }`}
      onClick={onClick}
    >
      <div
        className={`w-full h-1 bg-blue-dark transition-all duration-300 ${
          isNavOpen ? "-rotate-45 translate-y-3" : ""
        }`}
      ></div>
      <div
        className={`h-1 bg-blue transition-all duration-300 ${
          isNavOpen ? "w-0" : "w-2/4 delay-200"
        }`}
      ></div>
      <div
        className={`h-1 bg-blue-light transition-all duration-300 ${
          isNavOpen ? "w-full rotate-45 -translate-y-4" : "w-1/4"
        }`}
      ></div>
    </div>
  );
}

export default NavBtn;
