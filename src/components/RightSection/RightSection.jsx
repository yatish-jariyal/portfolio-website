/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./RightSection.module.css";
import { faDownload, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const RightSection = ({ currentSection, handleSelect }) => {
  const downloadResume = () => {
    window.open(
      "https://drive.google.com/file/d/1hQE5_HwuV_dLSk8c7D_TafHlpg1niZzw/view",
      "_blank"
    );
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.gridContainer}>
        <div
          className={`${styles.me} ${styles.gridItem} ${
            currentSection === "me" ? styles.selected : ""
          }`}
          onClick={() => handleSelect("me")}
        >
          ME
        </div>
        <div
          className={`${styles.skills} ${styles.gridItem} ${
            currentSection === "skills" ? styles.selected : ""
          }`}
          onClick={() => handleSelect("skills")}
        >
          SKILLS
        </div>
        <div
          className={`${styles.projects} ${styles.gridItem} ${
            currentSection === "projects" ? styles.selected : ""
          }`}
          onClick={() => handleSelect("projects")}
        >
          PROJECTS
        </div>
        <div
          className={`${styles.laptop} ${styles.gridItem} ${
            currentSection === "" ? styles.selected : ""
          }`}
          onClick={downloadResume}
        >
          <FontAwesomeIcon icon={faDownload} />
          <span>Resume</span>
        </div>
        <div
          className={`${styles.console} ${styles.gridItem} ${
            currentSection === "home" ? styles.selected : ""
          }`}
          onClick={() => handleSelect("home")}
        >
          <FontAwesomeIcon icon={faLaptopCode} />
        </div>
        <div
          className={`${styles.contact} ${styles.gridItem} ${
            currentSection === "contact" ? styles.selected : ""
          }`}
          onClick={() => handleSelect("contact")}
        >
          CONTACT
        </div>
      </div>
    </div>
  );
};

export default RightSection;
