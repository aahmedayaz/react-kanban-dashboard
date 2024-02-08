import React from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";


const Notification = () => {
  return (
    <div className='relative cursor-pointer'>
      <div className='absolute top-[-50%] right-[-50%] w-[20px] h-[20px] rounded-[50%] bg-[#fd413c] text-white text-sm flex justify-center items-center'>3</div>
      <IoIosNotificationsOutline className='text-2xl'/>
    </div>
  )
}

export default Notification