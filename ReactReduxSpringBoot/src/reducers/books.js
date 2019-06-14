export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return [
                ...state,
                action.content
            ];
        case 'REMOVE_BOOK':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_BOOK':
            return state.map((content) => {
                if (content.id === action.id) {
                    return {
                        ...content,
                        ...action.updates
                    };
                } else {
                    return content;
                }
            });
        case 'GET_BOOKs':
            return action.books;
        default:
            return state;
    }
};