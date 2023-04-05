import React, { useState } from "react";
import Navbar from "../molecules/Navbar";
import Footer from "../molecules/Footer";

const Contact = () => {
    const [formState, setFormState] = useState({});

    const changeHandler = (event) => {
        setFormState({...formState, [event.target.name]: event.target.value});
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const config = {
            Username: "muhammadraihanalifiandra5@gmail.com",
            Password: "B526C7FD2A6049146730C160462AB3747BC6",
            Host:"smtp.elasticemail.com",
            Port: 2525,
            SecureToken: "fa2a63ca-8ab1-48b9-818d-0a4cc137cd47",
            To : 'muhammadraihanalifiandra5@gmail.com',
            From : formState.email,
            Subject : formState.subject,
            Body : `${formState.name}, ${formState.message}`,
        };

        if(window.Email) {
            window.Email.send(config).then(() => {
                alert("Email sent successfully")
            });
        }
    }

    let contacts = [
        {id: 0, name:"Instagram", url:"https://instagram.com/rekun.dev", icons:"instagramLight"},
        {id: 1, name:"Linkedin", url:"https://www.linkedin.com/in/muhammad-raihan-alifiandra-380509271/", icons:"linkedinLight"},
        {id: 2, name:"Github", url:"https://github.com/Rekun-dev", icons:"githubLight"},
        {id: 3, name:"Whatsapp", url:"Wa.me/+6287741174222", icons:"whatsAppLight"},
    ];

    return (
        <>
            <Navbar />
            <section className="md:px-32 lg:px-40 px-5 py-20 md:py-24 lg:py-28 xl:px-60 ">
                <strong><h1 className="text-2xl md:text-3xl mt-7 mb-3">Contact</h1></strong>
                <div className="mt-3  border-b-2 border-dashed border-slate-400"></div>
                <form action="" className="mt-10" onSubmit={submitHandler}>
                    <input value={formState.name || ''} autoComplete="off" onChange={changeHandler} name="name" type="text" placeholder="Your Name" className="rounded-lg border-2 md:text-[14px] text-[12px] w-full shadow-[#42434a] dark:bg-[#F3F4F6] bg-[#1A1B1F]"/>
                    <input value={formState.email || ''} autoComplete="off" onChange={changeHandler} name="email"  type="email" placeholder="Your Email" className="rounded-lg border-2 md:text-[14px] text-[12px]  w-full shadow-[#42434a] dark:bg-[#F3F4F6] bg-[#1A1B1F] my-3" />
                    <input value={formState.subject || ''} autoComplete="off" onChange={changeHandler} name="subject"  type="text" placeholder="Subject"  className="rounded-lg border-2 md:text-[14px] text-[12px]  w-full shadow-[#42434a] dark:bg-[#F3F4F6] bg-[#1A1B1F] mb-3" />
                    <textarea value={formState.message || ''} autoComplete="off" onChange={changeHandler} rows="6" placeholder="Your Message" className="border-2 md:text-[14px] text-[12px] py-2 px-2.5 dark:bg-[#F3F4F6] dark:shadow-none  w-full bg-[#1A1B1F]  rounded-lg shadow-md shadow-[#42434a]" name="message" id="message"></textarea>
                    <button className="mt-5 dark:text-white text-[14px] bg-[#42434a] hover:dark:text-[#364252] hover:dark:bg-[#F3F4F6] dark:hover:border hover:dark:border-[#42434a] hover:text-white px-6  py-2 rounded-lg ">Send</button>
                </form>
                <div className="mt-7">
                    <strong><h1 className="text-2xl md:text-3xl mb-3">Follow Me</h1></strong>
                    <div className="mt-3  border-b-2 border-dashed border-slate-400"></div>
                    <ul className="flex gap-3 mt-2">
                    {
                        contacts.map(contact => (
                            <li key={contact.id}><a href={contact.url} target="blank"> <img loading="lazy" src={`icons/${contact.icons}.svg`} className="w-6 h-6" alt={contact.name} /></a></li>    
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
