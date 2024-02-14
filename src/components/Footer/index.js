import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import github from './github.png'
import linkedin from "./linkedin.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to="https://www.linkedin.com/in/lucas-willian-22a437240/" target="_blank">
        <img src={linkedin} alt="Logo do Linkdin"></img>
      </Link>
      <h2>Lucas Willian</h2>
      <Link to="https://github.com/Lucaswillians" target="_blank">
        <img src={github} alt="Logo do Github"></img>
      </Link>
    </footer>
  );
}
