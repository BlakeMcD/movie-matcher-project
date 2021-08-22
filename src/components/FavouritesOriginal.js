import React, { Component } from 'react'
import SearchBarClass from './SearchBarClass'

class Favourites extends Component {

    state = {
        name: "Blake",
        faveMoviesArray: [],
        moviesArray: []
        // faveMovieUniqueTitleArray: ['Test2'],
        // faveMovieNumberArray: ['Test3']
    }

    checkForDuplicates = () => {

        //THIRD ATTEMPT
        const occurences = this.state.faveMoviesArray.reduce((acc, curr) => {
            return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
           }, {});
        
        console.log(occurences)

        //loop through occurences object, if value is greater than 0, create alert
        for (const value in occurences)
        {
            if (occurences[value] > 1)
            {
                console.log(`this is the value I'm trying to test: ${occurences[value]}`)
                alert("I've found a match!")
            }
                        
        }


        
        //Reference code
        // const occurrences = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4]. reduce(function (acc, curr) {
        //     return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
        //   }, {});



        //FIRST ATTEMPT
        //This code works perfectly, BUT it will return a boolean. I think I must also find a way to actually return an integer. That way if there are more than 2 people, it will still work. 
        // const array = this.state.faveMoviesArray;
        // if (array.length > 0) {
        //     const isDuplicate = array.some((element, index) => array.indexOf(element) !== index);

        //     if (!isDuplicate) {
        //         console.log(`Array doesn't contain duplicates.`);
        //     } else {
        //         console.log(`Array contains duplicates.`);
        //     }
        // }

        //SECOND ATTEMPT
        //this might work - returns two arrays: 
        // let favearr = this.state.faveMoviesArray;
        // let favearrt = this.state.faveMovieUniqueTitleArray;
        // let favearrn = this.state.faveMovieNumberArray;
        // // console.log('This bit is working!! '+favearr +favearrt + favearrn)
        // let prev = null;

        // favearr.sort();
        
        
        // for (let element of favearr){
        //     if (element !== prev) {
        //         this.setState(prevState => ({
        //             faveMovieUniqueTitleArray: [...prevState.faveMovieUniqueTitleArray, element], 
        //             faveMovieNumberArray: [...prevState.faveMovieNumberArray, 1]
        //         }))
        //     }
        //     else{
        //         console.log('nothing')
        //         // ++b[b. length - 1];
        //         faveMovieNumberArray: [...prevState.faveMovieNumberArray, +1]
        //     }
        //     prev = element;
        // }

        // console.log("The values for the favearrt array are: "+favearrt)
        // console.log("The values for the favearrn array are: "+favearrn)

        // this.setState(prevState => ({
        //     faveMoviesArray: [...prevState.faveMoviesArray, faveMovie]
        //   }))
        
        // Reference Code
        // function foo (array) {
        //     let a = [],
        //       b = [],
        //       arr = [...array], // clone array so we don't change the original when using .sort()
        //       prev;
          
        //     arr. sort();
        //     for (let element of arr) {
        //       if (element !== prev) {
        //         a. push(element);
        //         b. push(1);
        //       }
        //       else ++b[b. length - 1];
        //       prev = element;
        //     }
          
        //     return [a, b];
        //   }
          
    }

    favourite = (faveMovieName) => {
        console.log("this is called from function favourite, and they passed me is "+faveMovieName)
        //pass the value it gets from faveMovieName to state
        const faveMovie = faveMovieName;

        this.setState(prevState => ({
            faveMoviesArray: [...prevState.faveMoviesArray, faveMovie]
          }))

        // console.log(this.state.name)   
        // console.log(this)
        console.log(this.state.faveMoviesArray)

        this.checkForDuplicates();          
    }

    render() {

        //Create callback function that can be passed to child
        

        return (
            <div>
                <SearchBarClass makeFavourite={this.favourite}/>
                <SearchBarClass makeFavourite={this.favourite}/>
            </div>
        )
    }
}

export default Favourites
