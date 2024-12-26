import React from 'react';

function Navbar() {
  return (
    <>
      <nav className="fixed w-full z-50 backdrop-blur-lg  ">
        <div className="flex justify-between items-center h-[72px] w-full lg:w-3/4 mx-auto px-6 lg:px-20 shadow-sm">
          {/* Logo Section */}
          <div className="flex items-center font-semibold gap-2">
            <img src="/icon.png" alt="Logo" className="w-9 h-9" />
            <span className="leading-10 text-xl">Alex</span>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-6 text-gray-400 ">
            <div className='hover:text-white hover:pointer'>Home</div>
            <div className='hover:text-white'>Feature</div>
            <div className='hover:text-white'>Docs</div>
            <div className='hover:text-white'>Pricing</div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
