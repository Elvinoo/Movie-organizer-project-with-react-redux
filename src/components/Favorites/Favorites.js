import React, { Component } from 'react';
import './Favorites.css';
import store from '../../store';
import { Link } from 'react-router-dom';
class Favorites extends Component {
    state = {
        title: 'Новый список',
        movies: [],
        value: "",
        newEntry: 0,
        disabled: false
    }
    handleValue = (e) => {
        this.setState({ value: e.target.value })
    }
    removeMovie(imdbID) {
        store.dispatch({
            type: "REMOVE_MOVIE_FROM_FAVORITE_LIST",
            payload: {
                imdbID: imdbID,
            }
        })
    }
    handleClick = (e) => {
        this.setState({ disabled: true });
        e.target.style.display = "none"
    }
    componentDidMount() {
        store.subscribe(() => {
            const globalState = store.getState();
            this.setState({ movies: globalState.favoriteList, newEntry: globalState.newEntry })

        })

    }
    render() {
        return (
            <div className="favorites">
                <input disabled={this.state.disabled} onChange={this.handleValue} value={this.state.value} placeholder="Введите название списка" className="favorites__name" />
                <ul className="favorites__list">
                    {this.state.movies.map((item) =>

                    (<li key={item.imdbID} className="favorites__list-item" >{item.Title} ({item.Year})
                        <button onClick={() => this.removeMovie(item.imdbID)} disabled={this.state.disabled}>X</button>
                    </li>)


                    )}

                </ul>
                {!this.state.disabled ? (<button type="button" onClick={this.handleClick} disabled={this.state.value === "" || this.state.newEntry <= 0} className="favorites__save">Сохранить список</button>) : (<Link to="/list/:id" >Pereyti k spisku</Link>)}
            </div>
        );
    }
}

export default Favorites;