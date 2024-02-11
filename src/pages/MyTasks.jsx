import React from 'react'
import Search from '../components/MyTasks/Search'
import Notification from '../components/MyTasks/Notification'
import UserImage from '../components/MyTasks/UserImage'

const MyTasks = () => {
  return (
    <>
      <div className='max-w-[100%] mx-[20px] mt-[15px]'>
        {/* Top Area */}
        <div className='bg-[#ffffff] w-[100%] flex items-center justify-between rounded-[14px] h-[45px]'>
          <Search />
          <div className='flex gap-[30px] justify-center items-center mr-[30px]'>
            <Notification />
            <UserImage />
          </div>
        </div>
      </div>
    </>
  )
}

export default MyTasks