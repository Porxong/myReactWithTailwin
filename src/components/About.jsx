import React from "react";
import AboutImage from "../assets/aboutimage.svg";
import IconAbout1 from "../assets/iconAbout1.svg";
import IconAbout2 from "../assets/iconAbout2.svg";
import IconAbout3 from "../assets/iconAbout3.svg";
import IconAbout4 from "../assets/iconAbout4.svg";

function About() {
  const company = [
    {
      img: IconAbout1,
      title: "members",
      number: 2245341,
    },
    {
      img: IconAbout2,
      title: "clubs",
      number: 46328,
    },
    {
      img: IconAbout3,
      title: "event bookings",
      number: 828867,
    },
    {
      img: IconAbout4,
      title: "payments",
      number: 1926436,
    },
  ];

  return (
    <div className="">
      {/* about text */}
      <div className=" px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="">
            <img src={AboutImage} alt="img" />
          </div>
          <div className="md:w-3/5 mx-auto pb-8 ">
            <h2 className="text-4xl text-neutralGrey font-semibold mb-4 md:w-4/5">
              The nseen of spending three years at Pixeigrade
            </h2>
            <p className="md:w-3/4 text-neutralGrey mb-8 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas
              aliquam quo atque, ullam perspiciatis tempora, numquam, minima nam
              assumenda distinctio ad qui necessitatibus repellendus culpa quis
              incidunt facere saepe.
            </p>
            <button className="btn-primary">learn more</button>
          </div>
        </div>
      </div>

      {/* company stats */}
      <div className="bg-neutralSilver px-4 py-16 lg:px-14 max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralGrey font-semibold mb-4 md:w-2/3">
              Helping a local{" "}
              <span className="text-brandPrimary">
                business reinvent itself
              </span>
            </h2>
            <p className="md:w-3/4 text-neutralGrey mb-8 ">
              We reached here with our hard work and dedication
            </p>
          </div>

          {/* stats */}
          <div className="md:w-1/2 mx-auto sm:flex-row flex flex-col flex  justify-around gap-12 grid sm:grid-cols-2 grid-cols-1 ">
              {company.map((item, index) => (
            <div key={index} className="space-y-8">
                <div  className="flex items-center gap-4">
                    <img src={item.img} alt={`Icon about ${index}`} />
                    <div className="">
                      <h4 className="text-2xl text-neutralDGrey font-semibold">
                        {item.number.toLocaleString()}
                      </h4>
                      <p className="capitalize">{item.title}</p>
                    </div>
                </div>
            </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
