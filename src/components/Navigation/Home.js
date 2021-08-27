import React, { useContext, useState } from 'react'
import Title from '../Title'
import Favourites from '../Favourites'
import Search from '../SearchOriginal'
import TrendingMovies from '../TrendingMovies'

export const FavouritesContext = React.createContext();

function Home() {

    const [faveMovie, setFaveMovie] = useState("Legend of the legends")

    return (
        <div>
            <FavouritesContext.Provider value={faveMovie}>
                <Title/>
                <Favourites/>
                <Search/>
                <TrendingMovies/>
            </FavouritesContext.Provider>
        </div>
    )
}

export default Home
