import React, { Component } from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

class FilmRow extends Component {

    render() {
        return (
            <div className="film-row" onClick={()=> {this.props.handleDetailsClick(this.props.film)}}>
                <FilmPoster poster_path={this.props.film.poster_path} alt={this.props.film.title}/>
                <h1>{this.props.film.title}</h1>
                <p>{new Date(this.props.film.release_date).getFullYear()}</p>
                <div className="film-summary">
                    <p>{this.props.film.overview}</p>
                </div>
                <Fave
                onFaveToggle={()=>this.props.onFaveToggle(this.props.film)}
                isFave={this.props.isFave}
                />
            </div>
        )
    }
}

export default FilmRow;