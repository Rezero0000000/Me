import React from "react";
import Navbar from "../molecules/Navbar";
import Hero from "../molecules/Hero";
import Footer from "../molecules/Footer";

const Home = () => {
  return (
    <>
    <Navbar />
    <section>
      <Hero />
    </section>
    <Footer />
    </>
  )
}

export default Home;