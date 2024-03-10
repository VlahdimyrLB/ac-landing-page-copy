import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendarDays,
  faMapPin,
  faPhone,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header className="mx-auto pr-5 bg-[#ffde01] text-[#176D3B]">
      <div className="flex flex-col md:flex-row ml-6">
        <div className="flex flex-col flex-wrap space-y-2 py-3 ml-3 justify-start items-start mx-auto md:flex-1 sm:space-x-3 sm:space-y-0 sm:items-center sm:flex-row sm:justify-center">
          <div className="flex flex-row space-x-2 ">
            <FontAwesomeIcon icon={faMapPin} />
            <p className="">
              Burgos St., Brgy. Quirino, Solano, Nueva Vizcaya 3709 Philippines
            </p>
          </div>
          <div className="flex flex-row space-x-2">
            <FontAwesomeIcon icon={faPhone} />
            <p>Registrar +63 926 207 8642</p>
          </div>
          <div className="flex flex-row space-x-2">
            <FontAwesomeIcon icon={faPhone} />
            <p>Treasury +63 078 326 5085, +63 967 003 8642</p>
          </div>
          <div className="flex flex-row space-x-2">
            <FontAwesomeIcon icon={faFacebookF} className="w-[12px]" />
            <p>Aldersgate College Inc.</p>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center mr-5 sm:ml-5 py-3">
          <FontAwesomeIcon icon={faCalendarDays} size="xl" />
          <div className="flex flex-1 flex-shrink ml-3 max-w-[400px]">
            <input
              placeholder="Search"
              className="flex-1 rounded-l-sm p-2 pt-3 pl-3 m-0 focus:outline-none"
            />
            <button className="bg-[#176D3B] p-2 px-3 flex items-center text-white">
              <FontAwesomeIcon
                className="text-white hover:text-[#ffde01]"
                icon={faSearch}
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
