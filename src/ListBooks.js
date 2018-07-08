import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import './App.css'
import * as BooksAPI from './BooksAPI'

class ListBooks extends Component {
    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({ books })
        })
    }

    render() {
        return (
            <div className="app">
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <Bookshelf 
                            books={this.state.books}
                        />
                    </div>
                    <div className="open-search">
                        <Link
                            to="/search"
                        >Add a book</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListBooks;