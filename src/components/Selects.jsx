import React from 'react'
import Borabora from "../assets/borabora.jpg"
import Borabora2 from "../assets/borabora2.jpg"
import Maldives from "../assets/maldives.jpg"
import Maldives2 from "../assets/maldives2.jpg"
import Keywest from "../assets/keywest.jpg"
import SelectCard from './SelectCard'

const Selects = () => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 max-w-[1240px] mx-auto px-4 py-16 gap-4'>
        <SelectCard bg={Borabora} text="Bora Bora"/>
        <SelectCard bg={Maldives} text="Nigeria"/>
        <SelectCard bg={Maldives2} text="Jamiaca"/>
        <SelectCard bg={Borabora2} text="Paris"/>
        <SelectCard bg={Keywest} text="London"/>
        <SelectCard bg={Borabora} text="Maldives"/>
    </div>
  )
}

export default Selects
