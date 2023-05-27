import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const MoviesList = ({movies,title}) => {

    let[favId, setFavId]=useState([]);
    let[altered, setaltered]=useState(0);

    useEffect(()=>{
        let fav=JSON.parse(localStorage.getItem("fav"));
        setFavId(fav.map((m)=>{return m.id}));
    },[altered]);

    
    let handleAddtofav=(movie)=>{
    let fav=JSON.parse(localStorage.getItem("fav"));
    fav.push(movie);
    localStorage.setItem("fav", JSON.stringify(fav));
    setaltered(altered+1);
    alert("movie added to favourite list");
    }
    let handleRemove=(id)=>{
        let fav=JSON.parse(localStorage.getItem("fav"));
        fav=fav.filter((m)=>{return m.id!=id})
        localStorage.setItem("fav", JSON.stringify(fav));
        setaltered(altered+1);
        alert("movie removed from favourite list");
        
    }

    return (
        <div>
            <h1 id="title">{title} </h1>

             <div className="movies">
                {movies.map((movie) => {
                    return (
                        <div className="movie">
                            {favId.includes(movie.id) ? 
                            <button onClick={()=>{ handleRemove(movie.id) }} className="add-btn">💕 </button> :
                            <button onClick={()=>{ handleAddtofav(movie) }} className="remove-btn">💙  </button>}
                            <Link to={`/moviedetails/${movie.id}`}>
                            <img src={movie.poster} width="250px" height="300px" alt="poster" />
                            <h2>{movie.moviename}</h2>
                            <p>{movie.genre}</p>
                            </Link>
                        </div>

                    )
                })}
            </div>

        </div>
    );
}

export default MoviesList;