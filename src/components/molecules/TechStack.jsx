import React from "react";

const TechStack = () => {
    
    let Links =[
        {id: 0, name:"Python",icons:"python"},
        {id: 1, name:"Nodejs",icons:"nodejs"},
        {id: 2, name:"Php",icons:"php"},
        {id: 3, name:"Javascript",icons:"javascript"},
        {id: 4, name:"Typescript",icons:"typescript"},
        {id: 5, name:"Laravel",icons:"laravel"},
        {id: 6, name:"Tailwind",icons:"tailwind"},
        {id: 7, name:"Express",icons:"expressLight"},
        {id: 8, name:"React js",icons:"react"},
        {id: 9, name:"C++",icons:"cpp"},
        {id: 10, name:"Css 3",icons:"css"},
        {id: 11, name:"Html 5",icons:"html"},
        {id: 12, name:"Npm",icons:"npm"},
        {id: 13, name:"Mysql",icons:"mysql"},
        {id: 14, name:"Git",icons:"git"},
        {id: 15, name:"Github",icons:"github"},
        {id: 16, name:"Vite",icons:"vite"},
    ];
    return (
        <>
            <div className="text-center mt-10 flex justify-center md:mt-16 flex-col items-center">
                <h1 className="text-3xl font-[700] text-white dark:text-[#25262b] w-full border-t pt-7 border-[#323439]">Technologies I've worked with :</h1>
                <div className=" gap-9  mt-10 flex flex-wrap justify-center md:w-11/12 w-full mx-auto">
                    {Links.map(tech => (
                        <div key={tech.id} className="bg-[#25262b] dark:bg-[#F3F4F6] hover:dark:shadow-[#cbcdd0] cursor-pointer rounded-xl border border-[#323439] transition-all duration-200 hover:p-3 ease-in hover:-translate-y-2 hover:shadow-lg hover:shadow-[#42434a] w-32 flex flex-col items-center justify-center py-3">
                            <div><img src={`icons/${tech.icons}.svg`} className="w-14 h-14" alt={tech.name} /></div>
                            <p className="mt-3 font-[600] text-[12px] ">{tech.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}


export default TechStack;