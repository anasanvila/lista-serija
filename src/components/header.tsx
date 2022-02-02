import { Box, Flex, Heading, Spacer, Container, Text, Switch, StatHelpText } from '@chakra-ui/react'
import { Link } from 'react-router-dom' 
import { Props } from 'framer-motion/types/types'
import SwitchButton from '../components/switchButton'

const Header = (props:Props) => {
    return (
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
                       <SwitchButton/>
                    </Box>                   
                </Flex>
            </Container>
        </Box>
    )
}

export default Header
