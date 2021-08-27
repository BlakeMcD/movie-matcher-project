import React, { useState, useContext } from 'react'
import Movie from './Movie'

export const FavouritesContext2 = React.createContext()

function Favourites() {


    const [favourite, setFavourite] = useState([])
    const [test, setTest] = useState('componentTest')

    return (
        <div>
            <h2>Favourites</h2>
            <p>This is the favourites section</p>        
            {/* <FavouritesContext.Provider>
                <Movie/>
            </FavouritesContext.Provider> */}
        </div>
    )
}

export default Favourites
