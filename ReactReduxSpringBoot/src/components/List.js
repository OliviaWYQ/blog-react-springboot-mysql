import React from 'react';
import { connect } from 'react-redux';
import News from './News';

const List = (props) => (
    <div>
        <ul>
            {props.contents.map(content => {
                return (
                    <li key={content.id}>
                        <News {...content} />
                    </li>
                );
            })}
        </ul>

    </div>
);

const mapStateToProps = (state) => {
    return {
        contents: state
    };
}

export default connect(mapStateToProps)(List);