import React, { useState } from 'react'

function LikeButton({ setMovieLiked }) {

    const [buttonLiked, setButtonLiked] = useState(0)
    const [buttonColor, setButtonColor] = useState("blue")

    console.log(buttonColor)



    const likeButtonClicked = (event) => {
        if (buttonLiked === 0)
        {
            setButtonLiked(1);
            setButtonColor("red")
            {setMovieLiked(1)};

        }
        else {
            setButtonLiked(0);
            setButtonColor("blue")
            {setMovieLiked(0)}; 
        }
        

    }



    return (
        <div>
            <button className="likeButton" onClick={() => likeButtonClicked()}  style={{backgroundColor: buttonColor}}>LikeButton</button>
        </div>
    )
}

export default LikeButton
