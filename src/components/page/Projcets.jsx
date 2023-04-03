import React from "react";
import Navbar from "../molecules/Navbar";

const Projects = () => {
    let Projects = [
        {id:0,title:"LaraBlog",description:"Sebuah blog system berbasis aplikasi web",repo:"",techs:["php", "laravel", "mariadb", "tailwind"]},
        {id:1,title:"Trabot",description:"Landing page Travel application, with Beautiful UI",repo:"",techs:[ "javascript", "react", "tailwind", "vite"]},
        {id:2,title:"NodeBlog",description:"NodeBlog Sebuah blog system dengan arsitektur monolith",repo:"",techs:["javascript","tailwind","express", "mariadb"]},
        {id:3,title:"NoteApi",description:"Sebuah Rest Api untuk mengelola catatan",repo:"",techs:["javascript", "express", "mariadb"]},
        {id:4,title:"Ingfobase",description:"Mvc web application build with php native",repo:"",techs:["php", "bootstrap", "mariadb"]},
        {id:5,title:"Recrypt",description:"A cli apps to cryptography with classical method",repo:"",techs:["python"]},
        {id:6,title:"Epicgames-Clone",description:"Sebuah web clone dibuat menggunakan React.js",repo:"",techs:["javascript", "react", "tailwind", "vite"]},
        {id:7,title:"MySite",description:"Personal Website for portofolio",repo:"",techs:["javascript", "react", "tailwind", "vite"]},
    ];

    return (
        <>  
            <Navbar />
            <section className="md:px-60 px-3">
                <div>
                    <h1 className="ml-3 text-3xl font-semibold">Projects</h1>
                    <div className="mt-5">
                    {
                    Projects.map(project => (
                        <div className="bg-[#1A1B1F] p-3 rounded-lg mt-3" key={project.id}>
                            <h1 className="font-semibold text-xl">{project.title}</h1>
                            <p className="mt-5 text-[12px] mb-2">{project.description}</p>
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