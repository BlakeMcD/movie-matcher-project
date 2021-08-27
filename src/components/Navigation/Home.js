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
                <h2>THIS IS THE HOME PAGE

                Why can't I see anything??????
                </h2>
            </FavouritesContext.Provider>
        </div>
    )
}

export default Home
