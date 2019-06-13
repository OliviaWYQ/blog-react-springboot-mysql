import React from 'react';
import BookForm from './BookForm';
import { connect } from 'react-redux';
import { editBook } from '../actions/books';

const EditBook = (props) => (
    <div className='container__box'>
        <h3>Edit Post</h3>
        <BookForm
            // book={props.book}
            // onSubmitBook={(book) => {
            //     props.dispatch(editBook(props.book.id, book));
            //     props.history.push('/');
            // }}
            content={props.content}
            onSubmitBook={(content) => {
                props.dispatch(editBook(props.location.pathname.slice(1, ), content));
                props.history.push('/');
            }}
        />
    </div>
);

const mapStateToProps = (state, props) => {
    return {
        content: state.find((content) =>
            content.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditBook);