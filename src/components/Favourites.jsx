import { useEffect, useState } from "react";
import MoviesList from "./MoviesList";

const Favourites = () => {
    let[favouriteMovies, setFav] = useState(null);
useEffect(()=>{
    setFav(JSON.parse(localStorage.getItem("fav")))
},[])

    return ( 
        <div>
            {favouriteMovies &&
            <MoviesList movies={favouriteMovies} title="Favourite movies"/>}
        </div>
     );
}
 
export default Favourites;