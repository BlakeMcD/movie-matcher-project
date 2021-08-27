import React, { useState, useContext, useEffect } from 'react'
import { FavouritesContext } from './Navigation/Home';

import LikeButton from './LikeButton';

const posterWidth = 'w342';
const posterBaseUrl = 'https://image.tmdb.org/t/p/';
const posterBaseUrlAndWidth = posterBaseUrl + posterWidth;



function Movie({movie}) {
    console.log("PROPS: ", movie)
    const [movieLiked, setMovieLiked] = useState(0);
    const {setFaveMovie} = useContext(FavouritesContext)

    useEffect( () => {
        if (movieLiked) {
            setFaveMovie(prevState => {
                return [...prevState,movie]
            })
        }
    },[movieLiked])

    return (
        <div>
            <h2> IS THIS WORKING?</h2>
            <div className = "movie">  
                <img className= "movieImg" src={posterBaseUrlAndWidth + movie.poster_path} alt={movie.title}/>
                <div className="movieInfo">
                    <h3>{movie.title}</h3>
                    {/* <h2>{favouriteMovie}</h2>  */}
                    <p>movieLiked = {movieLiked}</p>
                    <span>{movie.vote_average}</span>
                </div>

                <div className="movieOverview">
                    <h3>{movie.title}</h3> 
                    <p>{movie.overview}</p>
                </div>

                <div>
                    <LikeButton setMovieLiked={setMovieLiked} />
                </div>
            </div>
        </div>
    )
}

// style={{backgroundColor: "red"}}

export default Movie


{/* <div className = "movie">  
            <img className= "movieImg" src={posterBaseUrlAndWidth + movie.poster_path} alt={movie.title}/>
            <div className="movieInfo">
                <h3>{movie.title}</h3>
                {/* <h2>{favouriteMovie}</h2> }
                <p>movieLiked = {movieLiked}</p>
                <span>{movie.vote_average}</span>
            </div>

            <div className="movieOverview">
               <h3>{movie.title}</h3> 
               <p>{movie.overview}</p>
            </div>

            <div>
                <LikeButton setMovieLiked={setMovieLiked} />
            </div>
        </div> */}