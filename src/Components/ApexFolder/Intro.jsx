import React from "react";
import "./Apex.css";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
const CoverLetter = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200 p-6">
      <div className="mx-auto max-w-3xl rounded-lg bg-slate-800   
      border-y-2 border-solid border-slate-500/50 bg-gradient-to-b from-blue-200 via-blue-100 to-blue-200 p-8 font-LibreBaskerville-Bold text-slate-950 shadow-xl
      ">
        <h1 className="paragraphAllWords mb-4 text-3xl font-bold text-center text-slate-950">
        <u style={{textDecorationColor: "green"}} >Brett Baker</u>:
        </h1> 
        <p className="paragraphAllWords mb-4">Dear Hiring Manager,</p>
        <p className="paragraphAllWords mb-4"> &nbsp;<VscDebugBreakpointLogUnverified size={23}  className="listIcon inline-block"/>
          I am excited to apply for the web developer position at
          your company. With a strong desire for creating innovative and user-friendly websites, I am
          confident in my ability to contribute effectively to your team.
        </p>
        <p className="paragraphAllWords mb-4">&nbsp;<VscDebugBreakpointLogUnverified size={23}  className="listIcon inline-block"/>
           I am driven by the challenge of solving complex problems
          and the satisfaction of seeing my work come to life on the web. This
          always fuels my continuous learning and dedication to staying at the
          forefront of web technologies.
        </p>
        <p className="paragraphAllWords mb-4 text-center text-[1.4rem]">
         <u style={{textDecorationColor: "green"}}>My Skills Include</u>:
        </p>
        <div className="paragraphAllWords mb-4 grid grid-cols-2 gap-4">
          <ul className="list-inside list-none">
            <li><VscDebugBreakpointLogUnverified size={23}  className="listIcon inline-block"/>React Js</li>
            <li><VscDebugBreakpointLogUnverified size={23}  className="listIcon inline-block"/>HTML5</li>
            <li><VscDebugBreakpointLogUnverified size={23}  className="listIcon inline-block"/>CSS3</li>
            <li><VscDebugBreakpointLogUnverified size={23}  className="listIcon inline-block"/>TailwindCSS</li>
            <li><VscDebugBreakpointLogUnverified size={23}  className="listIcon inline-block"/>JavaScript</li>
            <li><VscDebugBreakpointLogUnverified size={23}  className="listIcon inline-block"/>GSAP Animation</li>
          </ul>
          <ul className="list-inside list-none">
            <li><VscDebugBreakpointLogUnverified size={23}  className="listIcon inline-block"/>Website Assistance</li>
            <li><VscDebugBreakpointLogUnverified size={23}  className="listIcon inline-block"/>Three Js. 3D</li>
            <li><VscDebugBreakpointLogUnverified size={23}  className="listIcon inline-block"/>Adobe Photo-Shop</li>
            <li><VscDebugBreakpointLogUnverified size={23}  className="listIcon inline-block"/>Adobe Illustrator</li>
            <li><VscDebugBreakpointLogUnverified size={23}  className="listIcon inline-block"/>Stable Diffusion</li>
            <li><VscDebugBreakpointLogUnverified size={23}  className="listIcon inline-block"/>Open Source Contributions</li>
          </ul>
        </div>
       
        <p className="paragraphAllWords mb-4">
          &nbsp;<VscDebugBreakpointLogUnverified size={23}  className="listIcon inline-block"/>I am particularly skilled in using React Js and
          TailwindCSS to create dynamic and efficient web applications. My
          experience with GSAP Animation and Three Js. 3D enables me to add
          engaging animations and 3D elements to enhance user experience.
          Additionally, my proficiency in Adobe Photo-Shop and Adobe Illustrator
          allows me to design visually stunning graphics and layouts.
        </p>
        <p className="paragraphAllWords mb-4">
          &nbsp;<VscDebugBreakpointLogUnverified size={23}  className="listIcon inline-block"/>I am passionate about continuous learning and staying
          updated with the latest industry trends. My contributions to open
          source projects demonstrate my commitment to the web development
          community and my ability to collaborate effectively with other
          developers.
        </p>
        <p className="paragraphAllWords mb-4">
          &nbsp;<VscDebugBreakpointLogUnverified size={23}  className="listIcon inline-block"/>I am excited about the opportunity to bring my skills and
          experience to your team and contribute to the success of your
          projects. Thank you for considering my application. I look forward to
          the possibility of discussing how I can contribute to your team.
        </p>
        <p className="paragraphAllWords mb-4">
          &nbsp;&nbsp;You can view my Portfolio Website at the link below to see my work.
        </p>
        <p className="paragraphAllWords text-end">
          Sincerely,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p>
        <p className="paragraphAllWords text-end">
          Brett Baker&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p>
       
        <p className="paragraphAllWords text-end font-sans font-bold text-blue-700">
          Https://MyBabb.com&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p>
      
      </div>
    </div>
  );
};

export default CoverLetter;
