import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import Header from "./componenets/header/Header.js";
import MovieList from "./componenets/movieList/movieList";
import Movie from './pages/movieDetail/movie.js';
const App = () => {
  return (
    <div className="App">
        <Router>
          <Header />
            <Routes>
                <Route path="/" index element={<Home/>}/>
                <Route path="movie/:id" element={<Movie/>}></Route>
                <Route path="movies/:type" element={<MovieList/>}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
            
        </Router>
    </div>
  );
}

export default App;

