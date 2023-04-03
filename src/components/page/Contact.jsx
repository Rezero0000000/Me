import React from "react";
import Navbar from "../molecules/Navbar";

const Contact = () => {
    return (
        <>
            <Navbar />
            <section className="md:px-60 px-10 py-20">
                <h1 className="text-xl font-semibold text-xl mb-3">Contact</h1>
                <p>If you have a question, talk to me about a project collaboration or just say Hi, fill up the form below. I'll respond as soon as possible!</p>
                <form action="" className="mt-3">
                    <input type="text" placeholder="Your Name" className="rounded-lg border-2 border-[#] bg-[#1A1B1F]"/>
                    <input type="text" placeholder="Your Email" className="rounded-lg border-2 border-[#] bg-[#1A1B1F] my-3" />
                    <input type="text" placeholder="Subject" className="rounded-lg border-2 border-[#] bg-[#1A1B1F] mb-3" />
                    <input type="text" placeholder="Your Message" className="rounded-lg border-2 border-[#] bg-[#1A1B1F]" />
                    <button className="mt-5 bg-[#1A1B1F] ">Send</button>
                </form>
            </section>
        </>
    )
}

export default Contact;