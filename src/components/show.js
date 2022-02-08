import React, {useState} from 'react'
import { Container, Spacer, Box, TagLabel, Tag, Button, Center, HStack, VStack, Image, Flex, Heading } from '@chakra-ui/react'
import { DragHandleIcon, HamburgerIcon } from '@chakra-ui/icons'
import CastListView from './castListView'
import CastGridView from './castGridView'
import imagePlaceholder from '../images/placeholder.jpg'

const Show = ({show}) => {
  const [castListView, setCastListView] = useState(false)
  return (
    <Container maxWidth='100%' p='0'>

      <Box marginBottom='50px' display={{base:'none', sm:'none', md:'block', lg:'block', xl:'block', '2xl':'block'}}>
        <Flex direction='row'>
          <Spacer w='10%'/>

          <Box w='45%' p={10}>
            <Image src={show.image?show.image:imagePlaceholder} w='80%'/>
          </Box>   

          <Box w='30%' marginLeft='-40px'>
            <Heading py={3} marginTop='40px' fontSize='2.6rem' textTransform='uppercase' fontWeight='400'>
              {show.name}
            </Heading>
            <HStack spacing={1} marginTop='15px' marginBottom='30px' flexWrap='wrap'>
              {show.genres?.map((genre,index) => (
                <Tag
                  size='lg'
                  my='7px'
                  key={`${show.id}-${genre.name}-tag- ${index}`}
                  borderRadius='full'
                  variant='solid'
                  background='#e4e4e4' 
                  boxShadow='0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%)'   
                >
                  <TagLabel py={2} px={1} key={`${show.id}-${genre.name}-tag`} fontSize='14px' color='black'> 
                    {genre}
                  </TagLabel>
                </Tag>))}
            </HStack>
            <Box fontSize='1.5rem'>
              <div dangerouslySetInnerHTML={{ __html: `${show.summary}` }}></div>
            </Box>
          </Box>

          <Spacer w='15%'/>
        </Flex>
      </Box>
      
      <Box marginBottom='50px' display={{ md:'none', lg:'none', xl:'none'}}>
        <VStack>
          <Heading py={3} marginTop='40px' align='center' fontSize='45px' textTransform='uppercase' fontWeight='500'>
              {show.name}
          </Heading>
          <Box w='70%' p={5} borderTop='1px solid gray' paddingTop='50px'> 
            <Image src={show.image?show.image:imagePlaceholder}/>
          </Box> 
          <HStack spacing={1} marginTop='15px' marginBottom='40px' flexWrap='wrap'>
              {show.genres?.map((genre,index) => (
                <Tag
                  size='md'
                  my='7px'
                  key={`${show.id}-${genre.name}-tag- ${index}`}
                  borderRadius='full'
                  variant='solid'
                  background='#e4e4e4' 
                  boxShadow='0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%)'   
                >
                  <TagLabel py={2} px={1} key={`${show.id}-${genre.name}-tag`} fontSize='14px' color='black'> 
                    {genre}
                  </TagLabel>
                </Tag>))}
            </HStack>
            <Spacer/>
            <Box fontSize='1.3rem' > 
              <div dangerouslySetInnerHTML={{ __html: `${show.summary}` }}></div>
            </Box>     
        </VStack>
      </Box>

      <Center p='0' m='0' w='100hw'>
        <Container marginTop='25px' mx='0'  p='0'  maxWidth='70%'>
            <hr color='black'/>
            <Flex direction='row' justifyContent='space-between'> 
              <Heading marginTop='30px' fontSize='2.1rem' fontWeight='500'>Actors</Heading>
              <Button marginTop='30px' size='lg' background='transparent' onClick={ () => setCastListView(!castListView) }>
                { castListView ? <DragHandleIcon/> : <HamburgerIcon/> }
              </Button>
            </Flex>
            <br/>
            <Container marginBottom='100px' maxWidth='100%' p='0'>
              { castListView ? <CastListView cast={show.cast}/> : <CastGridView cast={show.cast}/> }
            </Container>
        </Container>
      </Center>
    </Container>
  )
  }

  export {Show}

