import React from 'react'

function Navbar({isOpen, filter}) {
  return (
    <>
    <div className='my-4 h-[60px] rounded-lg bg-white flex items-center justify-center gap-4'>
      
        <img width="38" height="38" src="https://img.icons8.com/doodle/48/user.png" alt="user"/>
        <h1 className='text-lg'><b>Contact Application</b></h1>
    </div>
    <div className='flex'>
    <div className='relative flex items-center '>
    <img className='absolute ml-1' width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/search--v1.png" alt="search--v1"/>
        <input onChange={filter} type="text" className='w-[315px] h-10 bg-transparent border border-white rounded-md flex-grow pl-10 text-white'/>
    </div>
    <div>
    <img onClick={isOpen} className='ml-2 cursor-pointer' width="45" height="45" src="https://img.icons8.com/ios-filled/50/FFFFFF/add--v1.png" alt="add--v1" />
    </div>
    </div>
    </>
  )
}

export default Navbar