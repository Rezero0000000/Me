import React from "react";
import Navbar from "../molecules/Navbar";

const Projects = () => {
    let Projects = [
        {id:0,title:"LaraBlog",description:"Sebuah blog system berbasis aplikasi web",repo:"",techs:["php", "laravel", "mariadb", "tailwind"]},
        {id:1,title:"Ingfobase",description:"Mvc web application build with php native",repo:"",techs:["php", "bootstrap", "mariadb"]},
        {id:2,title:"Recrypt",description:"A cli apps to cryptography with classical method",repo:"",techs:["python"]},
        {id:3,title:"Trabot",description:"Landing page Travel application, with Beautiful UI",repo:"",techs:[ "javascript", "react", "tailwind", "vite"]},
        {id:4,title:"NodeBlog",description:"NodeBlog Sebuah blog system dengan arsitektur monolith",repo:"",techs:["javascript","tailwind","express", "mariadb"]},
        {id:5,title:"NoteApi",description:"Sebuah Rest Api untuk mengelola catatan",repo:"",techs:["javascript", "express", "mariadb"]},
        {id:6,title:"Epicgames-Clone",description:"Sebuah web clone dibuat menggunakan React.js",repo:"",techs:["javascript", "react", "tailwind", "vite"]},
        {id:7,title:"MySite",description:"Personal Website for portofolio",repo:"",techs:["javascript", "react", "tailwind", "vite"]},
    ];

    return (
        <>  
            <Navbar />
            <section className="md:px-60 px-6 py-20">
                <div>
                    <h1 className="text-3xl font-semibold">Projects</h1>
                    <div className="mt-3  border-b-2 border-dashed border-slate-400"></div>
                    <p className="text-[12px] mt-2">List of my projects, I hope that I can create usefull app/software to many people 😁😎😀.</p>
                    <div className="mt-10">
                    {
                    Projects.map(project => (
                        <div className="bg-[#1A1B1F] p-5 rounded-lg mt-10 border border-[#323439] transition-all duration-300 hover:bg-[#323439] ease-in hover:-translate-y-2 " key={project.id}>
                            <h1 className="font-semibold text-xl">{project.title}</h1>
                            <p className="mt-5 mb-3">{project.description}</p>
                            <ul className="flex gap-2">
                                {project.techs.map (tech => <li><img className="w-5 h-5" src={`icons/${tech}.svg`} alt="" /></li>)}
                            </ul>
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