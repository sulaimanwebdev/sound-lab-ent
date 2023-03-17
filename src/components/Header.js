import React from 'react'

const Header = () => {
  return (
    <>
    <div className="w-full">
      <div className="mainCont flex items-center justify-between gap-5 text-white py-2.5">
         <button><img src="/images/logo.svg" alt="logo" /></button>
         <div className="flex items-center gap-10">
            <button className="uppercase border-b-2 border-main px-3.5 pb-2 translate-y-[6px]">Home</button>
            <button className="uppercase">Services</button>
            <button className="uppercase">Wedding</button>
            <button className="uppercase">About</button>
            <button className="uppercase">Events</button>
            <button className="btnBackground px-6 py-3 rounded-[4px] uppercase text-black">Contact us</button>
         </div>
      </div>
    </div>
    </>
  )
}

export default Header