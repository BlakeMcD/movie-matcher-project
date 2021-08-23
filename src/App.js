import React, { Component } from 'react'
import Title from './components/Title'
import Favourites from './components/Favourites'
import TrendingMovies from './components/TrendingMovies'
import Search from './components/Search'
import Nav from './components/Navigation/Nav'
import Home from './components/Navigation/Home'
import About from './components/Navigation/About'
import ContactUs from './components/Navigation/ContactUs'
import { BrowserRouter, Route } from 'react-router-dom'

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="topContainer">
          <Nav/>
          <Route path="./" exact component={Home}/>
          <Route path="./about" component={About}/>
          <Route path="./contactus" component={ContactUs}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App





