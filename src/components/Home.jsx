import { useEffect, useState } from "react"
import MoviesList from "./MoviesList.jsx";
const Home = () => {
// save the data and fetch the data
    let[movies, setmovies] = useState(null);
    let [error , setError] = useState(null);
    let [pending , setPending] = useState(true);
    useEffect(()=>
    {
        if(localStorage.getItem("fav")==null)
        {
            localStorage.setItem("fav", "[]")
        }
        setTimeout(()=>{
            fetch("http://localhost:4000/movies")
            .then((res)=>{ return res.json() })
            .then((data)=>{ 
                console.log(data);
                setmovies(data);
                setPending(false);
                })
            .catch((err)=>{
                setError("404 Network issue !!! please try again later");
                setPending(false);
            })
        } , 3000)
    } , [])
    // display the data
    return (  
        <div className="home">
        {pending==true&&<h1>Loading............</h1>}
        {error && <h1> {error} </h1>}
       {movies && <MoviesList movies={movies} title="All movies"/>}
       {movies && <MoviesList movies={movies.filter((m)=>{return m.genre.includes("action")})} title="Acction movies"/>}
       {movies && <MoviesList movies={movies.filter((m)=>{return m.rating>=8.5})} title="Top Rated Movies"/>} 
       
       
       <div>
        <h1>hiiiii</h1>
       </div>
        </div>
    );
}
 
export default Home ;