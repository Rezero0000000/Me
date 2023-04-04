import React from "react";
import Navbar from "../molecules/Navbar";
import Footer from "../molecules/Footer";

const Contact = () => {
    let contacts = [
        {id: 0, name:"Facebook", url:"github.com", icons:"facebookLight"},
        {id: 1, name:"Instagram", url:"github.com", icons:"instagramLight"},
        {id: 2, name:"Linkedin", url:"github.com", icons:"linkedinLight"},
        {id: 3, name:"Github", url:"github.com", icons:"githubLight"},
        {id: 4, name:"Whatsapp", url:"github.com", icons:"whatsAppLight"},
    ];

    return (
        <>
            <Navbar />
            <section className="md:px-32 lg:px-40 px-5 py-20 md:py-24 lg:py-28 xl:px-60 ">
                <strong><h1 className="text-3xl md:text-4xl mt-7 mb-3">Contact</h1></strong>
                <div className="mt-3  border-b-2 border-dashed border-slate-400"></div>
                <form action="" className="mt-10 ">
                    <input type="text" placeholder="Your Name" className="rounded-lg border-2 md:text-[14px] text-[12px] w-full shadow-[#42434a] dark:bg-[#F3F4F6] bg-[#1A1B1F]"/>
                    <input type="text" placeholder="Your Email" className="rounded-lg border-2 md:text-[14px] text-[12px]  w-full shadow-[#42434a] dark:bg-[#F3F4F6] bg-[#1A1B1F] my-3" />
                    <input type="text" placeholder="Subject" autoComplete="off" className="rounded-lg border-2 md:text-[14px] text-[12px]  w-full shadow-[#42434a] dark:bg-[#F3F4F6] bg-[#1A1B1F] mb-3" />
                    <textarea rows="6" placeholder="Your Message" className="border-2 md:text-[14px] text-[12px] py-2 px-2.5 dark:bg-[#F3F4F6] dark:shadow-none  w-full bg-[#1A1B1F]  rounded-lg shadow-md shadow-[#42434a]" name="message" id="message"></textarea>
                    <button className="mt-5 dark:text-white text-[14px] bg-[#42434a] hover:dark:text-[#364252] hover:dark:bg-[#F3F4F6] dark:hover:border hover:dark:border-[#42434a] hover:text-white px-6  py-2 rounded-lg ">Send</button>
                </form>
                <div className="mt-7">
                    <strong><h1 className="text-3xl md:text-4xl mb-3">Follow Me</h1></strong>
                    <div className="mt-3  border-b-2 border-dashed border-slate-400"></div>
                    <ul className="flex gap-3 mt-2">
                    {
                        contacts.map(contact => (
                            <li key={contact.id}><a href={contact.url} target="blank"> <img src={`icons/${contact.icons}.svg`} className="w-6 h-6" alt={contact.name} /></a></li>    
                        ))
                    }
                    </ul>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Contact;