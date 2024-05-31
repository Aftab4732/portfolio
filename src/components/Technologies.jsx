import {RiReactjsLine} from "react-icons/ri";
import {SiMongodb} from "react-icons/si";
import {FaNodeJs} from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPhp } from "react-icons/fa6";
import { FaPython } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { animate, motion } from "framer-motion";

// const iconVariants=(duration)=>({
//     initial:{y:-10},
//     animate:{
//         y:[10,-10],
//         transition:{
//             duration:duration,
//             ease:"linear",
//             repeat:Infinity,
//             repeatType:"reverse",
//         },
//     },
// });
const Technologies = () => {
  return (
    <div className="border-b border-slate-950 pb-24">
        <motion.h2
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}} className="my-20 text-center text-4xl">
        Technologies 
        </motion.h2>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-centers justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
            </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className="text-7xl text-green-400"/>
            </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className="text-7xl text-green-400"/>
            </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiTailwindCssFill className="text-7xl text-cyan-300"/>
            </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMysql className="text-7xl text-blue-600"/>
            </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaHtml5 className="text-7xl text-red-700"/>
            </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <IoLogoJavascript className="text-7xl text-yellow-300"/>
            </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaPhp className="text-7xl text-purple-400"/>
            </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaPython className="text-7xl text-blue-400"/>
            </div>
            </motion.div></div>
  )
}

export default Technologies;