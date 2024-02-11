import React, { useState } from 'react'
import data from './SidebarData'
import { NavLink } from 'react-router-dom'

// Import assets
import logo from '../assets/logo.png'

const Sidebar = () => {
  const [showSubMenu , setShowSubMenu] = useState(false)

  let reveilSubMenu = () => {
    setShowSubMenu(!showSubMenu)
  }

  let hideSubMenu = () => {
    setShowSubMenu(false)
  }

  return (
    <div
      className={`
        tablet:w-[20%]
        bg-[#060c0c]
        pt-[45px]
    `}>
      <img src={logo} alt="Project Logo"  className='text-center mx-auto my-0 pb-[40px]'/>
      <ul className='flex flex-col gap-1 items-center justify-center z-50'>
        {
          data.map((item, index) => {
            if(item.title !== 'Reports'){
              return (
                <li key={item.id} className='w-[100%] pl-[10px] text-[15px] h-[40px] select-none' onClick={hideSubMenu}>
                  <NavLink 
                    to={item.url} 
                    className='w-[100%] h-[40px] flex items-center pl-[10px]'
                    style={({isActive}) => ({
                        borderLeft: isActive ? "4px solid #fcff47" : ""                  
                    })}
                  >
                    {item.icon}
                    <span className='ml-[15px]'>{item.title}</span>
                  </NavLink>
                </li>
              )
            }
            else{
              return (
                <React.Fragment key={item.id}>
                  <li className={`w-[100%] pl-[10px] text-[15px] h-[40px] cursor-pointer select-none`} onClick={reveilSubMenu}>
                    <NavLink 
                      to={item.url} 
                      className='w-[100%] h-[40px] flex items-center pl-[10px]'
                      style={({isActive}) => ({
                          borderLeft: isActive ? "4px solid #fcff47" : ""                  
                      })}
                    >
                      {item.icon}
                      <span className='ml-[15px]'>{item.title}</span>
                    </NavLink>
                  </li>
                  {
                    showSubMenu &&
                    item.sublinks.map((subItem, i) => {
                      return (
                        <React.Fragment key={subItem.id}>
                          <li className='w-[100%] pl-[40px] text-[15px] h-[40px] cursor-pointer select-none'>
                          <NavLink 
                            to={subItem.url} 
                            className='w-[100%] h-[40px] flex items-center pl-[10px]'
                            style={({isActive}) => ({
                                borderLeft: isActive ? "4px solid #fcff47" : ""                  
                            })}
                          >
                            {subItem.icon}
                            <span className='ml-[15px]'>{subItem.title}</span>
                          </NavLink>
                          </li>
                        </React.Fragment>
                      )
                    })
                  }
                </React.Fragment>
              )
            }
            
          })
        }
      </ul>
    </div>
  )
}

export default Sidebar