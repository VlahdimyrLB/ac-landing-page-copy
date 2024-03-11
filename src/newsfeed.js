import React from "react";

const Items = [
  {
    id: 1,
    picture:
      "https://aldersgate.edu.ph/wp-content/uploads/2024/03/image-1024x1024.png",
    title:
      "SSC NEWS | ALDERSGATE COLLEGE INC. RANKS 6 AMONG PERFORMING INSTITUTIONS IN THE FEBRUARY 2024 CRIMINOLOGIST LICENSURE EXAMINATION IN REGION 2",
    content:
      "Aldersgate College Inc. is proud to announce that the February 2024 Criminologist Licensure Examination was one of the top-performing institutions with a passing rate of 74.19%. Congratulations to our new",
    date: "",
  },
  {
    id: 2,
    picture:
      "https://aldersgate.edu.ph/wp-content/uploads/2024/03/image-1024x1024.png",
    title:
      "SSC NEWS | ALDERSGATE COLLEGE INC. RANKS 6 AMONG PERFORMING INSTITUTIONS IN THE FEBRUARY 2024 CRIMINOLOGIST LICENSURE EXAMINATION IN REGION 2",
    content:
      "Aldersgate College Inc. is proud to announce that the February 2024 Criminologist Licensure Examination was one of the top-performing institutions with a passing rate of 74.19%. Congratulations to our new",
    date: "",
  },
  {
    id: 3,
    picture:
      "https://aldersgate.edu.ph/wp-content/uploads/2024/03/image-1024x1024.png",
    title:
      "SSC NEWS | ALDERSGATE COLLEGE INC. RANKS 6 AMONG PERFORMING INSTITUTIONS IN THE FEBRUARY 2024 CRIMINOLOGIST LICENSURE EXAMINATION IN REGION 2",
    content:
      "Aldersgate College Inc. is proud to announce that the February 2024 Criminologist Licensure Examination was one of the top-performing institutions with a passing rate of 74.19%. Congratulations to our new",
    date: "",
  },
  {
    id: 4,
    picture:
      "https://aldersgate.edu.ph/wp-content/uploads/2024/03/image-1024x1024.png",
    title:
      "SSC NEWS | ALDERSGATE COLLEGE INC. RANKS 6 AMONG PERFORMING INSTITUTIONS IN THE FEBRUARY 2024 CRIMINOLOGIST LICENSURE EXAMINATION IN REGION 2",
    content:
      "Aldersgate College Inc. dfdsf vsdvete rgrgrbgheee eeeeeee eeeeeeee eeeeee eeeee sbytrw4 is proud to announce that the February 2024 Criminologist Licensure Examination was one of the top-performing institutions with a passing rate of 74.19%. Congratulations to our new",
    date: "",
  },
];

const Newsfeed = () => {
  return (
    <section className="flex flex-col md:flex-row">
      <div className="flex flex-1 flex-col ">
        <div>
          <p className="text-align text-[33px] font-[Roboto] font-semibold text-[#136A39]">
            Our Most Recent Reports
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Items.map((item) => {
            const { picture, title, content, date, id } = item;
            return (
              <NewsfeedItems
                picture={picture}
                title={title}
                content={content}
                date={date}
                key={id}
              />
            );
          })}
        </div>
      </div>
      <div className="w-[400px]">
        <h2>basta dito yung lnkage</h2>
      </div>
    </section>
  );
};

const NewsfeedItems = (props) => {
  const { picture, title, content, date } = props;
  return (
    <div className="flex flex-col border border-1 rounded-md border-[#136A39]">
      <div className="object-contain">
        <a href="#">
          <img src={picture} alt={title} className="rounded-md"></img>
        </a>
      </div>
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
        <div>
          <a
            href="#"
            className="text-[#136A39] text-[12px] font-medium uppercase"
          >
            Read More »
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsfeed;
