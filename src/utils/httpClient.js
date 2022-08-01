const API = "https://api.themoviedb.org/3";

export function get(path){
    return fetch(API + path, {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTc2YzJiMjJkZmJmMDUxNGFjYzdhYzE3NWE4NjVhOCIsInN1YiI6IjYxZWFlZWQxODQ4ZWI5MDBmMDM3MzU5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MdGQnCJweURTyCl6yPGEwadTO87sGACe9LIfNqSnTXk',
          "Content-Type": 'application/json;charset=utf-8',    
          },
      })
        .then((result) => result.json())
}
