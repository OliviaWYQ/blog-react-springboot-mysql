import { createStore, applyMiddleware } from "redux";
import contents from '../reducers/contents';
import thunk from 'redux-thunk';

export default () => {
    return createStore(contents, applyMiddleware(thunk));
};