/* eslint-disable react/prop-types */
import styles from "./Projects.module.css";

const Projects = ({ handleClick }) => {
  return (
    <div style={{ position: "relative" }}>
      <div className={styles.container}>
        <div onClick={() => handleClick("jobapp")} className={styles.app}>
          Job Application <br></br>Tracker
        </div>
        <div onClick={() => handleClick("ecomm")} className={styles.app}>
          E-commerce App
        </div>
        <div onClick={() => handleClick("chess")} className={styles.app}>
          Chess Game
        </div>
        <div onClick={() => handleClick("youtube")} className={styles.app}>
          Youtube Clone
        </div>
        <div onClick={() => handleClick("keep")} className={styles.app}>
          Google Keep
        </div>
        <div onClick={() => handleClick("picsome")} className={styles.app}>
          PicSome
        </div>
      </div>
    </div>
  );
};

export default Projects;
