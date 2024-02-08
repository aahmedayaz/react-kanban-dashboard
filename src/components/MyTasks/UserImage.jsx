import React from 'react'
import ProfileImg from '../../assets/profile-img.png'

const UserImage = () => {
  return (
    <img src={ProfileImg} alt="Profile" className='w-[45px] h-[45px] rounded-[50%] border border-slate-950 cursor-pointer' />
  )
}

export default UserImage