import styles from "./Banner.module.css";

export default function Banner({ image }) {
  return (
    <img
      className={styles.cover}
      src={`/assets/banner-${image}.png`}
    ></img>
  );
}
