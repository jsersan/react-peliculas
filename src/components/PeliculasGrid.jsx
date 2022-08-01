import { useEffect, useState } from "react";
import { PeliculaCard } from "./PeliculaCard";
import styles from "./PeliculasGrid.module.css";
import { get } from "../utils/httpClient";
import {Spinner} from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

import { Empty } from "./Empty";

export function PeliculasGrid({search}) {

  const [peliculas, setPeliculas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  
  useEffect(()=> {
    setIsLoading(true);
    const searchUrl = search 
      ? "/search/movie?query=" + search + "&page=" + page 
      : "/discover/movie?page=" + page;

    get(searchUrl).then((data) => {
          console.log(data);
          setPeliculas(prevMovies => prevMovies.concat(data.results));
          setHasMore(data.page < data.total_pages)
          setIsLoading(false);
    });
  },[search, page]);

  if (!isLoading && peliculas.length === 0){
    return <Empty />
  }

  return (
   <InfiniteScroll 
      dataLength={peliculas.length} 
      hasMore={hasMore}
      next={()=> setPage((prevPage) => prevPage + 1 )}
      loader={<Spinner />}
    >
      <ul className = {styles.peliculasGrid}>
      {peliculas.map((pelicula) => (
        <PeliculaCard key={pelicula.id} pelicula= {pelicula} />
      ))}
    </ul>
    </InfiniteScroll>     
  );
}
