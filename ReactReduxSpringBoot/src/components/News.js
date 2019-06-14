import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeContent, editContent } from '../actions/contents';

const News = ({ id, title, name, description, author, time, dispatch }) => (
    <div className='list__Item'>
        <div className='list__Info title'>{title} {name}</div>
        <div className='list__Info desc'>Posted by {author} ({time.slice(0,10)})
        {description && <p>{description}</p>}
        </div>
        <button onClick={() => {
            dispatch(removeContent({ id }));
        }}>Remove</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to={`/${id}`}>
            <button>Edit</button>
        </Link>
    </div>
);

export default connect()(News);