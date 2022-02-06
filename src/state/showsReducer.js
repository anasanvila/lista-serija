const showsReducer = (state,action) => {
    let newArray
    let favouritesString
    let favouritesArray=[]
    let favArray
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
                (localStorage.getItem("favourites") !== undefined)){
                     favouritesString = localStorage.getItem("favourites")
                     favouritesArray = JSON.parse(favouritesString)
            }
            console.log("Fav array]",favouritesArray)

            let ind = favouritesArray.find(item=>item.id===action.payload.id)

            if (!ind )  newArray = [...favouritesArray, action.payload]
               else newArray = [...favouritesArray]
            
            console.log("new array]",newArray)

            localStorage.setItem("favourites", JSON.stringify(newArray))
            return {
                    ...state,
                    favourites: newArray
                }
        case 'REMOVE_FAV_SHOW':

             if ((localStorage.getItem("favourites") !== undefined) ||
                (localStorage.getItem("favourites") !== [])){
                    favouritesString = localStorage.getItem("favourites")
                    favouritesArray = JSON.parse(favouritesString)
            }

            newArray = favouritesArray?.filter(item=>item.id!==action.payload)

            localStorage.setItem("favourites", JSON.stringify(newArray))

            console.log("after remove", newArray)
            return {
                ...state,
                favourites: newArray
            }

        default:
            throw new Error();
    }
};

export default showsReducer

