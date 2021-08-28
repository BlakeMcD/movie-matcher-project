import React, { useEffect, useState } from 'react'
import Movie from './Movie'

export default function TrendingMovies() {

    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=76c62a6a26e137c4e44483ea8ddb3885&with_genres=35'
    
    const [trending, setTrending] = useState([]);

    useEffect( async() => {
        //Fetch Data
        const response = await fetch(url);
        const data = await response.json();
        console.log(data) 
       
        setTrending(data.results)
        console.log("this is trending:" + trending)
        console.log(trending)
    }, [])   


    const renderMovies = () => {
        if (trending.length !== 0) {
            console.log("TRENDING: ",trending)
            return trending.map( (mov) => {
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
            <h2>Comedy</h2>
            {renderMovies()}
        </div>
    )
}



