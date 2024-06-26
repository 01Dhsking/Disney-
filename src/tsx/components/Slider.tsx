import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useRef, useState } from 'react';
import CallApi from '../Service/CallApi';

interface Movie {
    backdrop_path: string;
    name?: string;
    title?: string;
}

const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/original";
const widthSlider = window.innerWidth;

export const Slider: React.FC = () => {

    const [moviesList, setMoviesList] = useState<Movie[]>([]);

    const imageSliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        CallApi.getVideos.then(resp => {
            console.log(resp.data.results);
            setMoviesList(resp.data.results);
        })
    })

    const sliderRight = (el: HTMLDivElement) => {
        el.scrollLeft +=widthSlider - 110
    }
    const sliderLeft = (el: HTMLDivElement) => {
        el.scrollLeft -=widthSlider - 110
    }


  return (
    <>
        <div className='relative z-[60]'>
            <IoIosArrowBack onClick={() => imageSliderRef.current && sliderLeft(imageSliderRef.current)} 
            className='hidden md:block text-white text-[25px]
            absolute mx-8 mt-[250px] cursor-pointer z-50'/>
            <IoIosArrowForward onClick={() => imageSliderRef.current && sliderRight(imageSliderRef.current)}
             className='hidden md:block text-white text-[25px]
            absolute mx-8 mt-[250px] cursor-pointer z-50 right-0'/>
            <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hidescroll smooth' ref={imageSliderRef}>
                {moviesList.map((item, index) => (
                    <div key={index} className='relative min-w-full md:h-[500px] mr-5 rounded-md
                     hover:border-[4px] border-gray-200 cursor-pointer transition-all'>
                        <img className='w-full h-full object-cover object-left-top'
                         src={`${IMAGE_BASE_URL}${item.backdrop_path}`} alt="image film" />
                        <h2 className='font-semibold text-white text-4xl absolute bottom-[2rem] left-[2rem]'>
                            {item.name ? item.name : item.title}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}
