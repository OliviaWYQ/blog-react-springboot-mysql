import React from 'react';
import BookForm from './BookForm';
import { connect } from 'react-redux';
import { addBook } from '../actions/books';

const AddBook = (props) => (
    <div>
        <h3>Add New Posts:</h3>
        <BookForm
            onSubmitBook={(content) => {
                props.dispatch(addBook(content));
                props.history.push('/');
            }}
        />
    </div>
);

export default connect()(AddBook);
