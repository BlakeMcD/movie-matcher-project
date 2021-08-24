import React, { useState, useEffect} from 'react'
import Movie from './Movie';


function Search() {
   
    //declare States
    const [searchMovies, setSearchMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(true)


    //First run 
    let url = 'https://api.themoviedb.org/3/discover/movie?api_key=76c62a6a26e137c4e44483ea8ddb3885&language=en-US&include_adult=false&include_video=false&page=1&year=1995&with_original_language=en'
  
    console.log("THE VALUE OF LOADING IS: "+loading)

    useEffect( async() => {
        //Fetch Data
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data)
       
        setSearchMovies(data.results)
        console.log("this is the searchMovies:" + searchMovies)
        console.log(searchMovies)
    }, [])  


    const handleSubmit = async (event) => {
        event.preventDefault();
        setSearchMovies([])
        console.log("handleSubmitForm")

        //Make New Search
        const baseurl = 'https://api.themoviedb.org/3/search/movie?api_key=76c62a6a26e137c4e44483ea8ddb3885&language=en-US&query=';
        const query = searchQuery;
        const adult = '&include_adult=false'
        const url = baseurl+query+adult;

        //Fetch Data
        const response = await fetch(url);
        const data = await response.json();

        //Set State
        console.log("These are the data results:")
        
        setSearchMovies(data.results)
        console.log(data.results)
        console.log(searchMovies)
        setLoading(false)
        console.log("THE VALUE OF LOADING IS: "+loading)


        //render Movies again 
        console.log("is this working?")
        renderMovies()
    }

    const handleInputChange = (event) => {
        setSearchQuery({searchQuery: event.target.value})
    }

    const renderMovies = () => {
        if (searchMovies.length !== 0) {
            console.log("IS THIS RENDERING A SECOND TIME? ",searchMovies)
            return searchMovies.map( (mov) => {
                return (
                <div className="movieContainer">
                    <Movie 
                        key={mov.id} 
                        title={mov.title} 
                        poster_path={mov.poster_path} 
                        overview={mov.overview} 
                        vote_average={mov.vote_average}/> 
                </div>) 
            })
        } 
        else {
            return <h2>No Movies Available</h2> 
        }   
    }

    return (
        <div>
            <form className="Search" onSubmit={handleSubmit}>
                <input type="text" placeholder="Search..." onChange={handleInputChange}/> 
                <button>Search...</button>
            </form>
            <h2>Search</h2>
            {/* {renderMovies()} */}
        </div>
    )
}

export default Search

{/* <form onSubmit={this.handleSubmit}>
//               <input type="text" onChange={this.handleInputChange}/>
//               <button>Search...</button>
//           </form> */}
//           {/* <button onClick={() => this.fave()}>Favourite</button> */}
//           <button onClick={() => this.props.makeFavourite(this.state.movie.title)}>Favourite</button>
//           <button onClick={() => this.prevMovie()}>Prev</button>
//           <button onClick={() => this.nextMovie()}>Next</button>
//           {this.state.loading || !this.state.movie ? (
//           <div>loading...</div>
//           ) : (
//           <div><img src={this.state.moviePoster} alt={this.state.movie.title}/>{this.state.movie.title}</div>)}



//REFERENCE CODE
// async componentDidMount() {

        
//     // const baseurl = 'https://api.themoviedb.org/3/search/movie?api_key=76c62a6a26e137c4e44483ea8ddb3885&query=';
//     // const query = this.state.query;
//     // const url = baseurl+query;

//     //Default URL 
//     const url = 'https://api.themoviedb.org/3/trending/movie/day?api_key=76c62a6a26e137c4e44483ea8ddb3885&include_adult=false'

//     //Fetch Data
//     const response = await fetch(url);
//     const data = await response.json();

//     //Set State
//     this.setState({movieArray: data.results, loading: false})
//     this.setState({movie: this.state.movieArray[this.state.count]})
//     console.log(data);
//     console.log(url);

//     //put together poster image
//     const posterWidth = 'w342'
//     const posterBaseUrl = 'https://image.tmdb.org/t/p/'
//     const posterMovieUrl = this.state.movie.poster_path;
//     const posterCompleteUrl = posterBaseUrl+posterWidth+posterMovieUrl;

//     console.log('Movie address:'+posterCompleteUrl)

//     //change moviePoster State to reflect movie poster
//     this.setState({moviePoster: posterCompleteUrl})

//     console.log('the movie poster:'+this.state.moviePoster)
// }


// render() {
//   return (
//       <div>
//           <form onSubmit={this.handleSubmit}>
//               <input type="text" onChange={this.handleInputChange}/>
//               <button>Search...</button>
//           </form>
//           {/* <button onClick={() => this.fave()}>Favourite</button> */}
//           <button onClick={() => this.props.makeFavourite(this.state.movie.title)}>Favourite</button>
//           <button onClick={() => this.prevMovie()}>Prev</button>
//           <button onClick={() => this.nextMovie()}>Next</button>
//           {this.state.loading || !this.state.movie ? (
//           <div>loading...</div>
//           ) : (
//           <div><img src={this.state.moviePoster} alt={this.state.movie.title}/>{this.state.movie.title}</div>)}

//       </div> 
//   )
// }