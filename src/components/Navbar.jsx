import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-6 max-w-8xl mx-auto">
      <div className="flex flex-shrink-0 items-center p-2">
        <motion.h1
          variants={containerVariants} // Use the defined animation variants
          initial="hidden"
          animate="visible"
          className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8x1 bg-gradient-to-r from-green-600 via-slate-800 to-orange-500 bg-clip-text text-transparent"
        >
          Aftabali Saiyed
        </motion.h1>
      </div>
      <div className="m-8 flex items-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/saiyed-aftabali-307617245/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Aftab4732">
          <FaGithub />
        </a>
        <a href="https://instagram.com/">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/aftab9258">
          <FaXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
