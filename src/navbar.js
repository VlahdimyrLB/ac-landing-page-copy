import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="px-6 lg:px-32 mx-auto bg-[#136A39] sticky top-0 left-0 right-0 z-20 shadow-lg">
      <div className="flex flex-row justify-between py-4 px-2">
        <div className="flex flex-row flex-1 items-center space-x-3">
          <img
            className="h-10"
            alt="AC LOGO"
            src="https://aldersgate.edu.ph/wp-content/uploads/2023/05/344770621_245996101322760_9017855415785289406_n-300x283.png"
          />
          <p className="font-[Poppins] font-normal text-xs text-center md:text-[15px] lg:text-base text-white">
            ALDERSGATE COLLEGE INC.
          </p>
        </div>
        <div className="flex flex-1 items-center justify-end text-sm font-[Roboto] text-white hover:cursor-pointer">
          <ul className="hidden lg:flex flex-row space-x-8 items-center text-xs font-semibold ">
            <li className="active:text-[#ffde01] hover:text-[#ffde01]">
              <a className="text-[#ffde01]">Home</a>
            </li>
            <li className="active:text-[#ffde01] hover:text-[#ffde01]">
              <a>About</a>
            </li>
            <li className="active:text-[#ffde01] hover:text-[#ffde01]">
              <a>Programs</a>
            </li>
            <li className="active:text-[#ffde01] hover:text-[#ffde01]">
              <a>Units</a>
            </li>
            <li className="active:text-[#ffde01] hover:text-[#ffde01] flex-none">
              <a>Research & Extension</a>
            </li>
          </ul>
        </div>
        <div className="flex justify-right items-center lg:hidden ">
          <FontAwesomeIcon
            className="text-white w-8 h-5 hover:text-[#ffde01]"
            icon={faBars}
          />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
