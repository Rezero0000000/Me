import React from "react";

const Hero = () => {
    return (
        <>
           <section  class="mt-20 lg:mt-[10.5rem]  px-7 sm:px-10 md:px-32 lg:px-56">
				<h1 class="text-4xl font-semibold leading-relaxed lg:text-5xl  lg:leading-snug selected:bg-black selected:text-slate-200">Hello, I'm Re. <br/>I'm a Junior Fullstack Developer specializing in Web Development.</h1>
				<div class="buttons mt-7">
						<a href="#" class="px-5 py-3 border rounded-full border-slate-200 shadow-lg hover:bg-black hover:text-slate-200 hover:border-none" onclick="smoothScroll('follow')" target="blank">Follow Me</a>
						<a href="https://github.com/Re-Kun" class="px-5 py-3 bg-black text-slate-200 rounded-full shadow-lg ml-3 hover:bg-white hover:text-black hover:border hover:border-slate-200">Github</a>
				</div>
		    </section>
        </>
    )
}

export default Hero