import { useContext } from 'react'
import { sortArray } from '../../utils/mapAndSortFunctions';
import SortingContext from '../../context/sortingContext';

const FavouritesPage = () => {
    const sort = useContext(SortingContext);
    let sortMode = sort.state.sortingMode;

    let favouritesArray = JSON.parse(localStorage.getItem("favourites"))
    let sortedFavArray = sortArray(favouritesArray, sortMode)
    return (
    <>
        <ul>
            {sortedFavArray?.map((item)=>(
            <li key={`${item.id}-fav`}>
                {item.id} - {item.name}
            </li>))}
        </ul>
    </>)
}

export default FavouritesPage