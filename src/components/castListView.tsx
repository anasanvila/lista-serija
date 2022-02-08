import {Box, Container, Flex, Avatar, Text } from '@chakra-ui/react'
import {ICard, ICastListView} from '../utils/interfaces'

const Card = ({id, image, name}:ICard):JSX.Element => (
    <Box px={4} py={7} border='1px solid #e0e0e0' key={`${id}-box`}>
        <Flex direction='row' key={`${id}-flex`}> 
            <Avatar
                size='md'
                key={`${id}-avatar`}
                name={name}
                src={image}   
            />
            <Text 
                fontSize='2.1rem'
                key={`${id}-text`}
                marginLeft='15px'
            >
                {name}
            </Text>
        </Flex>
    </Box>
)

const CastListView = ({cast}:ICastListView):JSX.Element => (
    <>
        <Container maxWidth='100%' p='0'  >
            {cast && cast.map( (item,index) => (
                <Card key={`${item.id}-Card-${index}`} id={item.id} image={item.smallImage} name={item.personName}/>) ) } 
        </Container>
    </>
)

export default CastListView