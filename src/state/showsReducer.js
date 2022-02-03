const showsReducer = (state,action) => {
    switch (action.type) {
        case 'SHOWS_FETCH_INIT':
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        case 'SHOWS_FETCH_SUCCESS':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload,
            };
        case 'SHOWS_FETCH_FAILURE':
            return {
                ...state,
                isLoading:false,
                isError:true,
            };
        default:
            throw new Error();
    }
};

export default showsReducer