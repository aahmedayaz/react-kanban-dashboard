import React from 'react'
import Sidebar from '../components/Sidebar'

const RootLayout = ({children}) => {
  return (
    <>
        <div 
          className='
          w-[100%] 
          h-screen 
          bg-[#121212] 
          text-white
          flex 
          p-[15px]
          overflow-hidden
        '>
            <Sidebar />
            <main 
              className='
                w-[80%]
            '>
              {children}
            </main>
        </div>
    </>
  )
}

export default RootLayout