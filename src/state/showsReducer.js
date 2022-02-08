const showsReducer = (state,action) => {

    let newFavArray
    let favouritesString
    let favouritesArray = []

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

        case 'ADD_FAV_SHOW':

            if ((localStorage.getItem("favourites") !== undefined) || 
                (localStorage.getItem("favourites") !== [])){
                     favouritesString = localStorage.getItem("favourites")
                     favouritesArray = JSON.parse(favouritesString)
            }

            let isAlreadyInFavourites = favouritesArray?.find(item=>item.id===action.payload.id)

            newFavArray = [...favouritesArray]
            if (!isAlreadyInFavourites )  { newFavArray = [...favouritesArray, action.payload] }
            
            localStorage.setItem("favourites", JSON.stringify(newFavArray))

            return {
                    ...state,
                    favourites: newFavArray
                }

        case 'REMOVE_FAV_SHOW':

            if ((localStorage.getItem("favourites") !== undefined) ||
                (localStorage.getItem("favourites") !== [])){
                    favouritesString = localStorage.getItem("favourites")
                    favouritesArray = JSON.parse(favouritesString)
            }

            newFavArray = favouritesArray?.filter(item=>item.id!==action.payload)

            localStorage.setItem("favourites", JSON.stringify(newFavArray))

            return {
                ...state,
                favourites: newFavArray
            }

        default:
            throw new Error();
    }
};

export default showsReducer

