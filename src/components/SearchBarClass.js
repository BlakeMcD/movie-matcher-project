import React, { Component } from 'react'

class SearchBarClass extends Component {

    state = {
        loading: true,
        movieArray: [],
        movie: null,
        moviePoster: null,
        query: 'null',
        count: 0,
        searchQuery: "",
        movieArrayFaves: []
    }

    async componentDidMount() {

        
        // const baseurl = 'https://api.themoviedb.org/3/search/movie?api_key=76c62a6a26e137c4e44483ea8ddb3885&query=';
        // const query = this.state.query;
        // const url = baseurl+query;

        //Default URL 
        const url = 'https://api.themoviedb.org/3/trending/movie/day?api_key=76c62a6a26e137c4e44483ea8ddb3885&include_adult=false'

        //Fetch Data
        const response = await fetch(url);
        const data = await response.json();

        //Set State
        this.setState({movieArray: data.results, loading: false})
        this.setState({movie: this.state.movieArray[this.state.count]})
        console.log(data);
        console.log(url);

        //put together poster image
        const posterWidth = 'w342'
        const posterBaseUrl = 'https://image.tmdb.org/t/p/'
        const posterMovieUrl = this.state.movie.poster_path;
        const posterCompleteUrl = posterBaseUrl+posterWidth+posterMovieUrl;

        console.log('Movie address:'+posterCompleteUrl)

        //change moviePoster State to reflect movie poster
        this.setState({moviePoster: posterCompleteUrl})

        console.log('the movie poster:'+this.state.moviePoster)
    }

    // Github Branch change

    nextMovie = () => {
        if (this.state.count < this.state.movieArray.length) { //make sure you can't scroll past the end of the array
            // this.setState({count: this.state.count + 1})
            console.log(this.state.count)
            this.setState({count: this.state.count + 1, movie: this.state.movieArray[this.state.count + 1]}, () => {

                //I put this as a callback to ensure that the poster would update correctly
                const posterWidth = 'w342'
                const posterBaseUrl = 'https://image.tmdb.org/t/p/'
                const posterMovieUrl = this.state.movie.poster_path;
                const posterCompleteUrl = posterBaseUrl+posterWidth+posterMovieUrl;
        
                this.setState({moviePoster: posterCompleteUrl})
            })
        }
    }

    prevMovie = () => {
        if (this.state.count > 0) { //make sure you can't scroll past the end of the array
            this.setState({count: this.state.count - 1})
            console.log(this.state.count)
            this.setState({movie: this.state.movieArray[this.state.count]}, () => {

                //I put this as a callback to ensure that the poster would update correctly
                const posterWidth = 'w342'
                const posterBaseUrl = 'https://image.tmdb.org/t/p/'
                const posterMovieUrl = this.state.movie.poster_path;
                const posterCompleteUrl = posterBaseUrl+posterWidth+posterMovieUrl;
        
                this.setState({moviePoster: posterCompleteUrl})
            })
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        console.log("handleSubmitForm")

        //reset count to 0
        this.setState({count: 0})

        //Make New Search
        const baseurl = 'https://api.themoviedb.org/3/search/movie?api_key=76c62a6a26e137c4e44483ea8ddb3885&language=en-US&query=';
        const query = this.state.searchQuery;
        const adult = '&include_adult=false'
        const url = baseurl+query+adult;

        //Fetch Data
        const response = await fetch(url);
        const data = await response.json();

        //Set State
        this.setState({movieArray: data.results, loading: false})
        this.setState({movie: this.state.movieArray[this.state.count]})
        console.log(data);
        console.log(url);

        //put together poster image
        const posterWidth = 'w342'
        const posterBaseUrl = 'https://image.tmdb.org/t/p/'
        const posterMovieUrl = this.state.movie.poster_path;
        const posterCompleteUrl = posterBaseUrl+posterWidth+posterMovieUrl;

        console.log('Movie address:'+posterCompleteUrl)

        //change moviePoster State to reflect movie poster
        this.setState({moviePoster: posterCompleteUrl})

        console.log('the movie poster:'+this.state.moviePoster)
    }

    handleInputChange = (event) => {
        this.setState({searchQuery: event.target.value})
        console.log(this.state.searchQuery)
    }

    fave = () => {
        
        console.log(this.state.movie.id)
        //push movie value into new array
        // this.setState({movieArrayFaves: this.state.movie})
        this.setState(prevState => ({
            movieArrayFaves: [...prevState.movieArrayFaves, this.state.movie]
        }))
        console.log('The Favourites Array:'+this.state.movieArrayFaves)
        console.log(this.state.movieArrayFaves)

        //test callback function 

    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleInputChange}/>
                    <button>Search...</button>
                </form>
                {/* <button onClick={() => this.fave()}>Favourite</button> */}
                <button onClick={() => this.props.makeFavourite(this.state.movie.title)}>Favourite</button>
                <button onClick={() => this.prevMovie()}>Prev</button>
                <button onClick={() => this.nextMovie()}>Next</button>
                {this.state.loading || !this.state.movie ? (
                <div>loading...</div>
                ) : (
                <div><img src={this.state.moviePoster} alt={this.state.movie.title}/>{this.state.movie.title}</div>)}

            </div> 
        )
    }
}

export default SearchBarClass
