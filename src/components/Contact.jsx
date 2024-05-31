import { CONTACT } from "../constants"
import { FiMail } from "react-icons/fi";
import { FaSquarePhone } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa6";
const Contact = () => {
  return (
    <div className="border-b border-slate-950 pb-20">
        <h1 className="my-10 text-center text-4xl">Contact Me</h1>
        <div className="text-center tracking-tighter">
        <p className="my-4 flex items-center justify-center gap-4"><FaAddressCard/>{CONTACT.address}</p>
        <p className="my-4 flex items-center justify-center gap-4"><FaSquarePhone/>{CONTACT.phoneNo}</p>
        <p >
  <a href="mailto:aftabalias786@gmail.com" className=" flex items-center justify-center gap-4">
    <FiMail />
    {CONTACT.email}
  </a>
</p>

<p className="my-4 border-b border-slate-950 flex items-center justify-center gap-2"><FaRegCopyright/>2024 Aftabali Saiyed</p>
       
      
        </div>
        </div>
  )
}

export default Contact