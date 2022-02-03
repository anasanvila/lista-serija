const sortingReducer = (state,action) => {
    console.log("reducer", action.payload)
    switch (action.type) {
        case 'SORT_BY_ID':
            return {sortingMode:action.payload};
        case 'SORT_BY_NAME':
            return {sortingMode:action.payload};
        case 'SORT_BY_RATE':
            return {sortingMode:action.payload}
        default:
            return state;
    }
}

export {sortingReducer}