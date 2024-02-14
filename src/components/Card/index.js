import styles from "./Card.module.css";
import FavIcon from "./favorite.png";

export default function Card({ id, title, imagem }) {
  return (
    <div className={styles.container}>
      <img src={imagem} alt={title} className={styles?.cover} />
      <h2> {title} </h2>
      <img src={FavIcon} alt="Favoritar video" className={styles?.favorites} />
    </div>
  );
}
