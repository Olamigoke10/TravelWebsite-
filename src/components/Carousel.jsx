import React, {useState} from 'react'
import Borabora from "../assets/borabora.jpg"
import Borabora2 from "../assets/borabora2.jpg"
import Maldives from "../assets/maldives.jpg"
import Maldives2 from "../assets/maldives2.jpg"
import Keywest from "../assets/keywest.jpg"
import { BsArrow90DegLeft, BsArrow90DegRight } from 'react-icons/bs'


const sliderData = [
    {url: Borabora},
    {url: Borabora2},
    {url:Maldives},
    {url:Maldives2},
    {url:Keywest}
]
 

const Carousel = () => {
    const [slide, setSlide] = useState(0)
    const length = sliderData.length

    const prevSlide = () => {
        setSlide(slide === length -1 ? 0 : slide + 1)
    }
    const nextSlide = () => {
        setSlide(slide === 0 ? length - 1 : slide - 1)
    }
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
        <BsArrow90DegLeft  onClick={prevSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer left-8'/>
        <BsArrow90DegRight onClick={nextSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer right-8'/>
        {sliderData.map((item, index) =>
        <div className={index == slide ? 'opacity-100': 'opacity-0'}>
            {index == slide && <img src={item.url} alt='/' className='w-full rounded-md'/>}
        </div>
        )}
    </div>
  )
}

export default Carousel
