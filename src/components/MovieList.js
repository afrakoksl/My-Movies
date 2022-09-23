import React from "react";

const MovieList = (props) => {
 
    //function handleClick(event) {
//console.log(event)
   //}
  
    return (
        <div className="row">

            {props.movies.map((movei) => (

                <div className="col-lg-4" key={movei.id}>
                    <div className="card mb-4 shadow-sm">
                        <img
                            src={movei.imageURL}
                            className="card-img-top"
                            alt="Sample Movie"
                        />
                        <div className="card-body">
                            <h5 className="car-title">{movei.name}</h5>
                            <p className="card-text">{movei.overview}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <button type="button"  onClick={(event) => console.log(event.pageX) } className="btn btn-md btn-outline-danger">DELETE</button>
                                <h2><span className="badge badge-info">{movei.rating}</span></h2>
                            </div>
                        </div>
                    </div>
                </div>

            ))}



        </div>
    );
}


export default MovieList;
