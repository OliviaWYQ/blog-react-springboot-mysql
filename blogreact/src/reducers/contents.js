export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_CONTENT':
            return [
                ...state,
                action.content
            ];
        case 'REMOVE_CONTENT':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_CONTENT':
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
        case 'GET_CONTENT':
            return action.contents;
        default:
            return state;
    }
};