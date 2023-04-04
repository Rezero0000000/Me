import React from "react";
import Navbar from "../molecules/Navbar";
import Hero from "../molecules/Hero";
import Footer from "../molecules/Footer";

const Home = () => {
  return (
    <>
    <Navbar />
    <section className="h-[93vh] lg:h-[95vh]">
      <Hero />
    </section>
    <Footer />
    </>
  )
}

export default Home;