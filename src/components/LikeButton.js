import React, { useState, useContext } from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import { FavouritesContext } from './Navigation/Home'

const iconElement = <FontAwesomeIcon icon={faHeart}/>



function LikeButton({ setMovie, movie }) {

    const [buttonLiked, setButtonLiked] = useState(0)
    const [buttonColor, setButtonColor] = useState("transparent")
    const [icon, setIcon] = useState(iconElement)
    const [iconColor, setIconColor] = useState("red")

    const {faveMovie, setFaveMovie} =useContext(FavouritesContext)

    console.log(buttonColor)



    const likeButtonClicked = (event) => {
        if (!movie.isLiked)
        {
            setMovie((prevMovie) => ({...prevMovie,isLiked:true}))
            setButtonLiked(1);
            setIcon(<FontAwesomeIcon icon={faMinusCircle} style={{iconColor}}/>)
            setFaveMovie(prevState => {
                return [...prevState,{...movie,isLiked:true}]
            })
            // {setMovieLiked(1)};
        }
        else {
            setMovie((prevMovie) => ({...prevMovie,isLiked:false}))
            setButtonLiked(0);
            setIcon(<FontAwesomeIcon icon={faHeart}/>)
            // {setMovieLiked(0)}; 
            //remove favourite movie from favourites list
            // const findMovie = () => faveMovie.find(movie => movie.id === {movieid})
            setFaveMovie(faveMovie.filter((movies) => {
                return movies.id !== movie.id
            }))
        }
        

    }



    return (
        <div> 
            
            <button className="likeButton" onClick={() => likeButtonClicked()}  style={{backgroundColor: buttonColor}}>
                {
                    movie.isLiked ? 
                    <FontAwesomeIcon icon={faMinusCircle} style={{iconColor}}/> :
                    <FontAwesomeIcon icon={faHeart}/> 
                }   
            </button>
        </div>
    )
}

export default LikeButton
