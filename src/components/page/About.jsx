import React from "react";
import Navbar from "../molecules/Navbar";
import AboutMe from "../molecules/AboutMe";
import TechStack from "../molecules/TechStack";


const About = () => {
    return (
        <>  
            <Navbar />
            <section className="px-60">
                <AboutMe />
                <TechStack />
            </section>
        </>
    )
}

export default About