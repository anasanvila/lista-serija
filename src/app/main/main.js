import {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import SortingContext from '../../context/sortingContext'
import ShowListPage from '../showList/showListPage'
import ShowPage from '../show/showPage'
import AboutPage from '../about/aboutPage'
import { Container,Box } from '@chakra-ui/react'

const Main = (props) => {
    const sort = useContext(SortingContext);
    let sortingMode = sort.state.sortingMode;
    return (
        <Box bg={props.background} w='100%' h='100vh'>
            <Container>
                <Switch>
                    <Route exact path="/">
                        <ShowListPage color={props.color} sortMode={sortingMode}/>
                    </Route>
                    <Route path="/about">
                        <AboutPage/>
                    </Route>
                    <Route path="/show/:id">
                        <ShowPage/>
                    </Route>
                </Switch>
                {props.children}                
            </Container>
        </Box>
    
    )
}

export default Main;