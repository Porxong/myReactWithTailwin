import React from "react";
import Logo from "../assets/Iconlogofooter.svg";
import Search from "../assets/Vectorsearch.svg";

// import react icon
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoWechat } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa";

function Footer() {
  const company = [
    "about us",
    "blog",
    "contact us",
    "princing",
    "testimonials",
  ];

  const support = [
    "help center",
    "terms of service",
    "legal",
    "privacy policy",
    "status",
  ];
  return (
    <div className="bg-[#263238] flex  py-8 flex-col lg:flex-row">
      <div className="lg:w-2/6 w-auto px-6 py-8 flex justify-center mx-auto items-center">
        <div className="md:w-11/12 p-2 flex flex-col">
          <a
            href="/"
            className="text-2xl font-semibold flex items-center space-x-3 mb-6"
          >
            <img
              className="w-10 inline-block items-center"
              src={Logo}
              alt="logo"
            />
            <span className="uppercase text-white hover:shadow-md hover:border-b-2 hover: border-cyan-300 rounded-md">nexcent</span>
          </a>
          <p className="capitalize text-sm font-semibold text-white-900 pb-4 text-neutralGrey">
            copyright C 2024 landify UI Kit. <br /> all rights reserved
          </p>
          <div className="flex gap-4">
            <a
              className="bg-gray-600 p-1 rounded-xl hover:bg-indigo-300"
              href=""
            >
              <span>
                <FaFacebook />
              </span>
            </a>
            <a
              className="bg-gray-600 p-1 rounded-xl hover:bg-indigo-300"
              href=""
            >
              <span>
                <FaWhatsapp />
              </span>
            </a>
            <a
              className="bg-gray-600 p-1 rounded-xl hover:bg-indigo-300"
              href=""
            >
              <span>
                <IoLogoWechat />
              </span>
            </a>
            <a
              className="bg-gray-600 p-1 rounded-xl hover:bg-indigo-300"
              href=""
            >
              <span>
                <FaTiktok />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className=" flex lg:w-2/6 w-10/12 p-4 mx-auto items-center justify-center gap-12">
        <div className="lg:w-1/2 px-2 pt-14 text-white">
          <h1 className="mb-3 px-2 text-xl font-bold text-gray-200">Company</h1>
          <div className="flex flex-col justify-center ">
            {company.map((item, index) => (
              <a
                className="py-1 text-sm hover:bg-gray-400 hover:border-l-2 border-cyan-300 rounded-md px-2"
                key={index}
                href=""
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 px-2 pt-14 text-white">
          <h1 className="mb-3 px-2 text-xl font-bold text-gray-200">Support</h1>
          <div className="flex flex-col justify-center ">
            {support.map((item, index) => (
              <a
                className="py-1 text-sm hover:bg-gray-400 hover:border-l-2 border-cyan-300 rounded-md px-2"
                key={index}
                href=""
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className=" flex lg:w-2/6 p-4 mx-auto justify-center">
        <div className="px-2 pt-14 text-white ">
          <h1 className="mb-3 px-2 text-xl font-bold text-gray-200">
            Stay up to date
          </h1>
          <div className="flex flex-col justify-center ">
            <div className="flex">
              <input
                className="text-black font-semibold border border-white hover:border-brandPrimary rounded-lg h-8  "
                type="email"
                placeholder="Email"
              />
              <img className="-ml-6 text-black" src={Search} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
