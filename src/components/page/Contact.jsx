import React from "react";
import Navbar from "../molecules/Navbar";

const Contact = () => {
    let contacts = [
        {name:"Facebook", url:"github.com", icons:"facebookLight"},
        {name:"Instagram", url:"github.com", icons:"instagramLight"},
        {name:"Linkedin", url:"github.com", icons:"linkedinLight"},
        {name:"Github", url:"github.com", icons:"githubLight"},
        {name:"Whatsapp", url:"github.com", icons:"whatsAppLight"},
    ];

    return (
        <>
            <Navbar />
            <section className="md:px-60 px-5 py-20">
                <h1 className="text-3xl font-semibold mt-7 mb-3">Contact</h1>
                <div className="mt-3  border-b-2 border-dashed border-slate-400"></div>
                <form action="" className="mt-10">
                    <input type="text" placeholder="Your Name" className="rounded-lg border-2 w-full shadow-[#42434a] bg-[#1A1B1F]"/>
                    <input type="text" placeholder="Your Email" className="rounded-lg border-2  w-full shadow-[#42434a] bg-[#1A1B1F] my-3" />
                    <input type="text" placeholder="Subject" className="rounded-lg border-2  w-full shadow-[#42434a] bg-[#1A1B1F] mb-3" />
                    <textarea rows="6" placeholder="Your Message" class="border-2 py-2 px-2.5   w-full bg-[#1A1B1F]  rounded-lg shadow-md shadow-[#42434a]" name="message" id="message"></textarea>
                    <button className="mt-5 bg-[#42434a] hover:text-white px-5 py-1 rounded-lg ">Send</button>
                </form>
                <div className="mt-5">
                    <h1 className="text-3xl font-semibold  mb-3">Follow Me</h1>
                    <div className="mt-3  border-b-2 border-dashed border-slate-400"></div>
                    <ul className="flex gap-3 mt-2">
                    {
                        contacts.map(contact => (
                            <li><img src={`icons/${contact.icons}.svg`} className="w-6 h-6" alt="" /></li>    
                        ))
                    }
                    </ul>
                </div>

               
            </section>
        </>
    )
}

export default Contact;