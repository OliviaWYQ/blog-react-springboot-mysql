import React from 'react';
import Form from './Form';
import { connect } from 'react-redux';
import { addContent } from '../actions/contents';

const Add = (props) => (
    <div className="container__box">
        <h3>Add A New Post</h3>
        <Form
            onSubmitBook={(content) => {
                props.dispatch(addContent(content));
                props.history.push('/');
            }}
        />
    </div>
);

export default connect()(Add);
