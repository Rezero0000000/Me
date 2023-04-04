import React, { useState } from "react";
const Navbar = () => {
    let Links = [
        {name:"Home",link:"/"},
        {name:"About",link:"/about"},
        {name:"Projects",link:"/projects"},
        {name:"Contact",link:"/contact"},
      ];

    let [open,setOpen]=useState(false);

  return (
    <div className='w-full z-50 fixed bg-[#1f2025] '>
      <div className={`md:flex items-center justify-between h-16 md:px-10 transition-all duration-500 ease-in ${open ?  ' shadow-lg shadow-[#141517] md:bg-transparent md:shadow-none':'shadow-none'}`}>
        <div className={ `font-bold text-2xl cursor-pointer transition-all duration-500 ease-in flex px-7 py-[14px] items-center  
        `}>
          <div className="flex xs:font-medium ">
              <h4 className={` mt-2  text-sm xs:text-lg font-semibold`}>Rekun-dev</h4>
          </div>
        </div> 
        <div onClick={()=>setOpen(!open)} className='absolute right-8 top-[1.25rem] cursor-pointer md:hidden'>
          <div name={open ? 'close':'menu'} className="">
          <h1>Hi</h1>
          </div>
        </div>
      <ul className={`md:flex  md:items-center md:pb-0 pb-12 mx-auto absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ?  'top-14 shadow-lg shadow-[#141517] md:shadow-none md:bg-transparent bg-[#141517] ':'top-[-490px]  md:bg-transparent'}`}>

        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8  md:my-0 xs:my-10 my-8  '>
              <a href={link.link} className='duration-500 xs:text-normal text-sm'>{link.name}</a>
            </li>
          ))
        }
        <div className='md:hidden block'>
          <a href="https://github.com/rekun-dev" className=" text-white py-[10px] px-5 rounded-md text-[11px] xs:px-6 sm:px-7">Github</a>
        </div>
      </ul>
        <div className='hidden md:block'>
          <a href="https://github.com/rekun-dev" className=" text-white py-[10px] px-5 rounded-full text-[11px] xs:px-6 sm:px-7 lg:px-8 lg:py-[0.55rem]">Github</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar;