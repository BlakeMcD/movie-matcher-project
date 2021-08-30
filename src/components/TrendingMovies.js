import React, { useEffect, useState } from 'react'
import Movie from './Movie'

export default function TrendingMovies() {

    const url = 'https://api.themoviedb.org/3/trending/movie/day?api_key=76c62a6a26e137c4e44483ea8ddb3885&include_adult=false'
    
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
                const movie = {...mov,isLiked:false}
                return (
                <div className="movieContainer">
                    <Movie 
                        key={mov.id} 
                        movie={movie}
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
            <h2>Trending</h2>
            {renderMovies()}
        </div>
    )
}



