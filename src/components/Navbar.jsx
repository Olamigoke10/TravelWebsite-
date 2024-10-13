import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-20'>
        <div>
            <h1>BEACHES</h1>
        </div>

        <ul className='flex gap-2 justify-center items-center'>
            <li>Destinations</li>
            <li>Travel</li>
            <li>View</li>
            <li>Book</li>
        </ul>
        <div>

        </div>
    </div>
  )
}

export default Navbar
