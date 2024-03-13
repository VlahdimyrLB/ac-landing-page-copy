import arc from "./arc.png";

const backgroundImageStyle = {
  backgroundImage:
    'url("https://aldersgate.edu.ph/wp-content/uploads/2023/05/wallpaper-cp.png")',
  backgroundSize: "cover",
  backgroundPosition: "bottom right",
  backgroundRepeat: "no-repeat",
};

function CTA() {
  return (
    <section className="container bg-slate-500 min-h-[600px] flex flex-col md:flex-row">
      {/* First Div */}
      <div className="flex justify-center bg-[#176D3B]">
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

      {/* Image Div */}
      <div className="md:w-[55%]" style={backgroundImageStyle}>
        adsadsadsadds
      </div>
    </section>
  );
}

export default CTA;
