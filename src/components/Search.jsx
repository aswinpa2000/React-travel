import React from 'react'
import {RiCustomerService2Full, RiCustomerService2Fill} from 'react-icons/ri'
import {MdOutlineTravelExplore} from 'react-icons/md'
const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
        <div className='lg:col-span-2 flex flex-col justify-evenly'>
            <div>
                <h2>LUXURY INCLUDED VACATIONS FOR THE TWO PEOPLE</h2>
                <p className='my-4'>Come experience the very pinacle of luxury Caribean all-inclusive vacations for couples of BEACHES Resorts. Our luxury beach resorts,set along the most gorgeous tropical settings and exquisite beaches in Saint Lucia ,Jamaica ,Antigua, The Bahamas,Grenada ,Barbados and Curacao,feature unlimited gourmet dining, unique bars serving premium liquors and wines , and every land and water sports, including complimentary green fees at our golf resorts and certified scuba diving at most resorts. If you are planning a wedding , BEACHES is the leader in carribean destination weddings and honeymoon packages.</p>
            </div>
            <div className='grid sm:grid-cols-2 gap-8 py-4 my-8'>
            <div className='flex flex-col lg:flex-row items-center text-center'>
                <button><RiCustomerService2Fill size={50}/></button>
                <div>
                    <h3 className='py-2'>LEADING SERVICES</h3>
                    <p className='py-1'>ALL-INCLUSIVE COMPANY 20 YEARS IN-A-ROW</p>
                </div>
                </div>

                <div className='flex flex-col lg:flex-row items-center text-center'>
                <button><MdOutlineTravelExplore size={50}/></button>
                <div>
                    <h3 className='py-2'>LEADING SERVICES</h3>
                    <p className='py-1'>ALL-INCLUSIVE COMPANY 20 YEARS IN-A-ROW</p>
                </div>
                </div>
            </div>
        </div>
        <div>
        <div className='border text-center '>
            <p className='pt-2'>GET AN ADDITIONAL 10% OFF</p>
            <p className='py-4'>12 HOURS LEFT</p>
            <p className='bg-gray-800 text-gray-200 py-2 rounded'>BOOK NOW AND SAFE</p>
            </div>
            <form className='w-full '>
                <div className='flex flex-col my-2'>
                    <label>Destination</label>
                    <select className='border rounded-md py-2'>
                        <option>Grand Antigua</option>
                        <option>KeyWest</option>
                        <option>Maldives</option>
                        <option>Cozunel</option>
                    </select>
                </div>
                <div className='flex flex-col my-4'>
                    <label>Check-in</label>
                    <input className='border rounded-md py-2' type='date'/>
                </div>
                <div  className='flex flex-col my-2'>
                <label>Check-out</label>
                    <input className='border rounded-md py-2' type='date'/>
                </div>
                <button className='w-full my-4'>Rates & Availabilities</button>
            </form>
        </div>
    </div>
  )
}

export default Search 