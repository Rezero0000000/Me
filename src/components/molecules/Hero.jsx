import React from "react";
 // Hamburger

const Hero = () => {
    return (
        <>
           <section  className="md:px-20  md:text-[15px] sm:py-36 sm:px-10 lg:px-40 px-5 py-24 md:py-48 lg:py-60 xl:px-60 ">
		   <div className="flex flex-col items-center pt-5 mx-auto w-full sm:flex-row sm:justify-around sm:w-auto sm:pt-8">
            <article className="sm:ml-10 xs:text-center sm:text-left md:text-left">
                <h1 className="text-base font-[600] text-primary md:text-xl mt-10 md:mt-0">Hello 👋, I'm <span className="mt-1 block text-4xl font-[700] text-white dark:text-[#364252] lg:text-5xl">Rezero0000000</span></h1>
                <h2 className="mb-5 text-[12px] font-medium font-RobotoMono">Web Developer</h2>
                <p className="mb-10 font-medium text-[14px] xs:px-7 sm:px-0 leading-relaxed text-secondary font-RobotoMono">A Computer Science student, Tech Enthuasiast. Welcome to my Portfolio Website, Things I've created, and anything else that i want to show the <span className="font-[700] text-dark dark:text-white">World</span></p>

                <div className="buttons mt-7">
                        <a href="/contact" className="px-5 py-3 border rounded-lg bg-[#F3F4F6] text-[#141517] hover:border-slate-400 shadow-lg hover:bg-[#1A1B1F] hover:text-slate-200 hover:border" target="blank">Follow Me</a>
                        <a href="https://github.com/Rekun-dev" target="blank" className="px-5 py-3 bg-[#1A1B1F] text-slate-200 rounded-lg shadow-lg ml-3 hover:bg-[#F3F4F6] hover:text-black hover:border hover:border-slate-200">Github</a>
                </div>
            </article>
          </div>
		</section>
        </>
    )
}

export default Hero
