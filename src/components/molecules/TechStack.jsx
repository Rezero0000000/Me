import React from "react";

const TechStack = () => {
    
    let Links =[
        {name:"Python",icons:"python"},
        {name:"Nodejs",icons:"nodejs"},
        {name:"Php",icons:"php"},
        {name:"Javascript",icons:"javascript"},
        {name:"Typescript",icons:"typescript"},
        {name:"Laravel",icons:"laravel"},
        {name:"Tailwind",icons:"tailwind"},
        {name:"Express",icons:"expressLight"},
        {name:"React js",icons:"react"},
        {name:"C++",icons:"cpp"},
        {name:"Css 3",icons:"css"},
        {name:"Html 5",icons:"html"},
        {name:"Npm",icons:"npm"},
        {name:"Mysql",icons:"mysql"},
        {name:"Git",icons:"git"},
        {name:"Github",icons:"github"},
        {name:"Vite",icons:"vite"},
    ];
    return (
        <>
            <div className="text-center mt-10 flex justify-center md:mt-16 flex-col items-center">
                <h1 className="text-3xl font-bold text-white w-full border-t pt-7 border-[#323439]">Technologies I've worked with :</h1>
                <div className=" gap-9  mt-10 flex flex-wrap justify-center md:w-11/12 w-full mx-auto">
                    {Links.map(tech => (
                        <div className="bg-[#25262b] cursor-pointer rounded-xl border border-[#323439] transition-all duration-200 hover:p-3 ease-in hover:-translate-y-2 hover:shadow-lg hover:shadow-[#42434a] w-32 flex flex-col items-center justify-center py-3">
                            <div><img src={`icons/${tech.icons}.svg`} className="w-14 h-14" alt={tech.name} /></div>
                            <p className="mt-3 font-semibold">{tech.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}


export default TechStack;