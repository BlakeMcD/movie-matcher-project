import React from 'react'
import LikeButton from './LikeButton';

const posterWidth = 'w342';
const posterBaseUrl = 'https://image.tmdb.org/t/p/';
const posterBaseUrlAndWidth = posterBaseUrl + posterWidth;

function Movie({title, poster_path, overview, vote_average}) {
    return (
        <div className = "movie">  
            <img className= "movieImg" src={posterBaseUrlAndWidth + poster_path} alt={title}/>
            <div className="movieInfo">
                <h3>{title}</h3>
                <span>{vote_average}</span>
            </div>

            <div className="movieOverview">
               <h3>{title}</h3> 
               <p>{overview}</p>
            </div>

            <div>
                <LikeButton/>
            </div>
        </div>
    )
}

export default Movie
