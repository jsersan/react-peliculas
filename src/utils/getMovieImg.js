import placeholder from '../assets/no-image.jpeg';

export function getMovieImg(path, width){
    return path
    ? `https://image.tmdb.org/t/p/w${width}${path}`
    : placeholder;
}

