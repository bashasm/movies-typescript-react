import React, { useEffect, useState } from "react";
import "./App.css";
import Movie from "./components/Movie";
import { IMovie } from "./interfaces/interface";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  async function fetchMovies(url: string) {
    const response = await fetch(url).then((res) => res.json());
    setMovies(response.results);
  }

  function searchMovies() {
    fetchMovies(SEARCH_API + searchTerm);
  }

  useEffect(() => {
    fetchMovies(FEATURED_API);
  }, []);

  const onHandleSubmit = (e: React.ChangeEvent<any>) => {
    console.log(e);
    e.preventDefault();
    searchMovies();
  };

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <header>
        <form action="" onSubmit={onHandleSubmit}>
          <input
            type="text"
            value={searchTerm}
            className="search"
            placeholder="Search..."
            onChange={onTextChange}
          />
        </form>
      </header>
      <div className="movies">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}

export default App;
