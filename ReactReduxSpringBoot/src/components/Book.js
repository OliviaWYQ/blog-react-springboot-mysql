import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeBook } from '../actions/books';

const Book = ({ id, title, name, description, author, time, dispatch }) => (
    <div>
        <Link to={`/${id}`}>
            <h4>Title: {title} {name}({time.slice(0,10)})</h4>
        </Link>
        <p>Author: {author}</p>
        {description && <p>Description: {description}</p>}
        <button onClick={() => {
            dispatch(removeBook({ id }));
        }}>Remove</button>
    </div>
);

export default connect()(Book);