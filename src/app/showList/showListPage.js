import { useState, useReducer, useEffect, useCallback, useContext } from 'react'
import { Container, Text, Box, Wrap, WrapItem, SimpleGrid,Center, Input, FormControl, Stack, Button, Flex } from '@chakra-ui/react'
import { ThemeContext } from '../../context/themeContext'
import SortingContext from '../../context/sortingContext'
import showsReducer from '../../state/showsReducer'
import { ShowCard } from '../../components/showCard'
import { SearchIcon} from '@chakra-ui/icons'
import { mapAndSortResults } from '../../utils/mapAndSortFunctions'
import axios from 'axios' 
import {API_ENDPOINT, API_BASE, API_PAGE, API_SEARCH} from '../../components/constants'


const ShowListPage = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [url, setUrl] = useState(`${API_ENDPOINT}${API_BASE}`);
    const [shows, dispatchShows] = useReducer(
        showsReducer,
        {data:[], isLoading:false, isError: false, favourites:JSON.parse(localStorage.getItem("favourites"))}
    )
    const [pageNumber, setPageNumber] = useState(0)

    const theme = useContext(ThemeContext);
    let darkMode = theme.state.darkMode;

    const sort = useContext(SortingContext);
    let sortMode = sort.state.sortingMode;

    const handleAddFav = (item) => {
        try{
        dispatchShows({
            type:'ADD_FAV_SHOW',
            payload:item
        })
        } catch (error) {
            dispatchShows({ type: 'SHOWS_FETCH_FAILURE' })
        }
    }

    const handleRemoveFav = (item) => {
        try{
            dispatchShows({
            type:'REMOVE_FAV_SHOW',
            payload:item
        })
        } catch (error) {
            dispatchShows({ type: 'SHOWS_FETCH_FAILURE' })
        }
    }

    const handleFetchShows = useCallback(
        async () => {
            dispatchShows({ type: 'SHOWS_FETCH_INIT' })
            try {
                const res = await axios.get(url)     
                dispatchShows({
                    type: 'SHOWS_FETCH_SUCCESS',
                    payload: mapAndSortResults(res, sortMode)
                })
            } catch {
                dispatchShows({ type: 'SHOWS_FETCH_FAILURE' })
            }
        }, [url,sortMode,pageNumber] );
    
    useEffect(() => {
        handleFetchShows();
        }, [handleFetchShows]);
    
    useEffect(()=>{
        const name = localStorage.getItem('favourites')
        if (!name) localStorage.setItem("favourites", JSON.stringify([]))
    },[])
        
    useEffect(()=>{
        searchTerm==='' && setUrl(`${API_ENDPOINT}${API_BASE}${API_PAGE}${pageNumber}`)
    },[searchTerm, pageNumber])
    
    const handleSearchInput = (event) => {
        setSearchTerm(event.target.value);
    };
    
    const handleSearchSubmit = () => {
        searchTerm===''
            ?setUrl(`${API_ENDPOINT}${API_BASE}${API_PAGE}${pageNumber}`)
            :setUrl(`${API_ENDPOINT}${API_SEARCH}${searchTerm}`);
    };

    return (
        <Center>
            <Container maxWidth={{sm:'70vw', md:'80vw', lg:'75%', xl:'60%','2xl':'50%'}} p='0'> 
            
                <FormControl>
                    <Flex direction='row'p='5'>               
                        <SearchIcon
                            fontSize='22px'
                            color={darkMode?'white.100':'black'}
                            onClick={handleSearchSubmit}
                            marginTop='5px' />
                        <Input 
                            placeholder='Search shows'
                            borderRadius='none'
                            borderTop='none'
                            borderLeft='none'
                            borderRight = 'none'
                            marginLeft='15px'
                            width='100%'
                            onChange={handleSearchInput}
                            onKeyPress={(e) => e.key === 'Enter' && handleSearchSubmit()}/>                              
                    </Flex>
                </FormControl>
                <br />
                <Center>
                {shows.isError && <Text>Something went wrong...</Text>}
                <Flex direction='row' >
                    <Button 
                        size='xs'
                        color='black'
                        isDisabled={pageNumber===0}
                        onClick={()=>setPageNumber(pageNumber>1?pageNumber-1:0)} marginRight='10px'>
                        Previous page
                    </Button>
                    <Text fontSize='16px'>{pageNumber}</Text>
                    <Button 
                        size='xs' 
                        marginLeft='10px' 
                        color='black'
                        onClick={()=>setPageNumber(pageNumber<240?pageNumber+1:241)} >
                        Next page
                    </Button>
                </Flex>
                </Center>
                <br/>
                <Center>
                <Box width='90%' marginBottom='100px'>
                {shows.isLoading
                    ?<Text>Loading...</Text>
                    :(
 
                        !shows.isError && (
                          
                                <SimpleGrid 
                                    minChildWidth={{sm:'300px',md:'170px',lg:'200px',xl:'200px','2xl':'200px'}} 
                                    columns={3} 
                                    spacing={{sm:'20px',md:'10px',lg:'20px',xl:'30px','2xl':'40px'}}>

                                {shows?.data?.map( ( item ) => {
                                    let isFavourite = shows.favourites?.find(favItem=>favItem.id==item.id)
                                    return (
                                            <ShowCard 
                                                isFavourite={isFavourite}
                                                key={`${item.id}-showCard`}
                                                handleRemoveFav = {handleRemoveFav}
                                                handleAddFav = {handleAddFav}
                                                hasFavIndicator={true}
                                                item={item} />
                                    )})      
                                }
                                
                                </SimpleGrid>
                            
                            )            
                    )}
                </Box>
                </Center>
            </Container>
        </Center>
    )
}

export default ShowListPage