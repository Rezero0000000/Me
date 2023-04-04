import React from "react";
const AboutMe = () => {
    return (
        <>
            <div className="md:text-[15px]">
                <h1 className="text-3xl md:text-4xl font-semibold ">About Me</h1>
                <div className="mt-3 mb-7 border-b-2 border-dashed border-slate-400"></div>

                <p>Hi everyone, my name is <strong> Muhammad Raihan Alifiandra</strong> But you can call me <strong>Rei</strong>. Im a Junior web devloper, Computer Science Student, Free and Open Source Software Ethuesiast. I live in Balikpapan, Indonesia and I'm 19 year old. </p>
                <p className="mt-3">Coding has been my passion and hobby since I was 15 years old, and I love computer science I was a kid. Besides coding. I love listening to music and drawing. Sometimes I watch anime, but I prefer read manga and novel, I spend a lot of time on Facebook sharing memes and shitposts</p>
            </div>
            <div className="mt-10">
                <h1 className="text-2xl lg:text-3xl font-semibold mb-5">What I'm Doing Now</h1>
                <div className="mt-3 mb-7 border-b-2 border-dashed border-slate-400"></div>
                <ul className="list-disc ml-5 md:text-[15px]">
                    <li>Enjoying Life. exactly</li>
                    <li>Go to College</li>
                    <li>Learn to be more productive</li>
                    <li>Learn Golang, Cryptography, Pentesting</li>
                </ul>
            </div>
        </>
    )
}

export default AboutMe