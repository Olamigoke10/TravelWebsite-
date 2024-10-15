import React from 'react'
import { RiCustomerService2Fill } from 'react-icons/ri'
import { MdOutlineTravelExplore } from 'react-icons/md'

const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-3 px-4 py-16'>
        <div className='lg:col-span-2 flex flex-col justify-evenly'>
            <div>
                <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
                <p className='py-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias pariatur dolorem dicta vitae minus, necessitatibus quaerat. 
                    Architecto provident quos itaque labore eum optio quam illum? Molestiae quibusdam enim aperiam nam odit dolores sed praesentium at porro ab repellat quo esse tenetur adipisci reiciendis,
                    perferendis a quia ipsa expedita suscipit quod sit quisquam alias harum. Voluptatem molestiae pariatur aliquid, ut aut iure ducimus harum voluptatum quibusdam
                    temporibus. Optio pariatur animi placeat veritatis quibusdam, dolores itaque aliquid eius laudantium, minima debitis iste quia, beatae quasi quo unde quidem sunt.
                    Mollitia id perspiciatis eaque iusto quas delectus neque! Non error amet pariatur reiciendis.
                    </p>
            </div>
            <div className='grid sm:grid-cols-2 gap-8 py-4'>
                <div className='flex flex-col lg:flex-row items-center text-center'>
                    <button> 
                        <RiCustomerService2Fill  size={50}/>
                        </button>
                        <div>
                            <h3 className='py-2'>LEADING SERVICE</h3>
                            <p className='py-1'>ALL INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                        </div>
                    </div>
                <div className='flex flex-col lg:flex-row items-center text-center'>
                    <button> 
                        <MdOutlineTravelExplore  size={50}/>
                        </button>
                        <div>
                            <h3 className='py-2'>LEADING SERVICE</h3>
                            <p className='py-1'>ALL INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                        </div>
                    </div>
            </div>
        </div>
        <div>
            <div className='border text-center'>
                <p className='pt-2'>GET AN ADDITIONAL 10% OFF</p>
                <p className='py-4'>12 HOURS LEFT</p>
                <p className='bg-gray-800 text-gray-200 py-2
                '>BOOK NOW AND SAVE</p>
            </div>
            <form action="" className='w-full'>
                <div className='flex flex-col my-2'>
                    <label>Destination</label>
                    <select className='border rounded-md p-2'>
                        <option>Paris</option>
                        <option>Key West</option>
                        <option>Maldives</option>
                        <option>Borabora</option>
                        <option>Jamiaca</option>2
                    </select>
                </div>
                <div className='flex flex-col my-2 py-2'>
                    <label>Check-In</label>
                    <input type="date"  className='border rounded-md p-2'/>
                </div>
                <div className='flex flex-col my-2'>
                <label>Check-Out</label>
                <input type="date" className='border rounded-md p-2' />
                </div>
                <button className='w-full my-4'>Rates & Availablities</button>
            </form>
        </div>
    </div>
  )
}

export default Search
