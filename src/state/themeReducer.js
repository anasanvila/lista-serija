export function themeReducer (state,action) {
    switch (action.type) {
        case 'DARKMODE':
            return {darkMode:true};
        case 'LIGHTMODE':
            return {darkMode:false};
        default:
            return state;
    }
}