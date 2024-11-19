 
import "./Apex.css";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import { IoGlobeSharp } from "react-icons/io5";
import { FaRegHandPointRight } from "react-icons/fa6";
import { PiSunDim } from "react-icons/pi";
const CoverLetter = () => {
  return (
    <div className="flex min-h-screen items-center  justify-center bg-gray-300 p-6">
      
      <div className="mx-auto max-w-3xl rounded-lg bg-slate-800   
      border-y-2 border-solid border-slate-500/50 bg-gradient-to-b from-blue-200 via-blue-100 to-blue-200 px-6 pb-8 pt-2
       font-LibreBaskerville-Bold text-slate-950 shadow-xl
      ">
         <a href="https://my-introduction.onrender.com/" className="relative">
        <p className="paragraphAllWords text-end pb-4 font-sans text-sm  whitespace-nowrap ">
          <span className="IoGlobeSharp absolute inline-flex w-fit text-blue-600 -translate-x-8"><FaRegHandPointRight size={23}  />&nbsp;&nbsp;</span>
          Https://Brett&apos;s-Resume.com 
        </p>
        </a>
        <h1 className="paragraphAllWords mb-4 text-3xl font-bold text-center text-slate-950">
        <u style={{textDecorationColor: "#8fbc8f"}} >Brett Baker</u>:
        </h1> 
        <p className="paragraphAllWords mb-4">Dear Hiring Manager,</p>
        <p className="paragraphAllWords mb-4"> &nbsp;<VscDebugBreakpointLogUnverified size={23}  className="paragraphIcon inline-block"/>
          I am excited to apply for the web developer position at
          your company. With a strong desire for creating innovative and user-friendly websites, I am
          confident in my ability to contribute effectively to your team.
        </p>
        <p className="paragraphAllWords mb-4">&nbsp;<VscDebugBreakpointLogUnverified size={23}  className="paragraphIcon inline-block"/>
           I am driven by the challenge of solving complex problems
          and the satisfaction of seeing my work come to life on the web. This
          always fuels my continuous learning and dedication to staying at the
          forefront of web technologies.
        </p>
        <p className="paragraphAllWords mb-4 text-center text-[1.4rem]">
         <u style={{textDecorationColor: "#8fbc8f"}}>My Skills Include</u>:
        </p>

         <hr className="hrLine "/>

        <div className="paragraphAllWords text-2xl mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <ul className="list-inside list-none">
            <li><PiSunDim size={19}  className="listIcon inline-block whitespace-nowrap "/>React Js</li>
            <li><PiSunDim size={19}  className="listIcon inline-block whitespace-nowrap "/>HTML5</li>
            <li><PiSunDim size={19}  className="listIcon inline-block whitespace-nowrap "/>CSS3</li>
            <li><PiSunDim size={19}  className="listIcon inline-block whitespace-nowrap "/>TailwindCSS</li>
            <li><PiSunDim size={19}  className="listIcon inline-block whitespace-nowrap "/>JavaScript</li>
            <li><PiSunDim size={19}  className="listIcon inline-block whitespace-nowrap "/>GSAP Animation</li>
          </ul> 
          <ul className="list-inside list-none">
            <li><PiSunDim size={19}  className="listIcon inline-block whitespace-nowrap "/>Website Assistance</li>
            <li><PiSunDim size={19}  className="listIcon inline-block whitespace-nowrap "/>Three Js. 3D</li>
            <li><PiSunDim size={19}  className="listIcon inline-block whitespace-nowrap "/>Adobe Photo-Shop</li>
            <li><PiSunDim size={19}  className="listIcon inline-block whitespace-nowrap "/>Adobe Illustrator</li>
            <li><PiSunDim size={19}  className="listIcon inline-block whitespace-nowrap "/>Stable Diffusion</li>
            <li><PiSunDim size={19}  className="listIcon inline-block whitespace-nowrap "/>Open Source </li>
          </ul>
        </div>
           <hr className="hrLine"/>

        <p className="paragraphAllWords mb-4">
          &nbsp;<VscDebugBreakpointLogUnverified size={23}  className="paragraphIcon inline-block"/>  My expertise in JavaScript allows me to create dynamic and interactive web applications. I prefer creating custom components and saving them, rather than using generic templates, although I am proficient in both approaches. I am passionate about continuous learning and staying updated with the latest industry trends.
        </p>
        <p className="paragraphAllWords mb-4">
          &nbsp;<VscDebugBreakpointLogUnverified size={23}  className="paragraphIcon inline-block"/> I am highly detail-oriented and strive for perfection in my work. I have a passion for styling websites and making them unique, with a strong focus on the finished product. I enjoy integrating both Tailwind and standard CSS, leveraging the benefits of each.
        </p>
       
        <p className="paragraphAllWords mb-4">
          &nbsp;<VscDebugBreakpointLogUnverified size={23}  className="paragraphIcon inline-block"/> My
          experience with GSAP Animation and Three Js. 3D enables me to add
          engaging animations and 3D elements to enhance user experience.
          Additionally, my proficiency in Adobe Photo-Shop, Adobe Illustrator, and Stable Diffusion
          allows me to design visually stunning graphics and layouts.
        </p>
       
        <p className="paragraphAllWords mb-4">
          &nbsp;<VscDebugBreakpointLogUnverified size={23}  className="paragraphIcon inline-block"/>Thank you for considering my application. I look forward to
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

       <a href="https://MyBabb.com">
        <p className="paragraphAllWords text-end font-sans font-bold  whitespace-nowrap ">
          <span className="IoGlobeSharp inline-flex w-fit  "><IoGlobeSharp color="#2563eb" />&nbsp;</span>
          Https://MyBabb.com&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        </p>
        </a>
        
      </div>
    </div>
  );
};

export default CoverLetter;
