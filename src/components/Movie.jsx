import React, { useState, useContext, useEffect } from 'react'
import { FavouritesContext } from './Navigation/Home';

import LikeButton from './LikeButton';

const posterWidth = 'w185';
const posterBaseUrl = 'https://image.tmdb.org/t/p/';
const posterBaseUrlAndWidth = posterBaseUrl + posterWidth;



function Movie({movie}) {
    console.log("PROPS: ", movie)
    const [movieLiked, setMovieLiked] = useState(0);
    const {faveMovie, setFaveMovie} = useContext(FavouritesContext)
    const [justLiked, setJustLiked] = useState(false)

    useEffect( () => {
        if (movieLiked === 1 && justLiked === false) {
            setJustLiked(true)
            setFaveMovie(prevState => {
                return [...prevState,movie]
            })
        }
        else if (movieLiked === 0 && justLiked === true) {
            setJustLiked(false)
            setFaveMovie(faveMovie.filter((movies) => {
                return movies.id !== movie.id}))
        }
    },[movieLiked])

    return (
        <div>
            {/* <h2> IS THIS WORKING?</h2> */}
            <div className = "movie">  
                <img className= "movieImg" src={posterBaseUrlAndWidth + movie.poster_path} alt={movie.title}/>
                <div className="movieInfo">
                    <h3 className="movieTitle">{movie.title}</h3>
                    {/* <p>movieLiked = {movieLiked}</p> */}
                    {/* <span>{movie.vote_average}</span> */}
                </div>

                <div className="movieOverview">
                    <h3>{(movie.vote_average == 0) ? "Coming Soon" : movie.vote_average}</h3> 
                    <p>{movie.overview}</p>
                </div>

                <div>
                    <LikeButton setMovieLiked={setMovieLiked} movieid={movie.id}/>
                </div>
            </div>
        </div>
    )
}

// style={{backgroundColor: "red"}}

export default Movie


// useEffect( () => {
//     if (movieLiked === 1) {
//         setFaveMovie(prevState => {
//             return [...prevState,movie]
//         })
//     }
//     else if (movieLiked === 0) {
//         setFaveMovie(faveMovie.filter((movies) => {
//             return movies.id !== movie.id}))
//     }
// },[movieLiked])