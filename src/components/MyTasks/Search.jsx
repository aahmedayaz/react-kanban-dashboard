import React from 'react'
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <>
        <div className='flex items-center justify-start w-[100%] pl-[20px]'>
            <FaSearch />
            <input type="text" className='w-[60%] py-[5px] px-[15px] bg-[#1b1d20] focus:outline-none' placeholder='Search'/>
        </div>
    </>
  )
}

export default Search