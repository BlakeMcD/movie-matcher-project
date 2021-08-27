import React, { useContext, useState } from 'react'
import Title from '../Title'
import Favourites from '../Favourites'
import Search from '../Search'
import TrendingMovies from '../TrendingMovies'

export const FavouritesContext = React.createContext();

function Home() {

    const [faveMovie, setFaveMovie] = useState([])

    return (
        <div className="bodyContentUnderNav">
            <FavouritesContext.Provider value={{faveMovie, setFaveMovie}}>
                <Title/>
                <Favourites/>
                <Search/>
                <TrendingMovies/>
            </FavouritesContext.Provider>
        </div>
    )
}

export default Home
