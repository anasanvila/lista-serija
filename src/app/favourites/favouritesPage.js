import { useContext } from 'react'
import { sortArray } from '../../utils/mapAndSortFunctions';
import { ShowCard } from '../../components/showCard';
import { SimpleGrid, Container, Center } from '@chakra-ui/react';
import SortingContext from '../../context/sortingContext';

const FavouritesPage = () => {
    const sort = useContext(SortingContext);
    let sortMode = sort.state.sortingMode;

    let favouritesArray = JSON.parse(localStorage.getItem("favourites"))
    let sortedFavArray = sortArray(favouritesArray, sortMode)
    return (
        <Center>
            <Container maxWidth={{sm:'70vw', md:'80vw', lg:'75%', xl:'60%','2xl':'50%'}} p='3' marginBottom='100px'> 
                <SimpleGrid 
                    minChildWidth={{sm:'300px',md:'170px',lg:'200px',xl:'200px','2xl':'200px'}} 
                    columns={3} 
                    spacing={{sm:'20px',md:'10px',lg:'20px',xl:'30px','2xl':'40px'}}>

                    {sortedFavArray.map( ( item ) => (
                                <ShowCard 
                                    hasFavIndicator={false}
                                    item={item} />
                    ))     
                    }
            
                </SimpleGrid>
            </Container>
        </Center>
)
}

export default FavouritesPage