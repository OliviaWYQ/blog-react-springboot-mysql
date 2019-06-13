import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:3333/api'
});

const _addContent = (Content) => ({
    type: 'ADD_CONTENT',
    Content
});

export const addContent = (contentData = {
    id: '',
    title: '',
    description: '',
    author: '',
    time: ''
}) => {
    return (dispatch) => {
        const content = {
            id: contentData.id,
            title: contentData.title,
            description: contentData.description,
            author: contentData.author,
            time: contentData.time
        };

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
    return (dispatch) => {
        return axios.put(`/${id}`, updates).then(() => {
            dispatch(_editContent(id, updates));
        });
    }
};

const _getContent = (Content) => ({
    type: 'GET_Content',
    Content
});

export const getContent = () => {
    return (dispatch) => {
        return axios.get('/list').then(result => {
            const Content = [];

            result.data.forEach(item => {
                Content.push(item);
            });

            dispatch(_getContent(Content));
        });
    };
};