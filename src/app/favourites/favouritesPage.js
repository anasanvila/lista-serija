import { useEffect, useState, useContext } from 'react'
import { sortArray } from '../../utils/mapAndSortFunctions';
import SortingContext from '../../context/sortingContext';

const FavouritesPage = () => {
    const sort = useContext(SortingContext);
    let sortMode = sort.state.sortingMode;

    let favArray = JSON.parse(localStorage.getItem("favourites"))
    let sortedFavArray = sortArray(favArray, sortMode)
    return (
    <>
        <h1>Fav page</h1>
        <ul>
            {sortedFavArray?.map((item)=>(
            <li key={`${item.id}-fav`}>
                {item.id} - {item.name}
            </li>))}
        </ul>
    </>)
}

export default FavouritesPage