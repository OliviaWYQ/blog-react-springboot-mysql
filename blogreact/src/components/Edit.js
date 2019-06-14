import React from 'react';
import Form from './Form';
import { connect } from 'react-redux';
import { editContent } from '../actions/contents';

const Edit = (props) => (
    <div className='container__box'>
        <h3>Edit Post No.{props.location.pathname.slice(1, )}</h3>
        <Form
            // book={props.book}
            // onSubmitBook={(book) => {
            //     props.dispatch(editContent(props.book.id, book));
            //     props.history.push('/');
            // }}
            content={props.content}
            onSubmitBook={(content) => {
                props.dispatch(editContent(props.location.pathname.slice(1, ), content));
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

export default connect(mapStateToProps)(Edit);