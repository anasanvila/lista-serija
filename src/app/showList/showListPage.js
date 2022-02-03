import { useState, useReducer, useEffect, useCallback, useContext } from 'react'
import { Container, Text, Input, FormControl, Button, Flex } from '@chakra-ui/react'
import { ThemeContext } from '../../context/themeContext'
import showsReducer from '../../state/showsReducer'
import { List } from '../../components/elements'
import { SearchIcon} from '@chakra-ui/icons'
import { mapResults,sortByRating, sortByName, sortById } from './mapResults'
import axios from 'axios' 

const API_ENDPOINT = 'https://api.tvmaze.com/';
const API_BASE = 'shows';
const API_SEARCH = 'search/shows?q=';

// const useSemiPersistentState = (key, initialState) => {
//     const [value, setValue] = useState(
//       localStorage.getItem(key) || initialState
//     );
  
//     useEffect(() => {
//       localStorage.setItem(key, value);
//     }, [value, key]);
  
//     return [value, setValue];
//   };


const ShowListPage = (props) => {
    // const [searchTerm, setSearchTerm] = useSemiPersistentState('search','True');
    const [searchTerm, setSearchTerm] = useState('')    
    const theme = useContext(ThemeContext);
    let darkMode = theme.state.darkMode;

    const [url, setUrl] = useState(
        `${API_ENDPOINT}${API_BASE}`
      );

    const [shows, dispatchShows] = useReducer(
        showsReducer,
        {data:[], isLoading:false, isError: false}
    )

    const mappedData = (data) => data.map(item=>item.show)
    const handleFetchShows = useCallback(
        async () => {
            dispatchShows({ type: 'SHOWS_FETCH_INIT' })
            try {
                const result = await axios.get(url);
                console.log("sortMode=",props.sortMode)
               
                let resultData=result.data
                if (result.data[0].show) resultData = mappedData(result.data)
                console.log("RESULT DATA = ", resultData)
                let mappedResult; 
                if (props.sortMode==='id') {
                    mappedResult = sortById(mapResults(resultData))
                }
                if (props.sortMode==='name') {
                    mappedResult = sortByName(mapResults(resultData))
                }
                if (props.sortMode==='rate') {
                    mappedResult = sortByRating(mapResults(resultData))
                }
                dispatchShows({
                    type: 'SHOWS_FETCH_SUCCESS',
                    payload: mappedResult
                })
                console.log("mapped result= ",mappedResult)
            } catch {
                dispatchShows({ type: 'SHOWS_FETCH_FAILURE' })
            }
        }, [url,props.sortMode] );
    
    useEffect(() => {
        handleFetchShows();
        }, [handleFetchShows]);
        
    useEffect(()=>{
        searchTerm=='' && setUrl(`${API_ENDPOINT}${API_BASE}`)
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
                <Input placeholder='Search' onChange={handleSearchInput}/>                              
            </Flex>
        </FormControl>
        <div>{searchTerm}</div>
        <br />
        {shows.isError && <Text>Something went wrong...</Text>}
        {shows.isLoading
            ?<Text>Loading...</Text>
            :(
                !shows.isError &&<List list={shows.data} />
     
            )}
    </Container>
    )
}

export default ShowListPage