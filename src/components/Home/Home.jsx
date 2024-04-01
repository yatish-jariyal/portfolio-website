import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainText}>I Am Web</div>
      <div className={styles.mainText}>Developer</div>
      <div className={styles.secondaryText}>
        But <span className={styles.span}>why?</span>
      </div>
    </div>
  );
};

export default Home;
