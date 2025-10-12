
import About from "@/component/layout/About";
import Footer from "@/component/layout/Footer";
import Navbar from "@/component/layout/Navbar";
import Projects from "@/component/layout/Projects";
import Contact from "@/component/layout/Contact";
import Skills from "@/component/layout/Skills";
import Welcome from "@/component/layout/Welcome";
import Blogs from "@/component/layout/Blogs";


export default function Home() {
  return (

    <>
      <Navbar />
      <Welcome />
      <About />
      <Skills />
      <Projects />
      <Blogs />
      <Contact />
      <Footer />
    </>


  );
}
