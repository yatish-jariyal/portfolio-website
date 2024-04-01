import styles from "./Me.module.css";

const Me = () => {
  return (
    <div className={styles.container}>
      <div>
        Hi, I&apos;m <span className={styles.specialText}>Yatish</span>, a&nbsp;
        <span className={styles.specialText}>Fullstack developer</span>
        &nbsp;specializing in the MERN stack. I enjoy building and deploying web
        applications.
      </div>
      <div>
        I&apos;m driven by curiosity and love solving problems. I&apos;m
        constantly learning new technologies to stay up-to-date.
      </div>
      <div>
        Coding stuff aside, I spend my time playing or watching football,
        watching movies and listening to music.
      </div>
    </div>
  );
};

export default Me;
