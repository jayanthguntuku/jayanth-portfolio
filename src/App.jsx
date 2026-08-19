import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import AIChatAgent from "./components/AIChatAgent";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="bg-hero">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <WorkExperience />
      <Projects />
      <Education />
      <Contact />
      <ScrollToTop />
      <AIChatAgent />
    </div>
  );
}

export default App;