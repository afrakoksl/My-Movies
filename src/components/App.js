import React from "react";
import MovieList from './MovieList';
import SearchBar from "./SearchBar";

class App extends React.Component {


    state =
        {
            movies: [
                            
                {
                    "name": "Saw 3D",
                    "rating": "7.5",
                    "overview": "SAW legacy, a group of Jigsaw survivors gathers to seek the support of self-help guru and fellow survivor Bobby Dagen, a man whose own dark secrets unleash a new wave of terror.",
                    "imageURL": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qHCZ6LjtmqWDfXXN28TlIC9OppK.jpg",
                    "id": 11
                },
                {
                    "name": "Blitz 007",
                    "rating": "11",
                    "overview": "A tough, renegade cop with a gay sidekick is dispatched to take down a serial killer who has been targeting police officers. AÇIKLAMA AÇIKLAMA",
                    "imageURL": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qCPMjT8Ld8tvs1zs7LY2jpKlRIK.jpg",
                    "id": 12
                },
                {
                    "name": "Hostage",
                    "rating": "6.3",
                    "imageURL": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/4hne3v6jN4MlCnhSkxOW7YspJhr.jpg",
                    "overview": "When a mafia accountant is taken hostage on his beat, a police officer – wracked by guilt from a prior stint as a negotiator – must negotiate the standoff, even as his own family is held captive by the mob.",
                    "id": 13
                },

                {
                    "id": 4,
                    "name": "Rogue",
                    "rating": 7.4,
                    "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                    "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/uOw5JD8IlD546feZ6oxbIjvN66P.jpg"
                },

                {
                    "id": 5,
                    "name": "Project Power",
                    "rating": 6.7,
                    "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                    "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/TnOeov4w0sTtV2gqICqIxVi74V.jpg"
                },

                {
                    "id": 6,
                    "name": "Superman",
                    "rating": 7.6,
                    "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                    "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/6Bbq8qQWpoApLZYWFFAuZ1r2gFw.jpg"
                }
            ],
            searchQuery:""
 
 
        }


    deleteMovie = (movie) => {
        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        );
        this.setState(state => ({
            movie: newMovieList
        }));
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar />
                    </div>
                </div>
                <MovieList
                    movies={this.state.movies}
                    deleteMovieProp={this.deleteMovie}
                />
            </div>
        )
    }
}


export default App;