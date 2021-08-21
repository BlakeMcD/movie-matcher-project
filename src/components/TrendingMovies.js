import React, { Component } from 'react'

class TrendingMovies extends Component {
    render() {

        return (
            <div>
                {this.props.moviesTrending}
            </div>
        )
    }
}

export default TrendingMovies
