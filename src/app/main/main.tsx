
import {Switch, Route} from 'react-router-dom'
import FavouritesPage from '../favourites/favouritesPage'
import ShowListPage from '../showList/showListPage'
import ShowPage from '../show/showPage'
import AboutPage from '../about/aboutPage'
import { Box } from '@chakra-ui/react'

const Main = ()=> (
        <Box w='100%' h='100vh' >
                <Switch>
                    <Route exact path="/">
                        <ShowListPage/>
                    </Route>
                    <Route path="/about">
                        <AboutPage/>
                    </Route>
                    <Route path="/favourites">
                        <FavouritesPage/>
                    </Route>
                    <Route path="/show/:id">
                        <ShowPage/>
                    </Route>
                </Switch> 
        </Box>    
    )

export default Main;