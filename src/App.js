import React, { Component } from 'react'
import Title from './components/Title'
import Favourites from './components/Favourites'
import TrendingMovies from './components/TrendingMovies'
import Search from './components/Search'

export class App extends Component {
  render() {
    return (
      <div className="topContainer">
        <Title/>
        <Favourites/>
        <Search/>
        <TrendingMovies/>
      </div>
    )
  }
}

export default App



