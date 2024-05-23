import { useAnimate,motion, useMotionValue, animate, useTransform, delay } from "framer-motion";
import { useEffect, useState } from "react";


const HomePage = () => {
 const count = useMotionValue(0)
 const [showLoader,setShowLoader] = useState(true);
 const rounded = useTransform(count,latest=>Math.round(latest))
 const variants = {
    load:(i)=>({opacity:1,x:0,transition:{delay:14.5+ (i*0.2)}}),
    begin:{opacity:0,x:100}
 }
 const skillsVariant = {
  load:(i)=>({opacity:1,y:0, transition:{delay:14.5+(i*0.2)}}),
  begin:{opacity:0,y:100}
 }
 useEffect(()=>{
 const control =  animate(count,100,{duration:15}) 
 return ()=>control.stop();
 },[])
  return (
    <div className="w-screen h-screen flex relative items-center" >
      < motion.div transition={{duration:1,delay:14}} animate={{opacity:0}} initial={{opacity:1}} className=" inset-0 absolute   flex justify-center items-center">
        <div className="w-4/12 mx-auto ">
          <div className="border border-[#4E5B52] m-4">
          <div className="bg-black py-24 flex flex-col justify-center items-center">
            <div className="flex text-3xl font-bold text-green-500"><motion.div onAnimationComplete={()=>setShowLoader(false)} initial="0">{rounded}</motion.div>%</div>
            <h1 className="text-white text-lg mt-2">Hacking website info</h1>
            <div className="bg-[#275238] w-full py-3 relative mt-2">
            <motion.div animate={{width:"100%"}} initial={{width:"0%"}} transition={{duration:15}}  className="bg-primary top-0 bottom-0 absolute"></motion.div>
            </div>
            <div></div>
          </div>
          </div>
        </div>
      </motion.div>
      <motion.div transition={{duration:1,delay:14}} animate={{opacity:1}} initial={{opacity:0}} className={`w-11/12 mx-auto py-12`}>
        <div className="border border-[#4E5B52]">
          <div className="grid grid-cols-12 px-4 gap-4">
            <div className="col-span-3">
              <div className="bg-primary py-1 px-4 text-center  my-4 text-base ">
                JOHN VEDASTUS CHUMA
              </div>
              <div className="my-4">
                <motion.div animate={{opacity:[0,0.9,0.3,0.5,0.1,1,0.3,0.1,1]}} initial={{opacity:0,}} transition={{delay:14.7,duration:3}} className=" border border-primary mt-2  pt-4 ">
                  <img className="px-4" src="/profile.png" />
                  <div className="mt-4 mb-7 mx-4 text-white text-center text-base">
                    <h1 className="">
                      TANZANIAN
                    </h1>
                    <h1 className="">
                      5 YEARS EXPERIENCE
                    </h1>
                    <h1 className="">
                      JOHNVCHUMA@GMAIL.COM
                    </h1>
                  </div>
                  <div className="bg-primary py-1 px-4 text-center  ">
                    FULL STACK DEVELOPER
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="col-span-9">
              <div className="bg-primary py-1 px-4 text-start  my-4 text-base ">
                CURRICULUM VITAE
              </div>
              <div className="border border-[#808D84] p-4 text-white uppercase text-base space-y-2">
                {[
                  { title: "Biography", content: <div></div> },
                  { title: "Work experience", content: <div></div> },
                  { title: "My Works", content: <div></div> },
                  { title: "Education background", content: <div></div> },
                  { title: "Referees", content: <div></div> },
                  
                ].map((item,index) => {
                  return (
                    <motion.div custom={index} variants={variants} animate="load" initial="begin"   className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <h1>{item.title}</h1>
                    </motion.div>
                  );
                })}
              </div>
              <div className="border border-[#808D84] p-4 mt-4 text-white uppercase text-base space-y-2">
                <div className="flex flex-wrap ">
                  {[
                    "React",
                    "Next JS",
                    "Angular",
                    "Javascript",
                    "Typscript",
                    "Tailwind CSS",
                    "Node JS",
                    "Express",
                    "Sequelize",
                  ].map((item,i) => {
                    return (
                      <motion.div variants={skillsVariant} animate="load" initial="begin" custom={i}  className="me-2 mb-2 border border-primary p-2 text-sm">
                        {item}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
              <div className="border border-[#808D84] p-4 mt-4 text-white uppercase text-base space-y-2">
              <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <h1>LANGUAGES</h1>
                    </div>
                    <div className="flex items-center pl-5 space-x-2">
                        <h1>ENGLISH</h1>
                        <div className="py-1 w-full border-[#808D84] m-2 bg-[#275238]"/>
                    </div>
                    <div className="flex items-center pl-5 space-x-2">
                        <h1>swahili</h1>
                        <div className="py-1 w-full border-[#808D84] m-2 bg-[#275238]"/>  
                    </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
