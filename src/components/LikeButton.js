import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faMinusCircle } from '@fortawesome/free-solid-svg-icons'

const iconElement = <FontAwesomeIcon icon={faHeart}/>

function LikeButton({ setMovieLiked }) {

    const [buttonLiked, setButtonLiked] = useState(0)
    const [buttonColor, setButtonColor] = useState("transparent")
    const [icon, setIcon] = useState(iconElement)
    const [iconColor, setIconColor] = useState("red")

    console.log(buttonColor)



    const likeButtonClicked = (event) => {
        if (buttonLiked === 0)
        {
            setButtonLiked(1);
            setIcon(<FontAwesomeIcon icon={faMinusCircle} style={{iconColor}}/>)
            {setMovieLiked(1)};

        }
        else {
            setButtonLiked(0);
            setIcon(<FontAwesomeIcon icon={faHeart}/>)
            {setMovieLiked(0)}; 
        }
        

    }



    return (
        <div>
            <button className="likeButton" onClick={() => likeButtonClicked()}  style={{backgroundColor: buttonColor}}>{icon}</button>
        </div>
    )
}

export default LikeButton
