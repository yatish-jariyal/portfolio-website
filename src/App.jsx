import { useState } from "react";
import styles from "./App.module.css";
import Me from "./components/Me/Me";
import RightSection from "./components/RightSection/RightSection";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contacts";
import Home from "./components/Home/Home";
import { ProjectModal } from "./components/ProjectModal/ProjectModal";

const sections = ["me", "skills", "projects", "home", "contact"];

function App() {
  const [currentSection, setCurrentSection] = useState("home");
  const [showModal, setShowModal] = useState(false);
  const [project, setProject] = useState(null);

  const handleClick = (id) => {
    setShowModal(true);
    setProject(id);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSelect = (sectionName) => {
    setCurrentSection(sectionName);
  };

  return (
    <>
      <div className={showModal ? styles.blurredBg : ""}>
        <div className={styles.main}>
          <div className={styles.left}>
            {currentSection === "me" && <Me />}
            {currentSection === "skills" && <Skills />}
            {currentSection === "projects" && (
              <Projects handleClick={handleClick} />
            )}
            {currentSection === "home" && <Home />}
            {currentSection === "contact" && <Contact />}
          </div>
          <div className={styles.right}>
            <RightSection
              currentSection={currentSection}
              handleSelect={handleSelect}
            />
          </div>
        </div>
      </div>
      {showModal ? (
        <ProjectModal closeModal={closeModal} project={project} />
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
