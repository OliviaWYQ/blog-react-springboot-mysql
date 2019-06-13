import React from 'react';
import { connect } from 'react-redux';
import Book from './Book';

const BookList = (props) => (
    <div>
        Book List:
        <ul>
            {props.books.map(content => {
                return (
                    <li key={content.id}>
                        <Book {...content} />
                    </li>
                );
            })}
        </ul>

    </div>
);

const mapStateToProps = (state) => {
    return {
        books: state
    };
}

export default connect(mapStateToProps)(BookList);