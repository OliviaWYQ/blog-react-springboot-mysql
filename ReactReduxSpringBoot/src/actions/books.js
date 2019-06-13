import axios from '../axios/axios';

const _addBook = (content) => ({
    type: 'ADD_BOOK',
    content
});

export const addBook = (bookData = {
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

        return axios.post('/create', content).then(result => {
            dispatch(_addBook(result.data));
        });
    };
};

const _removeBook = ({ id } = {}) => ({
    type: 'REMOVE_BOOK',
    id
});

export const removeBook = ({ id } = {}) => {
    return (dispatch) => {
        return axios.delete(`/${id}`).then(() => {
            dispatch(_removeBook({ id }));
        })
    }
};

const _editBook = (id, updates) => ({
    type: 'EDIT_BOOK',
    id,
    updates
});

export const editBook = (id, updates) => {
    return (dispatch) => {
        return axios.put(`/${id}`, updates).then(() => {
            dispatch(_editBook(id, updates));
        });
    }
};

const _getBooks = (books) => ({
    type: 'GET_BOOKs',
    books
});

export const getBooks = () => {
    return (dispatch) => {
        return axios.get('/list').then(result => {
            const books = [];

            result.data.forEach(item => {
                books.push(item);
            });

            dispatch(_getBooks(books));
        });
    };
};