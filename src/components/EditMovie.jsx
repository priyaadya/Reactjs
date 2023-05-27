import { useRef } from "react";
import { useNavigate,useParams } from "react-router-dom";
import { useEffect } from "react";

const EditMovie = () => {

    let{id} = useParams();

    let navigate=useNavigate()
    let moviename = useRef();
    let hero = useRef();
    let heroine = useRef();
    let director = useRef();
    let genre = useRef();
    let year = useRef();
    let rating = useRef();
    let poster = useRef();
    let trailer = useRef();
    let synopsis = useRef();
    useEffect(() => {
            fetch("http://localhost:4000/movies/" + id)
                .then((res) => { return res.json() })
                .then((data) => {
                    moviename.current.value=data.moviename
                    hero.current.value=data.hero
                    heroine.current.value=data.heroine
                    director.current.value=data.director
                    genre.current.value=data.genre
                    year.current.value=data.year
                    rating.current.value=data.rating
                    poster.current.value=data.poster
                    trailer.current.value=data.trailer
                    synopsis.current.value=data.synopsis
                    //setmovie(data);
                    //setPending(false);
                })
    }, [])


        let handleEditMovie = (e)=>{
            //prevennt the reloading behaviour
        e.preventDefault()
         //create a nea movie object
        let updateMovie = {
            moviename: moviename.current.value,
            hero: hero.current.value,
            heroine: heroine.current.value,
            director: director.current.value,
            genre: genre.current.value,
            poster: poster.current.value,
            trailer: trailer.current.value,
            year: year.current.value,
            rating: rating.current.value,
            synopsis : synopsis.current.value,
            languages : []
          }
          let options = document.getElementsByName("lang");
        for(let i = 0; i < options.length; i++) 
        {
            if(options[i].checked==true)
            {
                updateMovie.languages.push( options[i].value )
            }  
        }

       
        //send the nnew movie obj to database

        fetch("http://localhost:4000/movies/"+id, 
        {
            method : "PUT" ,
            //what type of data
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(updateMovie)
        } 
        )
        .then(()=>{
            alert("movie updated in database ");
            navigate("/Moviedetails/"+id)//i want to go to the home componennt so /
            window.location.reload();
        })

    }

    return (  
        <div className="add-movie">
            <h1 id="add">Add new Movie</h1>
            <form onSubmit={handleEditMovie}>
            <input type="text" placeholder="moviename" ref={moviename}/><br/>
        <input type="text" placeholder="hero" ref={hero}/><br/>
        <input type="text" placeholder="heroine" ref={heroine}/><br/>
        <input type="text" placeholder="director"ref={director}/><br/>

        <fieldset>
            <legend>Languages</legend>
            <input type="checkbox" name="lang" value="Kannada"/><label>Kannada</label>
            <input type="checkbox" name="lang" value="Tamil"/><label>Tamil</label>
            <input type="checkbox" name="lang" value="telugu"/><label>telugu</label>
            <input type="checkbox" name="lang" value="malayalam"/><label>malayalam</label>
            <input type="checkbox" name="lang" value="hindi"/><label>hindi</label>
        </fieldset>
        <input type="text" placeholder="Genre" ref={genre}/><br/>
        <input type="url" placeholder="poster link" ref={poster}/><br/>
        <input type="url" placeholder="trailer link" ref={trailer}/><br/>
        <input type="number" min="1950" max="2024" placeholder="year" ref={year}/><br/>
        <input type="number"step="0.1" min="1" max="10" placeholder="rating" ref={rating}/><br/>
        <textarea placeholeder="synopsis" rows="6" cols="60" ref={synopsis}></textarea><br/>
        <button type="submit">Edit movie</button>
        </form>
            
        </div>

    );
}
 
export default EditMovie;