import './App.css';
// routing
import {Routes, Route} from "react-router-dom"

// pages
import HomePage from "./pages/Home.Page.jsx";
import MoviesPage from "./pages/Movie.Page"
import PlayPage from "./pages/Play.Page"
// slick css for sliding effects
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path='/movies/:id' element = {<MoviesPage/>}/>
      <Route path='/plays' element = {<PlayPage/>}/>
    </Routes>
  );
}
export default App;
