import React from "react";
import Navbar from "../molecules/Navbar";

const Projects = () => {
    let Projects = [
        {id:0,title:"LaraBlog",description:"Sebuah blog system berbasis aplikasi web",repo:"",techs:["mysql", "php", "laravel", "tailwind"]},
        {id:1,title:"Ingfobase",description:"Mvc web application build with php native",repo:"",techs:[ "mysql", "bootstrap","php" ]},
        {id:2,title:"Recrypt",description:"A cli apps to cryptography with classical method",repo:"",techs:["python"]},
        {id:3,title:"Trabot",description:"Landing page Travel application, with Beautiful UI",repo:"",techs:[ "javascript", "react", "tailwind", "vite"]},
        {id:4,title:"NodeBlog",description:"NodeBlog Sebuah blog system dengan arsitektur monolith",repo:"",techs:["javascript", "mysql","tailwind","expressLight"]},
        {id:5,title:"NoteApi",description:"Sebuah Rest Api untuk mengelola catatan",repo:"",techs:["javascript", "mysql","expressLight"]},
        {id:6,title:"Epicgames-Clone",description:"Sebuah web clone dibuat menggunakan React.js",repo:"",techs:["javascript", "react", "tailwind", "vite"]},
        {id:7,title:"MySite",description:"Personal Website for portofolio",repo:"",techs:["javascript", "react", "tailwind", "vite"]},
    ];

    return (
        <>  
            <Navbar />
            <section className="md:px-32 lg:px-40 px-5 py-24 md:py-24 lg:py-28 xl:px-60">
                <div>
                    <h1 className="text-3xl md:text-4xl font-semibold">Projects</h1>
                    <div className="mt-3  border-b-2 border-dashed border-slate-400"></div>
                    <p className="text-[12px] md:text-sm mt-2">List of my projects, I hope that I can create usefull app/software to many people 😁😎😀.</p>
                    <div className="mt-10 md:grid md:grid-cols-2 md:gap-5">
                    {
                    Projects.map(project => (
                        <div className="bg-[#1A1B1F] p-5 rounded-lg mt-10 border border-[#323439] transition-all duration-200 hover:bg-[#323439] ease-in hover:-translate-y-2 " key={project.id}>
                            <div>
                                <div className="flex items-center justify-between">
                                    <h1 className="font-semibold text-xl">{project.title}</h1>
                                    <div className="flex items-center">
                                        <img src="icons/forkLight.svg" className="w-5 h-5" alt="" />
                                        <img src="icons/linkLight.svg" className="w-6 h-6 ml-3" alt="" />
                                    </div>
                                </div>
                                <p className="mt-7 mb-4 md:text-[15px]">{project.description}</p>
                                <ul className="flex gap-2">
                                    {project.techs.map (tech => <li><img className="w-6 h-6" src={`icons/${tech}.svg`} alt="" /></li>)}
                                </ul>
                            </div>
                            
                        </div>
                        
                    ))
                    }
                    </div>
                </div>
            </section>  
        </>
    )
}

export default Projects