import React from 'react'
import { Box, Tag, Image, Button, Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom' 
import { StarIcon} from '@chakra-ui/icons'
import placeHolderImage from '../images/placeholder.jpg'

const ShowCard = ({isFavourite, item, handleRemoveFav, handleAddFav, hasFavIndicator}) => (
        <Box border='1px solid #E2E8F0' boxShadow="lg" rounded="md" maxWidth='700px' my='5px' _hover={{boxShadow:'0 8px 17px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)'}}>
            
            <Item
                key={item.id}
                item={item}
            />
            <Box h={95} position='relative' borderTop='1px solid #E2E8F0'>
                {hasFavIndicator &&<StarIcon 
                    color={isFavourite?'red.500':'gray.400'}
                    position='absolute'
                    fontSize='30px'
                    marginLeft='10px'
                    marginTop='-17px'
                    key={`${item.id}-add/remove`} 
                    
                    onClick={isFavourite?()=>handleRemoveFav(item.id):()=>handleAddFav(item)}
                />}
                <Tag position='absolute'
                     marginLeft='46px'
                     background = '#f9ffe0'
                     marginTop = '-10px'
                     border='2px solid #cdd6a4'
                     color='#218737'
                    >
                    ID = {item.id}
                </Tag>
                <Button bg='blue.250' 
                        color='white' 
                        position='absolute'
                        marginTop='-30px'
                        right='20px'
                        height='14' 
                        borderRadius='50%'>
                    <Text fontWeight='400' >{item.rating?item.rating.toFixed(1):'???'}</Text>
                </Button>
                <Text marginTop="33px" textOverflow='ellipsis' whiteSpace='nowrap' overflow='hidden' width='160px' marginLeft='20px' fontSize='23px'>{item.name}</Text>
            </Box>
           
        </Box>)

  
  const Item = ({ item }) => (
      <Link to={`/show/${item.id}`} >
        <Image src={item.image?item.image:placeHolderImage} alt={item.id} w='100%' />
      </Link>
  );

 
  export {ShowCard}