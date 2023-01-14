import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import React from 'react'
import CSS from '../assets/css.png';
import HTML from '../assets/html.png';
import JavaScript from '../assets/js.png';
import ReactImage from '../assets/react.png';
import Firebase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Node from '../assets/node.png';

const MySkills = () => {    


  return (
    <section id="skills" 
    className="pt-48 pb-48">
      {/* HEADER SECTION */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        
        <motion.div
        
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl flex justify-center mb-5">
            MY <span className="text-red"> SKILLS</span>
          </p>
          <div className="flex justify-center ">
          <LineGradient width="w-1/3"/>
          </div>
          <p className="flex justify-center mt-10 mb-7">
          These are the technologies I've worked with:
          </p>
        </motion.div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 justify-center text-center py-8'>
<div className='shadow-md shadow-[#e544dd] hover:scale-110 duration-500'>
    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
<p className='my-4'>HTML</p>
</div>
<div className='shadow-md shadow-[#e544dd] hover:scale-110 duration-500'>
<img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
<p className='my-4'>CSS</p>
</div>
<div className='shadow-md shadow-[#e544dd] hover:scale-110 duration-500'>
    <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
<p className='my-4'>JAVASCRIPT</p>
</div>
<div className='shadow-md shadow-[#e544dd] hover:scale-110 duration-500'>
    <img className='w-20 mx-auto' src={ReactImage} alt="React icon" />
<p className='my-4'>REACT</p>
</div>
<div className='shadow-md shadow-[#e544dd] hover:scale-110 duration-500'>
    <img className='w-20 mx-auto' src={Firebase} alt="Firebase icon" />
<p className='my-4'>FIREBASE</p>
</div>
<div className='shadow-md shadow-[#e544dd] hover:scale-110 duration-500'>
    <img className='w-20 mx-auto' src={GitHub} alt="Github icon" />
<p className='my-4'>GITHUB</p>
</div>
<div className='shadow-md shadow-[#e544dd] hover:scale-110 duration-500'>
    <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
<p className='my-4'>TAILWIND</p>
</div>
<div className='shadow-md shadow-[#e544dd] hover:scale-110 duration-500'>
    <img className='w-20 mx-auto' src={Node} alt="Node icon" />
<p className='my-4'>NODE.JS</p>
</div>
        
       </div>
      </div>
    </section>
  );
};

export default MySkills;