import React, {useState} from 'react'
import { IoIosPerson } from 'react-icons/io'
import { BiSearch } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { FaFacebook, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa6'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [logo, setLogo] = useState(false)
    const handlenav = () => {
        setNav(!nav)
        setLogo(!logo)
    }

  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
        <div>
            <h1 onClick={handlenav} className={logo ? "hidden" : "block"}>BEACHES</h1>
        </div>

        <ul className='hidden md:flex'>
            <li>Destinations</li>
            <li>Travel</li>
            <li>View</li>
            <li>Book</li>
        </ul>

        <div className='hidden md:flex'>
            <IoIosPerson className='mr-5' size={20} />
            <BiSearch  size={20}/>
        </div>

    {/* Hambuger */}
        <div  onClick={handlenav} className='md:hidden z-10'>
            {nav ?  <AiOutlineClose className='text-black' size={20}/> : <HiOutlineMenuAlt4  size={20}/> }
        </div>

    {/* Mobile Menu dropdown */}
        <div onClick={handlenav} className= {nav ? 'absolute text-black left-0 top-0 bg-gray-100/90 w-full px-4 py-7 flex flex-col' : 'absolute left-[-100%] top-0 bg-gray-100/90 w-full px-4 py-7 flex flex-col'}>
            <h1>BEACHES.</h1>
            <ul>
            <li className='border-b'>Destinations</li>
            <li className='border-b'>Travel</li>
            <li className='border-b'>View</li>
            <li className='border-b'>Book</li>

            <div className='flex flex-col'>
                <button className='my-6'>Search</button>
                <button>Account</button>  
            </div>
            <div className='flex justify-between mt-5'>
                <FaFacebook className='icon'/>
                <FaTwitter className='icon'/>
                <FaInstagram className='icon'/>
                <FaPinterest className='icon'/>
                <FaYoutube className='icon'/>
            </div>
            </ul>
        </div>

    </div>
  )
}

export default Navbar
