import React, { useState, useEffect } from 'react'

//
const posterWidth = 'w342';
const posterBaseUrl = 'https://image.tmdb.org/t/p/';
const posterBaseUrlAndWidth = posterBaseUrl + posterWidth;
console.log("This is the poster base URL: " + posterBaseUrlAndWidth)

        //put together poster image
        
        // const posterMovieUrl = this.state.movie.poster_path;
        // const posterCompleteUrl = posterBaseUrl+posterWidth+posterMovieUrl;

function MovieInfoFunc() {

    // TrendingMovies = () => {
        const [trending, setTrending] = useState([]);
        const [movie, setMovie] = useState(null);

        const url = 'https://api.themoviedb.org/3/trending/movie/day?api_key=76c62a6a26e137c4e44483ea8ddb3885&include_adult=false'

        useEffect( async() => {
            //Fetch Data
            const response = await fetch(url);
            const data = await response.json();
            console.log(data)
            //destructure
            const [movie] = data.results;
            setMovie(movie)

            
            setTrending(data.results)
            //set State
            // setTrending(data)
            console.log("this is trending" + trending)
            console.log(trending)
        }, [])

        


    // }

    const renderMovies = () => {
        


        if (trending.length !== 0) {
            console.log("TRENDING: ",trending)
            return trending.map( (mov) => {
                return (
                <div>
                {mov.title} 
                    <img src={posterBaseUrlAndWidth + mov.poster_path} alt = {mov.title}/>
                </div>

                ) 
            })
        } 
        else {
            return <h2>No Movies Available</h2> 
        }   
    }



    return (
        <div>
           {movie && <div>Func Test + {movie.title}</div>}
           <div>
                {renderMovies()}
           </div>
        </div>
    )
}




export default MovieInfoFunc
