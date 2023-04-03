import React from "react";

const TechStack = () => {
    
    let Links =[
        {name:"Npm",icons:"npm"},
        {name:"C++",icons:"cpp"},
        {name:"Css 3",icons:"css"},
        {name:"Express",icons:"express"},
        {name:"Git",icons:"git"},
        {name:"Github",icons:"github"},
        {name:"Html 5",icons:"html"},
        {name:"Javascript",icons:"javascript"},
        {name:"Laravel",icons:"laravel"},
        {name:"MariaDB",icons:"mariadb"},
        {name:"Nodejs",icons:"nodejs"},
        {name:"Php",icons:"php"},
        {name:"Python",icons:"python"},
        {name:"React js",icons:"react"},
        {name:"Tailwind",icons:"tailwind"},
        {name:"Typescript",icons:"typescript"},
        {name:"Vite",icons:"vite"},
    ];
    return (
        <>
            <div className="text-center mt-10 flex justify-center flex-col items-center">
                <h1>Some Technology i used for work</h1>
                <div className="grid gap-9 mt-5 grid-cols-2 ">
                    {Links.map(tech => (
                        <div className="bg-[#25262b] w-32 flex flex-col items-center justify-center py-3">
                            <div><img src={`icons/${tech.icons}.svg`} className="w-14 h-14" alt="" /></div>
                            <p className="mt-3 font-semibold">{tech.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}


export default TechStack;