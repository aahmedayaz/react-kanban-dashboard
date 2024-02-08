import React from 'react'
import logo from '../assets/logo.png'
import data from './SidebarData'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div
      className='
        tablet:w-[20%] 
        bg-[#1b1d20]
        rounded-[25px]
    '>
      <img src={logo} alt=""  className='w-[120px] text-center mx-auto my-0'/>
      <ul className='flex flex-col gap-1 items-center justify-center z-50'>
        {
          data.map((item, index) => {
            return (
              <li key={index} className='w-[100%] pl-[20px] text-[15px] h-[40px] border-l border-l-[#477eff]'>
                <Link to={item.url} className='w-[100%] h-[40px] flex items-center '>
                  {item.icon}
                  <span className='ml-[15px]'>{item.title}</span>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Sidebar