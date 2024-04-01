import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Skills.module.css";
import {
  faCss3Alt,
  faGithub,
  faHtml5,
  faJs,
  faNode,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gradient} />
      <div className={`${styles.one} ${styles.skill}`}>
        <FontAwesomeIcon icon={faReact} size="2x" />
      </div>
      <div className={`${styles.two} ${styles.skill}`}>
        <FontAwesomeIcon icon={faJs} size="2x" />
      </div>
      <div className={`${styles.three} ${styles.skill}`}>
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </div>
      <div className={`${styles.four} ${styles.skill}`}>
        <FontAwesomeIcon icon={faNode} size="2x" color="white" />
      </div>
      <div className={`${styles.five} ${styles.skill}`}>
        <FontAwesomeIcon icon={faHtml5} size="2x" />
        <FontAwesomeIcon icon={faPlus} />
        <FontAwesomeIcon icon={faCss3Alt} size="2x" />
      </div>
      <div className={`${styles.six} ${styles.skill}`}>Bootstrap</div>
      <div className={`${styles.seven} ${styles.skill}`}>Tailwind JS</div>
      <div className={`${styles.eight} ${styles.skill}`}>Typescript</div>
      <div className={`${styles.nine} ${styles.skill}`}>MondoDB</div>
      <div className={`${styles.ten} ${styles.skill}`}>Redux</div>
      <div className={`${styles.eleven} ${styles.skill}`}>SQL</div>
    </div>
  );
};

export default Skills;
