const showReducer = (state,action) => {
    switch (action.type) {
        case 'SHOW_FETCH_INIT':
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        case 'SHOW_FETCH_SUCCESS':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload,
            };
        case 'SHOW_FETCH_FAILURE':
            return {
                ...state,
                isLoading:false,
                isError:true,
            };
        default:
            throw new Error();
    }
};

export default showReducer