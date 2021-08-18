import React, { Component } from 'react'
import Title from './components/Title'
import SearchBarClass from './components/SearchBarClass'
import Favourites from './components/Favourites'

export class App extends Component {
  render() {
    return (
      <div>
        <Title/>
        {/* <SearchBarClass/> */}
        <Favourites/>
      </div>
    )
  }
}

export default App

