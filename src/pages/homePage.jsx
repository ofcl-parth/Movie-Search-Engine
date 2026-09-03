import React from 'react'
import MovieCard from '../components/movieCard'
import "../css/Home.css"
import {searchMovies} from "../services/api"
import {getPopularMovies} from "../services/api"

function Home() {

    const [searchQuery, setSearchQuery] = React.useState("")

    const [movies, setMovies] = React.useState([])

    React.useEffect(()=> {
        const fetchMovies= async()=>{
            try {
                const popularMovies= await getPopularMovies()
            setMovies(popularMovies)
            } catch(error){
                console.error("Error fetching popular movies:", error)
            }
        }
        fetchMovies();
    }, [])

    async function searchMovie(event) {
        event.preventDefault()
        try {
            const results= await searchMovies(searchQuery)
            setMovies(results)
        } catch(error){
            console.error("Error searching movies:", error)
        }
    }

  return (
    <>
    <div className="home">

        <form onSubmit={searchMovie} className="search-form">
            <input type="text" placeholder="Search for movies..." className="search-input" value={searchQuery} onChange={(Event) => setSearchQuery(Event.target.value)}/>

            <button type="submit" className="search-btn">Search</button>
        </form>
        
        <div className="movies-grid">
            {movies.map(movie => movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && <MovieCard key={movie.id} movie={movie} />)}
        </div>
    </div>
    </>
  )
}

export default Home
