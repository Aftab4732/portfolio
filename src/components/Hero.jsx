import {HERO_CONTENT} from "../constants";
import profilePic from "../assets/Aftab1.png"
import { motion } from "framer-motion";

const container=(delay)=>({
  hidden:{x:-100,opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5,delay:delay}
  }
})

const Hero = () => {
  return (
    <div className=" border-b border-slate-950 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col item-center lg:items-start">
                    <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="pb-16 text-6xl font-thin tracking-tight lg:mt-16
lg:text-8x1  bg-gradient-to-r from-green-600 via-blue-300 to-orange-500 bg-clip-text text-transparent"></motion.h1>
<motion.span
 variants={container(0.5)}
 initial="hidden"
 animate="visible"  className="bg-gradient-to-r from-red-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent ">
    Full stack Developer</motion.span>
    <motion.p
     variants={container(1)}
     initial="hidden"
     animate="visible" className="my-2 max-w-1xl py-2 font-light tracking-tighter ">{HERO_CONTENT}</motion.p>
                </div>
            </div>
            {/* <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center h-[550px] w-[550px]">
                    <img src={profilePic} alt="Aftabli Saiyed"></img>
                </div>
            </div> */}
            <div className="flex w-full lg:w-1/2 lg:p-8 justify-center pb-20 items-start pt-8 ">
  <div className="flex h-[350px] w-[350px]  overflow-hidden rounded-lg">
    <motion.img 
    initial={{x:100,opacity:0}}
    animate={{x:0,opacity:1}}
    transition={{duration:1,delay:1.2}}
    src={profilePic} alt="Aftabli Saiyed" className="h-full w-full object-cover " />
  </div>
</div>

    
        </div>
    </div>
  );
};

export default Hero;