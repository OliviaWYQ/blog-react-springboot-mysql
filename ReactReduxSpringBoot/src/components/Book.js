import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeBook } from '../actions/books';

const Book = ({ id, title, name, description, author, published, dispatch }) => (
    <div>
        <Link to={`/${id}`}>
            <h4>Title: {title} {name}({published})</h4>
        </Link>
        <p>Author: {author}</p>
        {description && <p>{description}</p>}
        <button onClick={() => {
            dispatch(removeBook({ id }));
        }}>Remove</button>
    </div>
);

export default connect()(Book);