import React, { useState } from "react";
import { Route, Link } from "react-router-dom";

//import { MovieCard, Movie, MovieList } from "./Movies/";
import MovieCard from "./Movies/MovieCard";
import Movie from "./Movies/Movie";
import MovieList from "./Movies/MovieList";
import SavedList from "./Movies/SavedList";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route path="/movie/:id" component={Movie} />
    </div>
  );
};

export default App;
