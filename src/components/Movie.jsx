import React, { useState } from 'react'
import LikeButton from './LikeButton';

const posterWidth = 'w342';
const posterBaseUrl = 'https://image.tmdb.org/t/p/';
const posterBaseUrlAndWidth = posterBaseUrl + posterWidth;

function Movie({title, poster_path, overview, vote_average}) {

    const [movieLiked, setMovieLiked] = useState(0);

    // const changeLikedStatus = () => {
    //     if (liked === 0) {
    //         setLiked(1)
    //     }
    //     else {
    //         setLiked(0)
    //     }
    //     console.log("This is the value of liked: "+liked)
    // }
   

    return (
        <div className = "movie">  
            <img className= "movieImg" src={posterBaseUrlAndWidth + poster_path} alt={title}/>
            <div className="movieInfo">
                <h3>{title}</h3>
                <p>movieLiked = {movieLiked}</p>
                <span>{vote_average}</span>
            </div>

            <div className="movieOverview">
               <h3>{title}</h3> 
               <p>{overview}</p>
            </div>

            <div>
                <LikeButton setMovieLiked={setMovieLiked} />
            </div>
        </div>
    )
}

// style={{backgroundColor: "red"}}

export default Movie
