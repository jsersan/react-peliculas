import { Link } from "react-router-dom";
import styles from "./PeliculaCard.module.css";
import { getMovieImg } from "../utils/getMovieImg";

export function PeliculaCard({ pelicula }) {
  const imageUrl = getMovieImg(pelicula.poster_path, 300 );
  return (
    <li className={styles.peliculaCard}>
      <Link to={"/peliculas/" + pelicula.id}>
        <img
          height={345}
          width={230}
          className={styles.peliculaImage}
          src={imageUrl}
          alt={pelicula.title}
        />
        <div>{pelicula.title}</div>
      </Link>
    </li>
  );
}
