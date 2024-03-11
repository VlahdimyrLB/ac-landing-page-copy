import React from "react";

const Items = [
  {
    picture:
      "https://aldersgate.edu.ph/wp-content/uploads/2024/03/image-1024x1024.png",
    title:
      "SSC NEWS | ALDERSGATE COLLEGE INC. RANKS 6 AMONG PERFORMING INSTITUTIONS IN THE FEBRUARY 2024 CRIMINOLOGIST LICENSURE EXAMINATION IN REGION 2",
    content:
      "Aldersgate College Inc. is proud to announce that the February 2024 Criminologist Licensure Examination was one of the top-performing institutions with a passing rate of 74.19%. Congratulations to our new",
    date: "March 01, 2024",
    user: "ADMIN",
  },
  {
    picture:
      "https://aldersgate.edu.ph/wp-content/uploads/2024/03/image-1024x1024.png",
    title:
      "SSC NEWS | ALDERSGATE COLLEGE INC. RANKS 6 AMONG PERFORMING INSTITUTIONS IN THE FEBRUARY 2024 CRIMINOLOGIST LICENSURE EXAMINATION IN REGION 2",
    content:
      "Aldersgate College Inc. is proud to announce that the February 2024 Criminologist Licensure Examination was one of the top-performing institutions with a passing rate of 74.19%. Congratulations to our new",
    date: "February 12, 2024",
    user: "THE PARAGON",
  },
  {
    picture:
      "https://aldersgate.edu.ph/wp-content/uploads/2024/03/image-1024x1024.png",
    title:
      "SSC NEWS | ALDERSGATE COLLEGE INC. RANKS 6 AMONG PERFORMING INSTITUTIONS IN THE FEBRUARY 2024 CRIMINOLOGIST LICENSURE EXAMINATION IN REGION 2",
    content:
      "Aldersgate College Inc. is proud to announce that the February 2024 Criminologist Licensure Examination was one of the top-performing institutions with a passing rate of 74.19%. Congratulations to our new",
    date: "March 01, 2024",
    user: "ADMIN",
  },
  {
    picture:
      "https://aldersgate.edu.ph/wp-content/uploads/2024/03/image-1024x1024.png",
    title:
      "SSC NEWS | ALDERSGATE COLLEGE INC. RANKS 6 AMONG PERFORMING INSTITUTIONS IN THE FEBRUARY 2024 CRIMINOLOGIST LICENSURE EXAMINATION IN REGION 2",
    content:
      "Aldersgate College Inc. is proud to announce that the February 2024 Criminologist Licensure Examination was one of the top-performing institutions with a passing rate of 74.19%. Congratulations to our new",
    date: "February 12, 2024",
    user: "THE PARAGON",
  },
  {
    picture:
      "https://aldersgate.edu.ph/wp-content/uploads/2024/03/image-1024x1024.png",
    title:
      "SSC NEWS | ALDERSGATE COLLEGE INC. RANKS 6 AMONG PERFORMING INSTITUTIONS IN THE FEBRUARY 2024 CRIMINOLOGIST LICENSURE EXAMINATION IN REGION 2",
    content:
      "Aldersgate College Inc. is proud to announce that the February 2024 Criminologist Licensure Examination was one of the top-performing institutions with a passing rate of 74.19%. Congratulations to our new",
    date: "March 01, 2024",
    user: "ADMIN",
  },
  {
    picture:
      "https://aldersgate.edu.ph/wp-content/uploads/2024/03/image-1024x1024.png",
    title:
      "SSC NEWS | ALDERSGATE COLLEGE INC. RANKS 6 AMONG PERFORMING INSTITUTIONS IN THE FEBRUARY 2024 CRIMINOLOGIST LICENSURE EXAMINATION IN REGION 2",
    content:
      "Aldersgate College Inc. is proud to announce that the February 2024 Criminologist Licensure Examination was one of the top-performing institutions with a passing rate of 74.19%. Congratulations to our new",
    date: "February 12, 2024",
    user: "THE PARAGON",
  },
  {
    picture:
      "https://aldersgate.edu.ph/wp-content/uploads/2024/03/image-1024x1024.png",
    title:
      "SSC NEWS | ALDERSGATE COLLEGE INC. RANKS 6 AMONG PERFORMING INSTITUTIONS IN THE FEBRUARY 2024 CRIMINOLOGIST LICENSURE EXAMINATION IN REGION 2",
    content:
      "Aldersgate College Inc. is proud to announce that the February 2024 Criminologist Licensure Examination was one of the top-performing institutions with a passing rate of 74.19%. Congratulations to our new",
    date: "March 01, 2024",
    user: "ADMIN",
  },
  {
    picture:
      "https://aldersgate.edu.ph/wp-content/uploads/2024/03/image-1024x1024.png",
    title:
      "SSC NEWS | ALDERSGATE COLLEGE INC. RANKS 6 AMONG PERFORMING INSTITUTIONS IN THE FEBRUARY 2024 CRIMINOLOGIST LICENSURE EXAMINATION IN REGION 2",
    content:
      "Aldersgate College Inc. is proud to announce that the February 2024 Criminologist Licensure Examination was one of the top-performing institutions with a passing rate of 74.19%. Congratulations to our new",
    date: "February 12, 2024",
    user: "THE PARAGON",
  },
];

const Newsfeed = () => {
  return (
    <section className="flex flex-col 2xl:flex-row mx-5 ">
      <div className="flex flex-1 flex-col ">
        <div>
          <h3 className=" text-[33px] font-[Roboto] font-semibold text-[#136A39] mb-10">
            Our Most Recent
            <span className="text-[#FED607]"> Updates</span>
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Items.map((item) => {
            const { index, picture, title, content, date, user } = item;
            return (
              <NewsfeedItems
                key={index}
                picture={picture}
                title={title}
                content={content}
                date={date}
                user={user}
              />
            );
          })}
        </div>
      </div>
      <div className="w-[400px] relative">
        <h2 className="sticky top-24">basta dito yung lnkage</h2>
      </div>
    </section>
  );
};

const NewsfeedItems = (props) => {
  const { picture, title, content, date, user } = props;
  return (
    <div className="flex flex-col border border-1 rounded-md border-[#136A39] ">
      <a href="# opacity-80 ">
        <div className="relative overflow-hidden h-[140px] mb-3">
          <img
            src={picture}
            alt={title}
            className="object-cover object-center w-full h-[100%]"
          />
        </div>
      </a>

      <div className="flex flex-col grow p-3 mb-3 mt-0">
        <a href="#">
          <h2 className="text-[#136A39] text-[16px] font-[Roboto] font-semibold uppercase">
            {title}
          </h2>
        </a>
        <div className="grow">
          <p className="text-[#777] text-[14px] font-[Roboto] leading-6">
            {content}
          </p>
        </div>
        <div className="mt-3">
          <a
            href="#"
            className="text-[#136A39] text-[12px] font-medium uppercase "
          >
            Read More »
          </a>
        </div>
      </div>
      <div className="border-t-[1px] border-[#136A39]">
        <p className="uppercase text-[10px] text-[#136A39] font-normal font-[Roboto] p-2 space-0 tracking-normal leading-5">
          {user} &bull;
          <span> {date}</span>
        </p>
      </div>
    </div>
  );
};

export default Newsfeed;
