import Header from "@/components/Header";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Internships from "@/components/Internship";
import CoCurricular from "@/components/CoCurricular";
import Awards from "@/components/Awards";
import PersonalDetails from "@/components/PersonalDetails";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <About />
        <hr />
        <Education />
        <hr />
        <Skills />
        <hr />
        <Projects />
        <hr />
        <Internships />
        <hr />
        <CoCurricular />
        <hr />
        <Awards />
        <hr />
        <PersonalDetails />
        <hr />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
