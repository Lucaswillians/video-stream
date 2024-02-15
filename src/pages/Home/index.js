import Banner from "components/Banner";
import Card from "components/Card";
import Title from "components/Title";
import { useEffect, useState } from "react";
import styles from './Home.module.css';

export default function Home ()
{
  const [videos, setVideos ] = useState([]);
  
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/Lucaswillians/video-stream-api/videos")
      .then(response => response.json())
      .then(data => {
        setVideos(data)
      })
  }, [])

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