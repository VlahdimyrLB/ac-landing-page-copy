import arc from "./arc.png";
import logo from "./logo.png";

function CTA() {
  return (
    <section>
      <div class="flex items-center justify-between bg-[#176D3B] shadow-lg shadow-gray-500">
        <div class="w-2/3">
          <div class="max-w-lg mx-auto">
            <p class="text-white">ALDERSGATE COLLEGE INC</p>
            <h3 class="text-5xl font-anton text-[#FFDE01] tracking-wider leading-tight mb-4">
              WHERE GENIUS GROWS AND WISDOM FLOWS
            </h3>
            <a
              href="././index.html"
              class="text-white transition-colors duration-300 hover:text-gray-700 "
            >
              ENROLL NOW
            </a>
          </div>
        </div>
        <div class="w-1/2 flex justify-center">
          <img src={arc} alt="" class="h-full max-w-full" />
        </div>
      </div>
      <div class="grid grid-cols-5 gap-4 p-6 items-center justify-between">
        <div className="flex items-center justify-center">
          <img src={logo} alt="" className="w-[200px] h-[200px] p-3" />
        </div>
        <div className="items-center justify-start">
          <div>
            <h4 className="text-[20px] font-anton text-black mb-2">
              CONTACT US
            </h4>
          </div>
          <p className="text-xs text-[#176D3B]">
            Burgos St., Brgy. Quirino, Solano, Nueva Vizcaya 3709 Philippines
          </p>
          <hr className="m-3" />
          <p className="text-xs text-[#176D3B]">
            Registrar +63 926 207 8642; registrar@aldersgate.edu.ph
          </p>
          <hr className="m-3" />
          <p className="text-xs text-[#176D3B]">
            Treasury +63 078 326 5085, +63 967 003 8642
            treasury@aldersgate.edu.ph
          </p>
          <hr className="m-3" />
          <p className="text-xs text-[#176D3B]">Aldersgate College Inc</p>
        </div>
        <div className=" items-center justify-start">
          <h4 className="text-[20px] font-anton text-black mb-4">
            WORKING HOURS
          </h4>
          <p class="text-gray-600">
            Monday - Saturday <br /> 8:00am - 5:00pm
          </p>
          <p class="text-gray-600 mb-[110px]">Sunday - Closed</p>
        </div>
        <div className="">
          <div>
            <h4 className="text-[20px] font-anton text-black mb-2">
              DOWNLOADS
            </h4>
          </div>
          <div className="mb-4 mt-8">
            <a
              href="././index.html"
              className="text-[13px] text-[#176D3B] border-b border-[#176D3B] hover:bg-[#FFDE01] hover:animate-shake"
            >
              Student Handbook
            </a>
          </div>
          <div className="mb-4">
            <a
              href="././index.html"
              className="text-[13px] text-[#176D3B] border-b border-[#176D3B] hover:bg-[#FFDE01] hover:animate-shake"
            >
              Academic Scholarship Form
            </a>
          </div>
        </div>

        <div className="grid grid-rows-2 items-center justify-start">
          <div>
            <h4 className="text-[20px] font-anton text-black mb-2">
              NEWSLETTER
            </h4>
          </div>
          <p class="text-gray-600 mb-6">
            Stay up to date with our latest news, receive exclusive deals, and
            more.
          </p>
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="mt-5 mb-3 h-10 border border-gray-300 text-gray-900 text-md w-full p-3 border-b-gray-500 focus:outline-none"
          />
          <span className="">
            <a
              href="././index.html"
              className="text-black transition-colors duration-300 hover:text-gray-700"
            >
              SUBSCRIBE
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}

export default CTA;
