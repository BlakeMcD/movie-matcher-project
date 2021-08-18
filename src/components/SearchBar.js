// import React, {useState, useEffect} from 'react'

// function SearchBar() {

//     const [movies, setMovies ] = useState([])

//     useEffect(() => {
//         fetch('https://api.themoviedb.org/3/search/movie?api_key=76c62a6a26e137c4e44483ea8ddb3885&query=Jack+Reacher')
//             .then (response => response.json())
//             .then (data => setMovies(data))

//             .catch(err => console.log(err))
//     }, [])

//     return (
//         <div>
//             <ul>
//             {movies}
//             </ul>
//         </div>
//     )
// }

// export default SearchBar

