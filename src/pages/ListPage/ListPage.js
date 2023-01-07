import React, { Component } from 'react';
import store from '../../store';
import './ListPage.css';

class ListPage extends Component {
    state = {
        link: "https://www.imdb.com/title/",
        movies: []
    }
    /* componentDidMount() {
        // 

        store.subscribe(() => {
            const globalState = store.getState();
            this.setState({ movies: globalState.favoriteList })
        })
        console.log(this.state)

        // TODO: запрос к сервер на получение списка
        // TODO: запросы к серверу по всем imdbID
    } */
    componentDidMount() {
        //const id = this.props.match.params;
        //console.log(id);

        store.subscribe(() => {
            const globalState = store.getState();
            this.setState({ movies: globalState.favoriteList });
        })
        console.log(this.state.movies)
    }
    render() {
        return (
            <div className="list-page">
                <h1 className="list-page__title">Мой список</h1>
                <ul>
                    {this.state.movies.map((item) => {
                        return (
                            <li key={item.imdbID}>
                                <a href="google.com" target="_blank">{item.Title} ({item.Year})</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default ListPage;