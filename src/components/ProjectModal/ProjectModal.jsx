/* eslint-disable react/prop-types */
import styles from "./ProjectModal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ecommImage from "../../assets/ecomm.png";
import jobappImage from "../../assets/jobapp.png";
import youtubeImage from "../../assets/youtube.png";
import picsomeImage from "../../assets/picsome.png";
import keepImage from "../../assets/keep.png";
import chessImage from "../../assets/chess.png";

const projectsData = {
  jobapp: {
    info: "An application to store all your interview information built using MongoDB, Express JS, React JS and Node JS",
    image: jobappImage,
    githubLink: "https://github.com/yatish-jariyal/JobApplicationTracker",
    demoLink:
      "https://job-app-tracker-frontend-m5vdnipxo-yatish-jariyal.vercel.app/",
  },
  ecomm: {
    info: "Digital Cube is an e-commerce website built using MongoDB, Express JS, React JS and Node JS",
    image: ecommImage,
    githubLink: "https://github.com/yatish-jariyal/Ecommerce-Website",
    demoLink: "https://digitalcube.onrender.com/",
  },
  chess: {
    info: "2 player Chess game built using React JS and lichess API",
    image: chessImage,
    githubLink: "https://github.com/yatish-jariyal/Online-Chess",
    demoLink:
      "https://online-chess-frontend-eri7g29l6-yatish-jariyal.vercel.app/",
  },
  youtube: {
    info: "Youtube clone using ReactJS and Youtube API",
    image: youtubeImage,
    githubLink: "https://github.com/yatish-jariyal/youtube-clone",
    demoLink: "https://youtube-clone-1-9zho.onrender.com/",
  },
  picsome: {
    info: "E-commerce website built to buy pictures, using React JS",
    image: picsomeImage,
    githubLink: "https://github.com/yatish-jariyal/PicSome",
    demoLink: "https://pic-some-pi.vercel.app/",
  },
  keep: {
    info: "A simple Google Keep clone built using javascript",
    image: keepImage,
    githubLink: "https://github.com/yatish-jariyal/GoogleKeepClone",
    demoLink: "https://google-keep-clone-alpha-two.vercel.app/",
  },
};

export const ProjectModal = ({ closeModal, project }) => {
  const { info, image, githubLink, demoLink = "" } = projectsData[project];

  const onSeeCode = () => {
    githubLink && window.open(githubLink, "_blank");
  };

  const onVisitWebsite = () => {
    demoLink && window.open(demoLink, "_blank");
  };
  return (
    <>
      <div className={styles.blurredBg}></div>
      <div className={styles.modalContainer}>
        <button className={styles.closeButton} onClick={() => closeModal()}>
          <FontAwesomeIcon icon={faXmark} size="xl" color="white" />
        </button>
        <div className={styles.modalBody}>
          <div className={styles.imgContainer}>
            <img
              src={image}
              alt=""
              className={styles.projectImage}
              style={{ width: "100%" }}
            />
          </div>
          <div style={{ margin: "20px 0px" }}>{info}</div>
          <div className={styles.buttonsContainer}>
            <button className={styles.codeButton} onClick={onSeeCode}>
              See Code
            </button>
            <button className={styles.websiteButton} onClick={onVisitWebsite}>
              Visit Website
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
