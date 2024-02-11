import React from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";


const Notification = () => {
  return (
    <div className='relative cursor-pointer'>
      <div className='absolute top-[-40%] right-[-40%] w-[17px] h-[17px] rounded-[50%] bg-[#fd413c] text-white text-[12px] flex justify-center items-center'>3</div>
      <IoIosNotificationsOutline className='text-2xl text-black'/>
    </div>
  )
}

export default Notification