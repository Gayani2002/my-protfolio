import Image from "next/image";
import About from "@/component/layout/About";
import Footer from "@/component/layout/Footer";
import Navbar from "@/component/layout/Navbar";
import Projects from "@/component/layout/Projects";
import Education from "@/component/layout/Education";
import Contact from "@/component/layout/Contact";
import Skills from "@/component/layout/Skills";
import Welcome from "@/component/layout/Welcome";


export default function Home() {
  return (

    <>
      <Navbar />
      <Welcome />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>


  );
}
