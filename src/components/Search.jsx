import React, { useState, useEffect} from 'react'
import Movie from './Movie';


function Search() {
   
    //declare States
    const [searchMovies, setSearchMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    //Make New Search
    const baseurl = 'https://api.themoviedb.org/3/search/movie?api_key=76c62a6a26e137c4e44483ea8ddb3885&language=en-US&query=';
    const query = searchQuery;
    const adult = '&include_adult=false'
    // const url = baseurl+query+adult;
    const url = "https://api.themoviedb.org/3/search/movie?api_key=76c62a6a26e137c4e44483ea8ddb3885&language=en-US&query=hello&include_adult=false"

    useEffect( async() => {
        //Fetch Data
        const response = await fetch(url);
        const data = await response.json();          
        setSearchMovies(data.results)
    }, [searchQuery])     

    const handleInputChange = (event) => {
        setSearchQuery({searchQuery: event.target.value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        //Fetch Data
        const url2 = "https://api.themoviedb.org/3/discover/movie?api_key=76c62a6a26e137c4e44483ea8ddb3885&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27"
        const response = await fetch(url2);
        const data = await response.json();          
        setSearchMovies(data.results)
    }

    const renderMovies = () => {
        if (searchMovies.length !== 0) {
            console.log("IS THIS RENDERING A SECOND TIME? ",searchMovies)
            return searchMovies.map( (mov) => {
                return (
                <div className="movieContainer">
                    <Movie 
                        key={mov.id} 
                        title={mov.title} 
                        poster_path={mov.poster_path} 
                        overview={mov.overview} 
                        vote_average={mov.vote_average}/> 
                </div>) 
            })
        } 
        else {
            return <h2>No Movies Available</h2> 
        }   
    }

    return (
        <div>
            <form className="Search" onSubmit={handleSubmit}>
                <input type="search" placeholder="Search..." onChange={handleInputChange}/> 
                <button>Search...</button>
            </form>
            <h2>Search</h2>
            { (searchMovies.length !== 0) ? renderMovies() : console.log("Dammit")
            }

        </div>
    )
}

export default Search

