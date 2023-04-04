import React from "react";
 // Hamburger

const Hero = () => {
    return (
        <>
           <section  className="md:px-20  md:text-[15px] sm:py-36 sm:px-10 lg:px-40 px-5 py-24 md:py-48 lg:py-60 xl:px-60 ">
		   <div className="flex flex-col items-center pt-5 mx-auto w-full sm:flex-row sm:justify-around sm:w-auto sm:pt-8">
            <a href="github.com/Rekun-dev" className="mx-auto flex items-center justify-center w-auto">
		        <img src="image/Re.jpg" className="rounded-xl sm:mt-12 md:mt-5 w-[200px] xs:w-[180px] sm:w-[30rem] lg:w-[25rem] lg:mt-5 border-[6px] border-white-500 shadow-md" alt="Rekun-dev" />
            </a>
            <div className="sm:ml-10 xs:text-center sm:text-left md:text-left">
                <h1 className="text-base font-semibold text-primary md:text-xl mt-10 md:mt-0">Hello 👋, I'm <span className="mt-1 block text-4xl font-bold text-dark dark:text-white lg:text-5xl">Rekun-dev</span></h1>
                <h2 className="mb-5 text-sm font-medium">Web Developer</h2>
                <p className="mb-10 font-medium xs:px-7 sm:px-0 leading-relaxed text-secondary ">A Computer Science student, Tech Enthuasiast. Welcome to my Portfolio Website, Things I've created, and anything else that i want to show the <span className="font-bold text-dark dark:text-white">World</span></p>

                <div className="buttons mt-7">
                        <a href="#" className="px-5 py-3 border rounded-lg bg-white text-[#141517] hover:border-slate-400 shadow-lg hover:bg-[#1A1B1F] hover:text-slate-200 hover:border" target="blank">Follow Me</a>
                        <a href="https://github.com/Re-Kun" className="px-5 py-3 bg-[#1A1B1F] text-slate-200 rounded-lg shadow-lg ml-3 hover:bg-white hover:text-black hover:border hover:border-slate-200">Github</a>
                </div>

             
            </div>
          </div>
		    </section>
        </>
    )
}

export default Hero