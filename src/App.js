import './App.css';
// routing
import {Routes, Route} from "react-router-dom"
//axios Dafault varibles
import axios from 'axios';
// pages
import HomePage from "./pages/Home.Page.jsx";
import MoviesPage from "./pages/Movie.Page"
import PlayPage from "./pages/Play.Page"
// slick css for sliding effectsz
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

axios.defaults.baseURL = "https://api.themoviedb.org/3"
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path='/movie/:id' element = {<MoviesPage/>}/>
      <Route path='/plays' element = {<PlayPage/>}/>
    </Routes>
  );
}
export default App;
