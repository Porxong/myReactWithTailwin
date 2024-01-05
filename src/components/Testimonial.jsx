import React from 'react';
import NextIcon from "../assets/Righticoncardmarket.svg";
import CardImage1 from '../assets/cardImage1.svg';
import CardImage2 from '../assets/cardImage2.svg';
import CardImage3 from '../assets/cardImage3.svg';

function Testimonial() {
 const card = [
     {
        image: CardImage1,
        detail:'Creating Streamlined Safeguarding Processes with OneRen'
    },
     {
        image: CardImage2,
        detail:'What are your safeguarding responsibilities and how can you manage them?'
    },
     {
        image: CardImage3,
        detail:'Revamping the Membership Model with Triathlon Australia'
    },
 ]

  return (
    <>
    <div className="md:px-14 px-4 py-16 max-w-sreen-2xl mx-auto">
      <div className="text-center my-8">
        <h1 className="capitalize text-neutralGrey font-semibold text-4xl mb-2">
        Caring is the new marketing
        </h1>

        <p className="text-neutralGrey px-8 lg:px-28 md:px-20 sm:px-14">
        The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​
        </p>
        {/* card */}
        <div className="flex flex-wrap justify-center gap-12">

            {card.map((item,index) => (
                <div key={index} className=" h-auto w-72 text-center p-2 flex flex-col justify-center items-center">
                <div className=" w-64 h-56 flex justify-center">
                    <img className='' src={item.image} alt={`cardImage ${index + 1}`} />
                </div>
                <div className="bg-gray-100 w-56 rounded-md py-4 -mt-20 px-1 text-sm font-semibold text-neutralGrey flex flex-col justify-center shadow-xl ">
                    <h1>{item.detail}</h1>
                    <div className=" flex justify-center">
                        <button className='text-brandPrimary flex items-center '>Readmore <img src={NextIcon} alt="" /></button>
                    </div>
                </div>
            </div>
                ))}
        </div>
      </div>
    </div>

    <div className="bg-neutralSilver m-4 py-8 px-14 flex justify-center">
    <div className="text-center my-8 md:w-2/3 ">
        <h1 className="capitalize text-grey900 font-semibold text-4xl mb-6">
        Pellentesque suscipit fringilla libero eu.
        </h1>
        <button className='btn-primary'>get a demo </button>
    </div>
    </div>
    </>
  )
}

export default Testimonial