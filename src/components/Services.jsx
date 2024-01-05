import React from "react";
import Company1 from "../assets/company1.svg";
import Company2 from "../assets/company2.svg";
import Company3 from "../assets/company3.svg";
import Company4 from "../assets/company4.svg";
import Company5 from "../assets/company5.svg";
import Company6 from "../assets/company6.svg";
import Company7 from "../assets/company7.svg";
import Icon1 from "../assets/Icon1.svg";
import Icon2 from "../assets/Icon2.svg";
import Icon3 from "../assets/Icon3.svg";

function Services() {
  const companies = [
    Company1,
    Company2,
    Company3,
    Company4,
    Company5,
    Company6,
    Company7,
  ];
  const cards = [
    {
      title: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: Icon1,
    },
    {
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: Icon2,
    },
    {
      title: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: Icon3,
    },
  ];
  return (
    <div className="md:px-14 px-4 py-16 max-w-sreen-2xl mx-auto">
      <div className="text-center my-8">
        <h1 className="capitalize text-neutralGrey font-semibold text-4xl mb-2">
          our clients
        </h1>
        <p className="text-neutralGrey">
          We have been working with some Fortune 500+ clients
        </p>

        {/* company logo */}
        <div className="flex justify-around my-12 flex-wrap items-center gap-8">
          {companies.map((Company, index) => (
            <a href={`#company-${index + 1}`} key={index}>
              <img
                src={Company}
                alt={`Company ${index + 1}`}
                className="h-16 hover:text-red-500"
              />
            </a>
          ))}
        </div>
      </div>
      <div className="text-center my-8 md:w-1/2 mx-auto">
        <h1 className="capitalize text-neutralGrey font-semibold text-4xl mb-2">
          Manage your entire community in a single system
        </h1>
        <p className="text-neutralGrey">Who is Nextcent suitable for?</p>
      </div>
      {/* cards company */}
      <div className="mt-14 lg:flex-rows-3 md:flex-row md:flex-wrap md:w-11/12 mx-auto gap-12 flex ">
        {cards.map((item, index) => (
          <div key={index} className=" rounded-md text-center mx-auto px-4 py-8 md:w-[300px] mx-auto md:h-80 h-full flex flex-col justify-center items-center gap-2 m-12 bg-gray-100  transition-all duration-300 shadow hover:-translate-y-5 hover:border-indigo-700 hover:border-b-4 ">
              <div className="bg-[#e8f5e9] h-14 w-14 mb-4 mx-auto rounded-tl-3xl rounded-br-3xl">
                <a
                  className="flex justify-center"
                  href={`#`}
                >
                  <img className="ml-5" src={item.image} alt="img" />
                </a>
              </div>
              <h1 className="text-neutralGrey text-2xl font-semibold mb-2 px-2 ">
                {item.title}
              </h1>
              <p className="text-gray900 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
