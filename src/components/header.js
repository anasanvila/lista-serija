import {useState, useContext} from 'react'
import { Box, Flex, Spacer, Container, Text, Select, background } from '@chakra-ui/react'
import { Link } from 'react-router-dom' 
import SortingContext from '../context/sortingContext'
import SwitchButton from '../components/switchButton'

const Header = (props) => {
    const [value, setValue] = useState()

    const sort = useContext(SortingContext)
    let sortingMode='id'
    sortingMode=sort.state.sortingMode

    const handleChange = (e) => {
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
        <Box bg='blue.900'  w='100%' color='white' h='43px'>
            <Container w='80%' p='1px' maxWidth='130ch'>
                <Flex>
                <Box p='2'>
                    <Flex direction='row'>
                        <Text fontSize='12px' paddingRight='5px' paddingTop='4px'>Switch Dark / Light mode </Text>
                        <Spacer />
                        <SwitchButton/>
                    </Flex> 
                    </Box> 
                    <Box p='2' marginLeft='20px'>
                        <Select size='xs' placeholder='Select sort method' value={value} onChange={handleChange}>
                            <option value='id' style={{color:'black'}}>id</option>
                            <option value='name' style={{color:'black'}}>name</option>
                            <option value='rate' style={{color:'black'}}>rate</option>
                        </Select>
                    </Box>                   
                </Flex>
            </Container>
        </Box>
        </Flex>
        </>
    )
}

export default Header
