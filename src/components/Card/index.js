import { useFavoriteContext } from "contexts/Favorites";
import styles from "./Card.module.css";
import FavIcon from "./favorite.png";
import unFavIcon from "./unfavorite.png";

export default function Card({ id, nome, imagem }) {
  const { favorite, addFavorite } = useFavoriteContext();
  const isFavorite = favorite.some((fav) => fav.id === id);
  const icon = isFavorite ? FavIcon : unFavIcon;

  return (
    <div className={styles.container}>
      <img src={imagem} alt={nome} className={styles?.cover} />
      <h2> {nome} </h2>
      <img
        src={icon}
        alt="Favoritar video"
        className={styles?.favorites}
        onClick={() => {
          addFavorite({ id, nome, imagem });
        }}
      />
    </div>
  );
}
