import {Center, Container, Text, Image, SimpleGrid} from '@chakra-ui/react'
import { IImageCard, ISmallImageCard, ICast, ICastListView } from '../utils/interfaces'

const ImageCard = ({id, image, name}:IImageCard):JSX.Element =>  (
    <Container 
        marginBottom={6} 
        p='0' maxWidth='100%' 
        boxShadow='0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%)'        
        position='relative'>
                <Center>
                    <Image src={image} width='100%'/>
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


const SmallImageCard = ({image, name}:ISmallImageCard):JSX.Element => (
    <Container 
        marginBottom={6}        
        p='0' 
        boxShadow='0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%)'        
        position='relative'>
            
                <Image 
                    src={image}
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

const CastGridView = ({cast}:ICastListView):JSX.Element => (
    <>
        <Container maxWidth='100%' p='0' display={{ md:'none', lg:'none', xl:'none'}} >
            {cast && cast.map( (item,index) => (
                <ImageCard key={`${item.id}-imageCard-${index}`} image={item.image} name={item.personName}/>) ) } 
        </Container>
        <Container maxWidth='100%'  p='0' display={{ xs:'none', sm:'none'}} >
        <SimpleGrid columns={6} flexWrap='wrap' spacing='15px'>
            {cast && cast.map( (item,index) => (
                
                    <SmallImageCard key={`${item.id}-imageCard-${index}`} image={item.smallImage} name={item.personName}/>
                )
                ) }
        </SimpleGrid>
        </Container>
    </>
    )

export default CastGridView