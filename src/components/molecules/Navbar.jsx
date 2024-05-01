import React, { useState } from "react";

const Navbar = () => {

    let Links = [
        {name:"Home",link:"/"},
        {name:"About",link:"/about"},
        {name:"Projects",link:"/projects"},
        {name:"Contact",link:"/contact"},
      ];

    let [open,setOpen]=useState(false);
    const genericHamburgerLine = `h-[2px] w-5 my-[3px] bg-[#9CA2AE] transition ease transform duration-300`;
    
    
    let [lightMode,setLightMode]=useState(false);
    function changeMode () {
      if (lightMode) {
        localStorage.setItem("theme", "light");
        window.document.documentElement.classList.remove("dark");
      } else {
        localStorage.setItem("theme", "dark");
        window.document.documentElement.classList.add("dark");
      }
      setLightMode(!lightMode);
    }

  return (
    <nav className='w-full z-50 fixed bg-[#1f2025] dark:shadow-lg  dark:shadow-[#e6e8ea] dark:bg-[#F3F4F6]'>
      <div className={`md:flex items-center  h-16 md:px-10 transition-all duration-500 ease-in ${open ?  'dark:shadow-[#e6e8ea] shadow-lg shadow-[#141517] md:bg-transparent md:shadow-none':'shadow-none'}`}>
      <div className={ `font-[700] text-2xl mr-20 cursor-pointer absolute hidden md:block flex py-[14px] items-center  
        `}>
          <div className="flex ">
              <h4 className={` mt-1 text-xl `}>Rezero00000</h4>
              
          </div>
        </div> 

        <div onClick={()=>setOpen(!open)} className='absolute left-3 top-[0.9rem] cursor-pointer md:hidden'>
          <div name={open ? 'close':'menu'} className="w-5 ">
            <button className="flex flex-col h-10 w-10 rounded justify-center items-center group">
              <div className={`${genericHamburgerLine} ${
                open
                    ? "rotate-[43deg] translate-y-2 opacity-50 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
              }`}
              ></div>
              <div className={`${genericHamburgerLine} ${open ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`} />
            <div className={`${genericHamburgerLine} ${
                    open
                        ? "-rotate-[42deg] -translate-y-2 opacity-50 group-hover:opacity-100"
                        : "opacity-50 group-hover:opacity-100"
                }`}
            />
            </button>
          </div>
        </div>

        <div className="flex absolute right-3 top-[1.5rem] ">
            <input type="checkbox" className="hidden" id="dark-toggle" onClick={changeMode}/>
            <label htmlFor="dark-toggle">
            <div className="flex h-[19px] w-8 cursor-pointer items-center rounded-full bg-slate-500 p-1">
                <div className={`toggle-circle h-[14px] w-[14px] rounded-full bg-white transition duration-300 ease-in-out ${lightMode ? "translate-x-[0.6rem]":""}`}></div>
            </div>
            </label>
        </div>        
        
      <ul className={`md:flex md:items-center md:pr-20 md:pb-0 pb-12 mx-auto absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ?  'top-14 shadow-lg shadow-[#141517] md:shadow-none md:bg-transparent dark:shadow-[#e6e8ea] dark:bg-[#e6e8ea] bg-[#141517] ':'top-[-490px]  md:bg-transparent'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8  md:my-0 xs:my-10 my-8  '>
              <a href={link.link}  className='duration-500 xs:text-normal text-sm'>{link.name}</a>
            </li>
          ))
        }
        <div className='md:hidden block'>
          <a href="https://github.com/rekun-dev" target="blank" className=" xs:text-normal text-sm">Github</a>
        </div>
      </ul>
       
      </div>
    </nav>
  )
}

export default Navbar;
