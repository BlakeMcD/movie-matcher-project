import React, { Component } from 'react'
import Title from './components/Title'
import SearchBarClass from './components/SearchBarClass'
import Favourites from './components/Favourites'
import MovieInfo from './components/MovieInfo'
import MovieInfoFunc from './components/MovieInfoFunc'

export class App extends Component {
  render() {
    return (
      <div>
        <Title/>
        {/* <SearchBarClass/> */}
        {/* <Favourites/> */}
        <MovieInfo/>
        <MovieInfoFunc/>
      </div>
    )
  }
}

export default App

