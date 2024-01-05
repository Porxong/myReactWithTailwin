import React from 'react'
import { Carousel } from 'flowbite-react';
import Banner1 from '../assets/Illustration.svg';
import Banner2 from '../assets/Frame35.svg';



function Home() {
  const carouselItems = [
    {
      image: Banner1,
      alt: 'Banner 1 - Description for Banner 1',
      title: 'Learn and Earn in 4 years',
      description: 'Unique content for Banner 1 slide. Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    },
    {
      image: Banner2,
      alt: 'Banner 2 - Description for Banner 2',
      title: 'Another Catchy Title',
      description: 'Different content for Banner 2 slide. Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    },
    // Add more items with different content as needed
  ];

  return (
    <div className='bg-neutralSilver'>
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel className='w-full mx-auto'>
        {carouselItems.map((item, index) => (
        <div key={index} className="my-20 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          <div className="w-auto">
            <img src={item.image} alt={item.alt} width="" height="" className='h-96'/>
          </div>

          {/* hero text */}
          <div className="md:w-1/2 capitalize">
            <h1 className="text-neutralDGrey text-5xl font-semibold mb-4 md:w-3/4 leading-snug">learn and earn <span className="text-brandPrimary leading-snug">{item.title}</span></h1>
            <p className="text-neutralGrey text-base mb-8">{item.description}</p>
            <button className="btn-primary">register</button>
          </div>
        </div>
         ))}
      </Carousel>
        </div>
    </div>
  )
}

export default Home