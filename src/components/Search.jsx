import React, { useState, useEffect} from 'react'
import Movie from './Movie';


function Search() {
   
    //declare States
    const [searchMovies, setSearchMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const url = "https://api.themoviedb.org/3/search/movie?api_key=76c62a6a26e137c4e44483ea8ddb3885&language=en-US&query=hello&include_adult=false"

    useEffect( async() => {
        //Fetch Data
        const response = await fetch(url);
        const data = await response.json();          
        setSearchMovies(data.results)
    }, [searchQuery])     

    const handleInputChange = (event) => {
        setSearchQuery({searchQuery: event.target.value})
        console.log("HANDLEINPUTCHANGE CODE IS RUNNING")
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        //Fetch Data 
        const baseurl = 'https://api.themoviedb.org/3/search/movie?api_key=76c62a6a26e137c4e44483ea8ddb3885&language=en-US&query=';
        // const query = searchQuery;
        const query = "Flash"
        const adult = '&include_adult=false'

        console.log(searchQuery)
        const url2 = baseurl+query+adult;
        console.log("THIS IS URL2: "+url2)

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
                <input type="text" placeholder="Search..." onChange={handleInputChange}/> 
                <button>Search...</button>
            </form>
            <h2>Search</h2>
            { (searchMovies.length !== 0) ? renderMovies() : console.log("Dammit")
            }

        </div>
    )
}

export default Search

