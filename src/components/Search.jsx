import React, { useState, useEffect } from 'react'
import Movie from './Movie';


function Search() {
   
    //declare States
    const [searchMovies, setSearchMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value)
        console.log("HANDLEINPUTCHANGE CODE IS RUNNING")
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        //Fetch Data 
        const baseurl = 'https://api.themoviedb.org/3/search/movie?api_key=76c62a6a26e137c4e44483ea8ddb3885&language=en-US&query=';
        const query = searchQuery;
        const adult = '&include_adult=false'

        console.log(searchQuery)
        const url = baseurl+query+adult;
        console.log("THIS IS THE URL: "+url)

        const response = await fetch(url);
        const data = await response.json();          
        setSearchMovies(data.results)
        
    }

    const renderMovies = () => {
        if (searchMovies.length !== 0) {
            console.log("SEARCH: ",searchMovies)
            return searchMovies.map( (mov) => {
                return (
                <div className="movieContainer">
                    <Movie 
                        key={mov.id} 
                        movie={mov} 
                    /> 
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
            <h2>SEARCsdfsfgH</h2>
            {renderMovies()}
        </div>
    )
}

export default Search

