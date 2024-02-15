import Banner from 'components/Banner';
import Title from 'components/Title';
import { useParams } from 'react-router-dom';
import styles from './Player.module.css'
import NotFound from 'pages/NotFound';
import { useEffect, useState } from 'react';

export default function Player ()
{
  const [video, setVideo] = useState();
  const params = useParams();

  useEffect(() => { 
    fetch(
      `https://my-json-server.typicode.com/Lucaswillians/video-stream-api/videos?id=${params.id}`
    ).then(response => response.json()).then(data => {
      setVideo(...data)
    })
  }, [])

  console.log(video)
  
  if (!video) return <NotFound/>

  return (
    <>
      <Banner image="player" />
      <Title>
        {" "}
        <h1> Se liga nessa cena! </h1>{" "}
      </Title>
      <section className={styles.container} style={{ display: 'flex' }}>
        <iframe
          width="100%"
          height="100%"
          src={video.link_video}
          title={video.nome}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </section>
    </>
  );
} 