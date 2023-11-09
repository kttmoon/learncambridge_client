////////////////////////////
// Global
////////////////////////////

import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import NavBtn from "../components/NavBtn";

////////////////////////////
// Components
////////////////////////////

////////////////////////////
// Body
////////////////////////////

function NavBar() {
  return (
    <div className="z-50 fixed top-0 right-0 w-full h-fit py-8 bg-white flex justify-between items-center px-4 lg:px-6 xl:px-8 2xl:px-10 3xl:px-12">
      <div className="w-full h-full flex justify-between items-center 4xl:w-[1536px] 4xl:px-0 4xl:mx-auto">
        <Link to={"/"}>
          <div className="flex items-center gap-x-4 text-blue">
            <Logo />
            <p className="hidden md:block text-lg font-semibold">Learncambridge</p>
          </div>
        </Link>

        <NavBtn />
      </div>
    </div>
  );
}

export default NavBar;
