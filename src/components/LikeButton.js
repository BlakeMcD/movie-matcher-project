import React, { useState } from 'react'

function LikeButton({ setMovieLiked }) {

    const [buttonLiked, setButtonLiked] = useState(0)
    const [buttonColor, setButtonColor] = useState("blue")

    console.log(buttonColor)

    // const likeButtonClicked = (event) => {
    //     if (liked === true) {
    //         setLiked(false)
    //         event.target.style.color="white";
    //         event.target.style.backgroundColor="green";
    //     }
    //     else {
    //         setLiked(true)
    //         event.target.style.color="black";
    //         event.target.style.backgroundColor="orange";
    //     }
    //     // console.log(liked)
    // }

    const likeButtonClicked = (event) => {
        if (buttonLiked === 0)
        {
            setButtonLiked(1);
            setButtonColor("red")
            {setMovieLiked(1)};

            // event.target.style.color="white";
            // event.target.style.backgroundColor="purple";

        }
        else {
            setButtonLiked(0);
            setButtonColor("blue")
            {setMovieLiked(0)}; 
        }
        
        // else 
        // {
        //     {setLiked(0)}
        // }
    }



    return (
        <div>
            <button className="likeButton" onClick={() => likeButtonClicked()}  style={{backgroundColor: buttonColor}}>LikeButton</button>
        </div>
    )
}

export default LikeButton

// <button className="likeButton" style={{backgroundColor: "red"}} onClick={likeButtonClicked}  >LikeButton</button>

//This Works
{/* <button className="likeButton" onClick={() => setLiked(1)}  >LikeButton</button> */}