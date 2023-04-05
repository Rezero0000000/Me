import React from "react";
const AboutMe = () => {
    return (
        <>
            <article className="md:text-[14px] text-[12.5px]">
                <strong><h1 className="text-2xl md:text-3xl">About Me</h1></strong>
                <div className="mt-3 mb-7 border-b-2 border-dashed border-slate-400"></div>
                <p>Hi everyone, my name is <strong> Muhammad Raihan Alifiandra</strong> But you can call me <strong>Re</strong>. Im a Junior web devloper, Computer Science Student, Free and Open Source Software Ethuesiast. I live in Balikpapan, Indonesia and I'm 19 year old. </p>
                <p className="mt-3">Coding has been my passion and hobby since I was 15 years old, and I love computer science. Besides coding. I love listening to music and drawing. Sometimes I watch anime, but I prefer read manga and novel, I spend a lot of time on Facebook sharing memes and shitposts</p>
            </article>
            <article className="mt-10">
               <strong><h1 className="text-2xl lg:text-3xl mb-5">What I'm Doing Now</h1></strong> 
                <div className="mt-3 mb-7 border-b-2 border-dashed border-slate-400"></div>
                <ul className="list-disc ml-5 md:text-[14px] text-[12.5px]">
                    <li>Enjoying Life. exactly</li>
                    <li>Go to College</li>
                    <li>Learn to be more productive</li>
                    <li>Learn Golang, Cryptography, Pentesting</li>
                </ul>
            </article>
        </>
    )
}

export default AboutMe;
