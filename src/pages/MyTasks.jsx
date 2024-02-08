import React from 'react'
import Search from '../components/MyTasks/Search'
import Notification from '../components/MyTasks/Notification'
import UserImage from '../components/MyTasks/UserImage'

const MyTasks = () => {
  return (
    <>
      <div className='max-w-[100%] mx-[20px]'>
        {/* Top Area */}
        <div className='bg-[#1b1d20] w-[100%] flex items-center justify-between rounded-[14px] h-[55px]'>
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