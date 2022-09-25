import React,{useState, createContext} from 'react'

export const MovieContext = createContext();
const MovieProvider = ({children}) => {
  
    const [movie, setMovie] = useState({
        id: 0,
        original_title: "",
        overview: "",
        backdrop_path: "",
        poster_path:"",
    });
    const [isOpen , setIsOpen] = useState(false)
    const [price , setPrice] = useState(false)


    const rentMovie = ()=>{
        setIsOpen(true)
        setPrice(149)
    }

    const buyMovie = ()=>{
        setIsOpen(true);
        setPrice(449)
    }
    return (
        // sending values to MovieContext Provider
    <MovieContext.Provider value={{movie, setMovie,setIsOpen, isOpen, price, setPrice, rentMovie, buyMovie}}>
        {children}
    </MovieContext.Provider>
  )
}

export default MovieProvider;