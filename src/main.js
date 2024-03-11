import { Carousel, Typography, Button } from "@material-tailwind/react";

const carouselItems = [
  {
    title:
      "College of Arts, Science, Education and Information Technology (CASEIT)",
    subtitles: [
      "Bachelor of Science in Information Technology (BSIT)",
      "Bachelor of Science in Computer Science (BSCS)",
    ],
    image: "./images/Tatsumaki.png",
  },
  {
    title:
      "College of Arts, Science, Education and Information Technology (CASEIT)",
    subtitles: [
      "Bachelor of Science in Information Technology (BSIT)",
      "Bachelor of Science in Computer Science (BSCS)",
    ],
    image: "./images/Tatsumaki.png",
  },
];

const Main = () => {
  return (
    <section className="bg-gradient-to-b from-[#FED607] via-white to-white">
      <div className="xl:px-24">
        <div className="xl:mx-56">
          <Carousel autoplay={true}>
            {carouselItems.map((item, index) => (
              <div
                key={index}
                className="relative px-12 md:px-28 lg:px-36px xl:px-56px mx-auto"
              >
                <div className="flex justify-end ">
                  <img
                    src={item.image}
                    alt={`image ${index + 1}`}
                    className="object-cover w-28 h-96 sm:w-auto sm:max-w-96 "
                  />
                  <div className="absolute inset-0 bg-transparent flex flex-col justify-center items-start md:max-w-xl ml-5 md:ml-16 p-8">
                    <Typography className="text-2xl font-bold text-[#136A39] text-[22px] font-[Roboto]">
                      {item.title}
                    </Typography>
                    {item.subtitles.map((subtitle, subIndex) => (
                      <Typography
                        key={subIndex}
                        className="text-lg text-[#136A39] text-[18px] font-[Roboto]"
                      >
                        {subtitle}
                      </Typography>
                    ))}
                    <Button className="mt-5 bg-[#136A39] text-[15px] font-[Roboto] text-white px-5 border-2 border-white hover:bg-transparent transition-colors duration-500 hover:text-[#136A39] hover:border-[#136A39]">
                      Enroll Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <hr
          className="h-6 border-t-2 border-[#136A39] mx-auto"
          style={{ width: "calc(100% - 88px)" }}
        ></hr>

        <div className="flex flex-col md:flex-row pl-4 pr-4 lg:pl-10 lg:pr-10 mb-5">
          <div className="flex-1 mb-5 ">
            <h4 className="text-[30px] font-[Poppins] leading-tight font-medium tracking-[-2px] text-[#212121] md:text-[42px] lg:text-[48px] xl:text-[54px] 2xl:text-[54px]">
              Transforming careers, Empowering professionals: Our commitment to
              excellence
            </h4>
          </div>
          <div className="flex-1 grow mb-5 2xl:ml-24 2xl:mr-48">
            <p className="text-[16px] font-[Poppins] font-light text-[#222222] md:text-[18px]">
              We continuously evolve as a respected and sought-after brand for
              academic programs that cater to working professionals. Our
              commitment to excellence is evident in our innovative and flexible
              approach to education, empowering students to succeed in their
              careers. We pride ourselves on providing knowledge, skills, and
              competencies that meet the evolving needs of industries and
              communities, transforming careers and creating meaningful
              contributions.
            </p>
          </div>
        </div>

        {/* Vision, Mission, Goals and Obj */}
        <div className="flex flex-col md:flex-row pl-4 pr-4 lg:pl-10 lg:pr-10 space-y-10 md:space-y-0">
          <div className="flex-1 flex flex-col pr-2">
            <div className="">
              <h4 className="text-[24px] font-[Poppins] leading-tight font-medium text-[#7A7A7A] mb-3">
                Our Vision
              </h4>
            </div>
            <div className=" grow">
              <p className="text-[15px] font-[Poppins] font-normal text-[#7A7A7A]">
                A 21st Century University transforming a global network of
                learners for enlightenment, leadership, and human service.
              </p>
            </div>
          </div>

          <div className="flex-1 flex flex-col pr-2">
            <div className="">
              <h4 className="text-[24px] font-[Poppins] font-medium text-[#7A7A7A]">
                Our Mission
              </h4>
            </div>
            <div className="grow">
              <p className="text-[15px] font-[Poppins] font-normal text-[#7A7A7A]">
                Aldersgate College was established to develop the power of
                reason, to liberate people from ignorance, penury, and
                hopelessness, and to empower them to commence their own journey
                for social and economic transformation and spiritual salvation.
              </p>
            </div>
          </div>

          <div className="flex-1 flex flex-col">
            <div className="">
              <h2 className="text-[24px] font-[Poppins] font-medium text-[#7A7A7A]">
                Goals and Objectives
              </h2>
            </div>
            <div className=" grow mb-10">
              <ul className="list-decimal ml-10 text-[#7A7A7A] font-normal text-[15px]">
                <li>
                  <p>
                    Educate individuals to think and act as ethical leaders who
                    are spiritually awakened morally upright and responsible
                    citizens in the global community.
                  </p>
                </li>
                <li>
                  <p>
                    Inculcate critical and innovative thinking, technological
                    fluency, multicultural skills, and responsible citizenship
                    within the global community.
                  </p>
                </li>
                <li>
                  <p>
                    Deliver affordable, flexible, and collaborative educational
                    programs using systems and resources that comply with
                    international standards of quality, professional licensure,
                    and practice.
                  </p>
                </li>
                <li>
                  <p>
                    Offer career pathways and migration channels through a
                    network of transnational institutions, professional guilds,
                    and accrediting agencies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Main;
