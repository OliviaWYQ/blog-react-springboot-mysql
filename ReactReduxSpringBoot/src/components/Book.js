import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeBook, editBook } from '../actions/books';

const Book = ({ id, title, name, description, author, time, dispatch }) => (
    <div>
        <h4>{title} {name}</h4>
        <p>Posted by {author} ({time.slice(0,10)})</p>
        {description && <p>{description}</p>}
        <button onClick={() => {
            dispatch(removeBook({ id }));
        }}>Remove</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to={`/${id}`}>
            <button>Edit</button>
        </Link>
    </div>
);

export default connect()(Book);