import React from 'react'
import Sidebar from '../components/Sidebar'

const RootLayout = ({children}) => {
  return (
    <>
        <div 
          className='
          w-[100%] 
          h-screen
          bg-gradient-to-r
          from-[rgba(9,29,20,1)]
          to-[rgba(1,21,19,1)]
          text-white
          flex 
          overflow-hidden
        '>
            <Sidebar/>
            <main 
              className={`
                w-[80%]
                bg-[#081213]
            `}>
              {children}
            </main>
        </div>
    </>
  )
}

export default RootLayout