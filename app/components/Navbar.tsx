import React from 'react'

function Navbar() {
  return (
    <>
      <nav className="fixed w-full z-50 backdrop-blur-lg   border-b-gray-700 border-b-[0.1px]">
        <div className="flex justify-center h-[72px] w-2/5 items-center lg:px-20 px-3 shadow-sm">
          <div className='flex items-center font-semibold gap-2'>
            <img src="/icon.png" alt="" className='w-9 h-9 	'/>
            <span className='leading-10 text-xl'>Alex</span>
          </div>

          <div>
            
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar