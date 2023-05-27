import { useEffect,useState } from "react"
import MoviesList from "./MoviesList";

const Relevant = ({genre}) => {
    let[movies, setmovies] = useState(null);
    useEffect(() => {
            fetch("http://localhost:4000/movies")
                .then((res) => { return res.json() })
                .then((data) => {
                    console.log(data);
                    setmovies(data);
                })
    }, [])

    return (  
        <div className="ralevant-movies">
            <h1>{genre}</h1>
            {movies && <MoviesList movies={movies.filter((m)=>{return m.genre.includes(genre)})} title="Relevent Movies"/>}
        </div>

    );
}
 
export default Relevant;