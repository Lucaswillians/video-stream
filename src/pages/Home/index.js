import Banner from "components/Banner";
import Card from "components/Card";
import Title from "components/Title";
import videos from 'json/db.json';
import styles from './Home.module.css';

export default function Home ()
{
  return (
    <div>
      <Banner image="home"/>
      <Title> <h1> Assista seus streamers e youtubers favoritos! </h1> </Title>
      <section className={styles.container}>
          {videos.map ((video) => {
            return <Card {...video} key={video.id}/>
          })}
      </section>
    </div>
  );
}