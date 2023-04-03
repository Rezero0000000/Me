import React from "react";
const Hero = () => {
    return (
        <>
           <section  class="py-20 px-3 sm:px-10 md:px-32 lg:px-56">
		   <div class="w-full self-center px-4 lg:w-1/2">
		   <div className="mt-3 mb-9 rounded-full w-40 h-40  mx-auto"><img src="image/Re.jpg" className="rounded-full border-white border-4 object-cover" alt="" /></div>

            <h1 class="text-base font-semibold text-primary md:text-xl">Hello 👋, I'm <span class="mt-1 block text-4xl font-bold text-dark dark:text-white lg:text-5xl">Rekun-dev</span></h1>
            <h2 class="mb-5 text-sm font-medium">Web Developer</h2>
            <p class="mb-10 font-medium leading-relaxed text-secondary">A Computer Science student, Tech Enthuasiast. Welcome to my Portfolio Website, Things I've created, and anything else that i want to show the <span class="font-bold text-dark dark:text-white">World</span></p>

			<div class="buttons mt-7">
					<a href="#" class="px-5 py-3 border rounded-lg bg-white text-[#141517] hover:border-slate-400 shadow-lg hover:bg-[#1A1B1F] hover:text-slate-200 hover:border" onclick="smoothScroll('follow')" target="blank">Follow Me</a>
					<a href="https://github.com/Re-Kun" class="px-5 py-3 bg-[#1A1B1F] text-slate-200 rounded-lg shadow-lg ml-3 hover:bg-white hover:text-black hover:border hover:border-slate-200">Github</a>
			</div>
          </div>
		    </section>
        </>
    )
}

export default Hero