import {
  motion,
  transform,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const AnimationPlayground = () => {
  const buttonVariants = {
    hover:{
      scale:1.1,
    },
    initial:{
      scale:1,
      
    }
  }
  return (
    <>
      <motion.div className=" min-h-screen bg-white  py-24 text-center overflow-y-auto">
        <div className="  flex flex-col justify-center items-center ">
          <div className="w-6/12 mx-auto">
            <h1 className="font-bold text-4xl">Your Trusted Legal Partner
            Expertise. Integrity. Results.</h1>
          <p className="text-gray-400 mt-4">we are committed to providing exceptional legal services with a focus on achieving the best outcomes for our clients. With decades of experience and a team of dedicated attorneys, we are here to guide you through every legal challenge</p>
          </div>
        </div>
        <div className=" py-12 flex flex-col justify-center items-center ">
          <div className="w-8/12 mx-auto">
            <img className="" src="https://img.freepik.com/free-vector/patent-law-concept-with-man-weighing-scale_52683-48415.jpg?t=st=1716559019~exp=1716562619~hmac=0dd4821288087707065815de80e464a274a1c344ab513ff682a2f4442635c8f4&w=1480"/>
          </div>
        </div>
        <div className=" flex flex-col justify-center  items-center ">
          <motion.div 
          whileInView={{x:0,opacity:1}} 
          initial={{x:-1000,opacity:0}} 
          transition={{delay:0.2,type:"spring",stiffness:400,}} 
          viewport={{amount:"some"}}
            className="grid w-11/12 mx-auto grid-cols-2 gap-10 text-2xl items-center"
          >
            <div className="  w-full">
                <img src="/img1.png"/>
              </div>
            <div className={`  w-full  sticky top-0 text-start`}>
              <h1 className="text-2xl font-semibold">Proven Track Record</h1>
              <p className="text-gray-400 text-lg mt-2">With a history of successful cases and satisfied clients, our reputation speaks for itself. We are proud of our track record in securing favorable verdicts and settlements for our clients.</p>
              <motion.button variants={buttonVariants} whileHover="hover" initial="initial" className=" bg-[#004072] bg-opacity-80 text-white px-5 mt-8 py-3 rounded-full text-sm font-bold">Read more</motion.button>
            </div>
          </motion.div>
        </div>
 <div className=" py-12 flex flex-col justify-center  items-center ">
          <motion.div
            whileInView={{x:0,opacity:1}} 
            initial={{x:1000,opacity:0}} 
            transition={{delay:0.2,type:"spring",stiffness:400}} 
             viewport={{amount:"some"}}
            className="grid w-11/12 mx-auto grid-cols-2 gap-10 text-2xl items-center"
          >
             <div className={`  w-full  sticky top-0 text-start`}>
              <h1 className="text-2xl font-semibold">Wide Range of Legal Services</h1>
              <p className="text-gray-400 text-lg mt-2">Whether you need assistance with family law, corporate law, criminal defense, or any other legal matter, our diverse practice areas ensure that we have the expertise to handle your case.</p>
              <motion.button variants={buttonVariants} whileHover="hover" initial="initial" className=" bg-[#004072] bg-opacity-80 text-white px-5 mt-8 py-3 rounded-full text-sm font-bold">Read more</motion.button>
            </div>
            <div className=" py-24 w-full">
                <img src="/img2.png"/>
              </div>
           
          </motion.div>
        </div>

        
      </motion.div>
      <div className="w-full py-60 bg-slate-800"></div>

    </>
  );
};
export default AnimationPlayground;
