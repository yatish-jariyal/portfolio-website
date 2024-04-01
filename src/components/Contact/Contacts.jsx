import styles from "./Contact.module.css";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.email}>
        <p>Email : </p>
        <a
          href="mailto:yatishjariyal@gmail.com"
          className={styles.emailAddress}
        >
          yatishjariyal@gmail.com
        </a>
      </div>
      <div className={styles.phone}>
        <p>Phone No. : </p>
        <p>+91 88792 94070</p>
      </div>
      <div className={styles.social}>
        <a
          href="https://github.com/yatish-jariyal"
          target="_blank"
          className={styles.github}
        >
          <FontAwesomeIcon icon={faGithub} size="2xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/yatish-jariyal/"
          target="_blank"
          className={styles.linkedIn}
        >
          <FontAwesomeIcon icon={faLinkedin} size="2xl" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
