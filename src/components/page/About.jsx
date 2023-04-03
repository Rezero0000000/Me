import React from "react";
import Navbar from "../molecules/Navbar";
import AboutMe from "../molecules/AboutMe";
import TechStack from "../molecules/TechStack";


const About = () => {
    return (
        <>  
            <Navbar />
            <section className="md:px-60 px-7 py-20">
                <AboutMe />
                <TechStack />
            </section>
        </>
    )
}

export default About