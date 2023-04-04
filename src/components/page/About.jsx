import React from "react";
import Navbar from "../molecules/Navbar";
import AboutMe from "../molecules/AboutMe";
import TechStack from "../molecules/TechStack";
import Footer from "../molecules/Footer";


const About = () => {
    return (
        <>  
            <Navbar />
            <section className="md:px-32 lg:px-40 px-5 py-20 md:py-24 lg:py-28 xl:px-60">
                <AboutMe />
                <TechStack />
            </section>
            <Footer />
        </>
    )
}

export default About