import arc from "./arc.png";

function CTA() {
  return (
    <div
      id="section"
      className="flex flex-col items-center justify-center bg-[#176D3B] shadow-lg shadow-gray-500 mb-12 sm:flex-row"
    >
      <div className="w-full sm:w-2/3">
        <div className="max-w-lg mx-auto px-4 py-8 md:py-10 md:px-0">
          <p className="text-white mb-2">ALDERSGATE COLLEGE INC</p>
          <h3 className="text-4xl font-anton text-[#FFDE01] tracking-widest leading-tight mb-4 md:text-[72px]">
            WHERE GENIUS GROWS AND WISDOM FLOWS
          </h3>
          <a
            href="././index.html"
            className="text-white transition-colors duration-300 hover:text-gray-700"
          >
            ENROLL NOW
          </a>
        </div>
      </div>
      <div className="sm:w-1/2 flex justify-end items-right">
        <img src={arc} alt="" className="h-auto max-w-full md:h-[600px]" />
      </div>
    </div>
  );
}

export default CTA;
