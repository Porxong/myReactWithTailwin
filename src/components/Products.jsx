import React from "react";
import Panaproducts from "../assets/panaproducts.svg";
import Image9 from "../assets/image 9.svg";
import company1 from "../assets/company1.svg";
import company2 from "../assets/company2.svg";
import company3 from "../assets/company3.svg";
import company4 from "../assets/company4.svg";
import company5 from "../assets/company5.svg";
import company6 from "../assets/company6.svg";
import company7 from "../assets/company7.svg";

//react icon import

import { GrLinkNext } from "react-icons/gr";

function Products() {

  const company = [
    company1,
    company2,
    company3,
    company4,
    company5,
    company6,
    company7,
  ];
  return (
    <div className="">
      {/* about text */}
      <div className=" px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="">
            <img src={Panaproducts} alt="img" />
          </div>
          <div className="md:w-3/5 mx-auto pb-8 ">
            <h2 className="text-4xl text-neutralGrey font-semibold mb-4 md:w-4/5">
              How to design your site footer like we did
            </h2>
            <p className="md:w-3/4 text-neutralGrey mb-8 ">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
            <button className="btn-primary">learn more</button>
          </div>
        </div>
      </div>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 ">
          <div className="md:w-2/6 mx-auto items-center flex justify-center ">
            <img src={Image9} alt="" className="" />
          </div>
          <div className="md:w-11/12">
            <p className="md:w-4/5 text-sm text-neutralGrey mb-8 leading-7 ">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <h5 className="capitalize text-brandPrimary font-semibold mb-2">
              tim smith
            </h5>
            <p className="mb-2 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores{" "}
            </p>
              <div className="flex flex-wrap items-center justify-around gap-8   sm:flex-rows sm:flex-wrap">
           
            {company.map((item,index)=>(
              <img key={index} src={item} alt={`company ${index+1}`} />
              ))}

              <a
                href="#"
                className="flex text-brandPrimary font-semibold mt-4 sm:mt-0"
                >
                Meet all customers
                <span className="text-brandPrimary pt-1.5 mx-4">
                  <GrLinkNext />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
