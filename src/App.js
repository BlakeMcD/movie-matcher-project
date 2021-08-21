import React, { Component } from 'react'
import Title from './components/Title'
import TrendingMovies from './components/TrendingMovies'

export class App extends Component {
  render() {
    return (
      <div className="topContainer">
        <Title/>
        {/* <SearchBarClass/> */}
        {/* <Favourites/> */}
        {/* <MovieInfo/>
        <MovieInfoFunc/> */}
        <TrendingMovies/>
      </div>
    )
  }
}

export default App

