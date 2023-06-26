import React from 'react'
import BoraBora from '../assets/borabora.jpg'
import BoraBora2 from '../assets/borabora2.jpg'
import Maldives from '../assets/maldives.jpg'
import Maldives2 from '../assets/maldives2.jpg'
import KeyWest from '../assets/keywest.jpg'
import Maldives3 from '../assets/maldives3.jpg'
import SelectsCard from './SelectsCard'


const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto p-4 py-16 grid grid-cols-2 lg:grid-cols-3 gap-3'>
        <SelectsCard bg={BoraBora} text='Bora Bora'/>
        <SelectsCard bg={BoraBora2} text='Bora Bora 2'/>
        <SelectsCard bg={Maldives} text='Maldives'/>
        <SelectsCard bg={Maldives2} text='Maldives 2'/>
        <SelectsCard bg={KeyWest} text='KeyWest'/>
        <SelectsCard bg={Maldives3} text='Maldives 3'/>

        
      
    </div>
  )
}

export default Selects
