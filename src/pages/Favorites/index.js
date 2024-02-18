import Banner from "components/Banner";
import styles from "./Favorites.module.css";
import Title from "components/Title";
import Card from "components/Card";
import { useFavoriteContext } from "contexts/Favorites";

export default function Favorites() {
  const { favorite } = useFavoriteContext();
  return (
    <div>
      <div className={styles.bannerContainer}>
        <Banner image="home" />
      </div>
      <Title>
        {" "}
        <h1> Meus favoritos </h1>{" "}
      </Title>
      <section className={styles.container}>
        {favorite.map((fav) => {
          return <Card {...fav} key={fav.id} />;
        })}
      </section>
    </div>
  );
}
