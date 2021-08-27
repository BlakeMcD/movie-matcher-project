import React, { useState, useContext } from 'react'
import Movie from './Movie'
import { FavouritesContext } from './Navigation/Home';

// export const FavouritesContext2 = React.createContext()

function Favourites() {

    const {faveMovie} = useContext(FavouritesContext)

    const [favourite, setFavourite] = useState([])
    const [test, setTest] = useState('componentTest')

    return (
        <div>
            <h2>Favourites</h2>
            <p>This is the favourites section</p>        
            {faveMovie.map((mov) => {
                return (
                <div className="movieContainer">
                    <Movie 
                        key={mov.id} 
                        movie={mov} 
                    /> 
                </div>
                )
                })
            }
        </div>
    )
}

export default Favourites
