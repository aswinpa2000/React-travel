import React, { useState } from 'react'
import {BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs'

const sliderData = [
    {
        url : 'https://images.unsplash.com/photo-1615880482339-3e2f13ee1305?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2hlcyUyMGFuZCUyMHRvdXJpc3QlMjBzcG90c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        url : 'https://images.unsplash.com/photo-1615880325038-4140d19e0bf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmVhY2hlcyUyMGFuZCUyMHRvdXJpc3QlMjBzcG90c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        url : 'https://images.unsplash.com/photo-1615880325185-c794f749b92c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYWNoZXMlMjBhbmQlMjB0b3VyaXN0JTIwc3BvdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
    }
];

const Carousel = () => {
    const [slide,setSlide] = useState(0);
    const length = sliderData.length;

    const prevSlide = () =>{
        setSlide(slide === length - 1 ? 0 : slide + 1)
    }

    const nextSlide = () =>{
        setSlide(slide === 0 ? length - 1 : slide - 1)
    }
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
      <BsArrowLeftSquareFill onClick={prevSlide} style={{color:'blueviolet'}} className='absolute top-[50%] text-3xl text-white cursor-pointer left-8'/>
      <BsArrowRightSquareFill onClick={nextSlide} style={{color:'blueviolet'}} className='absolute top-[50%] text-3xl text-white cursor-pointer right-8'/>

      { sliderData.map((item,index) =>(
        <div className={index === slide ? 'opacity-100' : 'opacity-0'}>
            {index === slide && (<img className='w-full rounded-md' src={item.url}/>)}
        </div>
      ))}
      
    </div>
  )
}

export default Carousel
