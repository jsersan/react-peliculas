import styles from './PeliculaDetails.module.css'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { Spinner } from '../components/Spinner';
import { getMovieImg } from '../utils/getMovieImg';

export function PeliculaDetails() {
    const { peliculaId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [pelicula, setPelicula] = useState(null);

    // Carga de los datos de la película
    useEffect(()=>{
        setIsLoading(true);
        get("/movie/" + peliculaId).then((data) => {
            setPelicula(data);
            setIsLoading(false);
        });
         get("/movie/" + peliculaId + "/credits").then((data) => {
            console.log(data);   // Reparto de la película
            setIsLoading(false);
        });
    },[peliculaId]);

    if (isLoading){
        return <Spinner/>
    }

    console.log(pelicula);

    const imageUrl = getMovieImg(pelicula.poster_path, 500 );
    return <div className={styles.detailsContainer}>
        <img 
            className= {`${styles.col} ${styles.peliculaImage}`} 
            src={imageUrl} 
            alt={pelicula.title} />
        <div className= {`${styles.col} ${styles.PeliculaDetails}`}>
            <p><strong>Título:</strong> {pelicula.title}</p>
            <p>
              <strong>Género:{" "}</strong>{pelicula.genres.map(genre=> genre.name).join(", ")}  
            </p>
            <p><strong>Descripción:</strong> {pelicula.overview}</p>
        </div>
    </div>;
}