import axios from '../axios/axios';

const _addContent = (content) => ({
    type: 'ADD_CONTENT',
    content
});

export const addContent = (bookData = {
    // id: '',
    title: '',
    author: '',
    time: '',
    description: ''
}) => {
    return (dispatch) => {
        const content = {
            // id: bookData.id,
            title: bookData.title,
            author: bookData.author,
            time: bookData.time,
            description: bookData.description
        };
        console.log("add post", content);
        return axios.post('/create', content).then(result => {
            dispatch(_addContent(result.data));
        });
    };
};

const _removeContent = ({ id } = {}) => ({
    type: 'REMOVE_CONTENT',
    id
});

export const removeContent = ({ id } = {}) => {
    console.log("remove post", id);
    return (dispatch) => {
        return axios.delete(`/${id}`).then(() => {
            dispatch(_removeContent({ id }));
        })
    }
};

const _editContent = (id, updates) => ({
    type: 'EDIT_CONTENT',
    id,
    updates
});

export const editContent = (id, updates) => {
    console.log("edit post", id, updates);
    return (dispatch) => {
        return axios.put(`/${id}`, updates).then(() => {
            dispatch(_editContent(id, updates));
        });
    }
};

const _getContent = (contents) => ({
    type: 'GET_CONTENT',
    contents
});

export const getContent = () => {
    return (dispatch) => {
        return axios.get('/list').then(result => {
            const contents = [];

            result.data.forEach(item => {
                contents.push(item);
            });

            dispatch(_getContent(contents));
        });
    };
};