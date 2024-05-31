import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Technologies from "./components/Technologies"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
const App = () => {
  return (
    <div className="overflow-x-hidden text-black antialiased selection:bg-orange-200 selection:text-cyan-950">
    
      <div className="fixed top-0 -z-10 h-full w-full">
      
        
<div className="absolute top-0 z-[-2] h-screen w-screen bg-white">
    <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#8888882e_1px,transparent_1px),linear-gradient(to_bottom,#8888882e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
    </div>
</div>
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        </div>
        <div className="container mx-auto px-9">
      <Navbar/>
      <Hero />
      <About />
      <Technologies />
      <Experience />
      <Projects />
      <Contact />
        </div>
        </div>
    
  )
}

export default App