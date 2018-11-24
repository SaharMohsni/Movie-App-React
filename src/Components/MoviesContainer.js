import React, {Component} from 'react'
import Header from './Header'
import MoviesList from './MoviesList';
import SearchWithName from './SearchWithName'
import SearchWithRate from './SearchWithRate';


const movieList = [ {
    picture:"https://i.pinimg.com/originals/45/a8/c4/45a8c469544013cfdf7f77106995f79d.jpg",
    title:"The Meg",
    label: " 1h 53min | Action , Horror , Sci-Fi | 10 August 2018 (USA)  ",
    rate: 4
  },
  {
    picture:"https://cdn3.movieweb.com/i/movie/lGg2fMgeBi6yswQpkdBicBtCT2V8D2/384:50/The-Maze-Runner-The-Death-Cure.jpg",
    title:"The Maze Runner The Death Cure",
    label: " 2h 23min | Action , Sci-Fi , Thriller | 7 February 2018 (Tunisia) ",
    rate: 3
  },
  {
    picture:"https://i.pinimg.com/originals/63/6a/6a/636a6a88c1a9fc38bffa6d3a5c9f95c9.jpg",
    title:"Rampage",
    label: "1h 47min | Action , Adventure , Sci-Fi | 13 April 2018 (USA)  ",
    rate: 3
  },
  {
    picture:"https://i.pinimg.com/originals/ea/a2/c8/eaa2c8fb79282d227162c8e3f32c4f3f.jpg",
    title:"Runaway Romance",
    label: "1h 30min | Drama , Romance | TV Movie 7 January 2018  ",
    rate: 2
  },
  
]
const filterMovie = (movie, minRate, searchField) => {
    return (movie.rate >= minRate) && (movie.title.toLowerCase().trim().includes(searchField.toLowerCase()))
}

class MoviesContainer extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            minRate:1,
            searchField:"",
            movieList:movieList
        };
    }
    changeTitle = (title) => {
        this.setState(
            { 
                searchField: title
            }
        )
    }
    changeMinRate= (newMinRate) => {
        this.setState(
            {
                minRate:newMinRate
            }
        )
    }
    addMovie = (newMovie = {}) => {
        this.setState(
            {
                movieList:this.state.movieList.concat(newMovie)
            }
        )
        console.log("lqllzl" , newMovie)
    }

    removeMovie = (movieToRemoveTitle) => {
        console.log(movieToRemoveTitle)
        this.setState(
          {
              movieList: this.state.movieList.filter(movie => movie.title!== movieToRemoveTitle)
            }
        )
    }
    render(){
        return (
            <div className>
                <Header/>
                <div className="container">

                    <div className="searchAria">
                        <SearchWithName  inputValue={this.state.searchField} inputChange={this.changeTitle}/>
                        <SearchWithRate rateValue={this.state.minRate} minRateChange={(newMinRate) =>this.changeMinRate(newMinRate)}/>
                    </div>
                    <div className="col-md-6 moviesGallery">
                        <MoviesList  movies=
                            {
                                this.state.movieList.filter(movie => filterMovie(movie, this.state.minRate, this.state.searchField))
                            }
                            addMovie={this.addMovie}
                            removeMovie={this.removeMovie} 
                        />
                    </div>                   
                </div>
            </div>
        )
    }
} 

export default MoviesContainer