import React, { useContext, useState } from 'react'
import Title from '../Title'
import Favourites from '../Favourites'
import Search from '../Search'
import TrendingMovies from '../TrendingMovies'
import GenreDrama from '../GenreDrama'
import GenreComedy from '../GenreComedy'
import GenreThriller from '../GenreThriller'
import GenreAnimation from '../GenreAnimation' 

export const FavouritesContext = React.createContext();

function Home() {

    const [faveMovie, setFaveMovie] = useState([])

    return (
        <div className="bodyContentUnderNav">
            <FavouritesContext.Provider value={{faveMovie, setFaveMovie}}>
                {/* <Title/> */}
                <Favourites/>
                <Search/>
                <TrendingMovies/>
                <GenreDrama/>
                <GenreComedy/>
                <GenreThriller/>
                <GenreAnimation/>
            </FavouritesContext.Provider>
        </div>
    )
}

export default Home
