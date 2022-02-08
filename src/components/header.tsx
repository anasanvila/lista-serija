import {useState, useContext} from 'react'
import { Box, Flex, Spacer, Container, Center, Text, Select} from '@chakra-ui/react'
import { Link } from 'react-router-dom' 
import SortingContext from '../context/sortingContext'
import SwitchThemeButton from './switchThemeButton'

const Header = () => {
    const [value, setValue] = useState()

    const sort = useContext(SortingContext)
    let sortingMode = 'id'
    sortingMode = sort.state.sortingMode

    const handleChange = (e:any):void => {
        if (e.target.value === 'id') sort.dispatch({type:'SORT_BY_ID', payload:e.target.value})
        if (e.target.value === 'name') sort.dispatch({type:'SORT_BY_NAME', payload:e.target.value})
        if (e.target.value === 'rate') sort.dispatch({type:'SORT_BY_RATE', payload:e.target.value})
      };

    return (
        <>
        <Flex direction='column'>
            <Box bg='blue.150' w='100%' paddingX={4} py={2} color='white'>
                <Container w='70%' p='1px' maxWidth='130ch'>
                    <Flex>
                        <Spacer display={{lg:'none', xl:'none'}} />
                        <Box p='0'>
                                <Link to="/" >
                                    <Text fontSize='1.9rem' fontWeight='400' color='white' p='0'>BIT Shows</Text>
                                </Link>
                        </Box>
                        <Spacer />
                        <Box p='2'>
                            <Link to="/about">
                                <Text fontSize='0.85rem' color='white' paddingTop='3px'>About</Text>
                            </Link>
                        </Box>
                        <Box p='2'>
                            <Link to="/favourites">
                                <Text fontSize='0.85rem' color='white' paddingTop='3px'>Favourites</Text>
                            </Link>
                        </Box>              
                    </Flex>
                </Container>
            </Box>
            <Box bg='blue.900'  w='100%' color='white' h={{xs:'60px', sm:'60px',md:'43px', lg:'43px'}}>
                <Container w={{xs:'80%', sm:'80%',md:'70%'}} p='1px' maxWidth='120ch'>
                    <Center>
                        <Flex direction='row'>
                            <Box p='2'>
                                <Flex direction='row'>
                                    <Text fontSize='12px' paddingRight='5px' paddingTop='4px'>Switch Dark / Light mode </Text>
                                    <Spacer />
                                    <SwitchThemeButton/>
                                </Flex> 
                            </Box> 
                            <Spacer/>
                            <Box p='2' marginLeft='20px'>
                                <Select size='xs' placeholder='Select sort method' value={value} onChange={handleChange}>
                                    <option value='id' style={{color:'black'}}>id</option>
                                    <option value='name' style={{color:'black'}}>name</option>
                                    <option value='rate' style={{color:'black'}}>rate</option>
                                </Select>
                            </Box>                   
                        </Flex>
                    </Center>
                </Container>
            </Box>
        </Flex>
        </>
    )
}

export default Header
