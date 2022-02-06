import { useState, useReducer, useEffect, useCallback, useContext } from 'react'
import { Container, Text, Input, FormControl, Button, Flex } from '@chakra-ui/react'
import { ThemeContext } from '../../context/themeContext'
import SortingContext from '../../context/sortingContext'
import showsReducer from '../../state/showsReducer'
import { List } from '../../components/elements'
import { SearchIcon} from '@chakra-ui/icons'
import { mapAndSortResults } from '../../utils/mapAndSortFunctions'
import axios from 'axios' 
import {API_ENDPOINT, API_BASE, API_SEARCH} from '../../components/constants'


const ShowListPage = (props) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [url, setUrl] = useState(`${API_ENDPOINT}${API_BASE}`);
    const [shows, dispatchShows] = useReducer(
        showsReducer,
        {data:[], isLoading:false, isError: false, favourites:JSON.parse(localStorage.getItem("favourites"))}
    )

    const theme = useContext(ThemeContext);
    let darkMode = theme.state.darkMode;

    const sort = useContext(SortingContext);
    let sortMode = sort.state.sortingMode;

    const handleAddFav = (item) => {
        dispatchShows({
            type:'ADD_FAV_SHOW',
            payload:item
        })
    }

    const handleRemoveFav = (item) => {
        dispatchShows({
            type:'REMOVE_FAV_SHOW',
            payload:item
        })
    }

    const handleFetchShows = useCallback(
        async () => {
            dispatchShows({ type: 'SHOWS_FETCH_INIT' })
            try {
                const res = await axios.get(url);                           
                dispatchShows({
                    type: 'SHOWS_FETCH_SUCCESS',
                    payload: mapAndSortResults(res, sortMode)
                })
            } catch {
                dispatchShows({ type: 'SHOWS_FETCH_FAILURE' })
            }
        }, [url,sortMode] );
    
    useEffect(() => {
        handleFetchShows();
        }, [handleFetchShows]);
        
    useEffect(()=>{
        searchTerm==='' && setUrl(`${API_ENDPOINT}${API_BASE}`)
    },[searchTerm])
    
    const handleSearchInput = (event) => {
        setSearchTerm(event.target.value);
    };
    
    const handleSearchSubmit = () => {
        searchTerm===''
            ?setUrl(`${API_ENDPOINT}${API_BASE}`)
            :setUrl(`${API_ENDPOINT}${API_SEARCH}${searchTerm}`);
    };

    return (
    <Container>
        <FormControl>
            <Flex direction='row'p='3'>
                <Button type='submit' onClick={handleSearchSubmit}                         
                        background={darkMode?'gray.100':'gray.400'}>
                    <SearchIcon color={darkMode?'gray.400':'gray.100'}/>
                </Button>
                <Input placeholder='Search' onChange={handleSearchInput}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearchSubmit()}/>                              
            </Flex>
        </FormControl>
        <div>{searchTerm}</div>
        <br />
        {shows.isError && <Text>Something went wrong...</Text>}
        {shows.isLoading
            ?<Text>Loading...</Text>
            :(
                !shows.isError && <List
                                     list={shows.data}
                                     handleAddFav = {handleAddFav}
                                     handleRemoveFav = {handleRemoveFav}
                                     favList={shows.favourites}
                                     />
     
            )}
    </Container>
    )
}

export default ShowListPage