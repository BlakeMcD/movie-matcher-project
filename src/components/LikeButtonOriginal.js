import React, { useState } from 'react'
import LikeButton from './LikeButton'

function LikeButton() {

    const [liked, setLiked] = useState(false)

    const likeButtonClicked = (event) => {
        if (liked === true) {
            setLiked(false)
            event.target.style.color="white";
            event.target.style.backgroundColor="green";
        }
        else {
            setLiked(true)
            event.target.style.color="black";
            event.target.style.backgroundColor="orange";
        }
        // console.log(liked)
    }

    return (
        <div>
            <button className="likeButton" setCount={setCount}>LikeButton</button>
        </div>
    )
}

export default LikeButton
