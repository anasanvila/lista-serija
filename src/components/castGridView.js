import {Center, Container, Text, Image, SimpleGrid} from '@chakra-ui/react'
import imagePlaceholder from '../images/placeholder.jpg'

const ImageCard = ({image, name}) =>  (
    <Container 
        marginBottom={6} 
        p='0' maxWidth='100%' 
        boxShadow='0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%)'        
        position='relative'>
                <Center>
                    <Image src={image?image:imagePlaceholder} width='100%'/>
                </Center>
                <Text 
                    color='white' 
                    fontWeight='400' 
                    fontSize='24px' 
                    position='absolute' 
                    marginTop='-60px' 
                    marginLeft='30px'>
                        {name}
                </Text>
            
    </Container>
    )


const SmallImageCard = ({image, name}) => {
    return (
    <Container 
        marginBottom={6}        
        p='0' 
        boxShadow='0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%)'        
        position='relative'>
            
                <Image 
                    src={image?image:imagePlaceholder}
                    fit='contain'
                    width='100%'/>
                <Text 
                    color='white' 
                    fontWeight='400' 
                    fontSize='24px' 
                    position='absolute' 
                    marginTop='-100px' 
                    marginLeft='25px'>
                        {name}
                </Text>   
          
    </Container>
    )
}

const CastGridView = ({cast}) => (
    <>
        <Container maxWidth='100%' p='0' display={{ base:'block',sm:'block', md:'none', lg:'none', xl:'none'}} >
            {cast && cast.map( (item,index) => (
                <ImageCard key={`${item.id}-imageCard-${index}`} image={item.image} name={item.personName}/>) ) } 
        </Container>
        <Container maxWidth='100%'  p='0' display={{base:'none', sm:'none', md:'block', lg:'block', xl:'block', '2xl':'block'}} >
            <SimpleGrid columns='6' flexWrap='wrap' spacing='15px'>
            {cast && cast.map( (item,index) => (
                
                    <SmallImageCard key={`${item.id}-imageCard-${index}`} image={item.smallImage} name={item.personName}/>
                )
                ) }
            </SimpleGrid>
        </Container>
    </>
    )

export default CastGridView