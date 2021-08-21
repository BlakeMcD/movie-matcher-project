import React, { Component } from 'react'
import TrendingMovies from './TrendingMovies'

class MovieInfo extends Component {

    state = {
        trendingMoviesArray: [],
        test: "Is Test Working???"
    }

    test = () => {
        console.log(this.state.trendingMoviesArray.title)
    }   

    componentDidMount = async () => {
        //Default URL 
        const url = 'https://api.themoviedb.org/3/trending/movie/day?api_key=76c62a6a26e137c4e44483ea8ddb3885&include_adult=false'

        //Fetch Data
        const response = await fetch(url);
        const data = await response.json();

        //Set State
        this.setState({trendingMoviesArray: data.results, loading: false})
        console.log(data);
        console.log(url);
    }

    renderMovies = () => {
        if (this.state.trendingMoviesArray.length !== 0) {
            return this.state.trendingMoviesArray.map( (mov) => {
                return <div>{mov.title}</div> 
            })
        } 
        else {
            return <h2>No Movies Available</h2> 
        }   
    }

    render() {
        return (
            <div>
                <div>
                    <TrendingMovies moviesTrending={this.state.test}/>
                </div>
                <div>
                   {this.renderMovies()}
                </div>
            </div>
        )
    }
}

export default MovieInfo
