import React from 'react'
import { Box, Button, Heading, Flex} from '@chakra-ui/react'
import { Link } from 'react-router-dom' 
import { StarIcon} from '@chakra-ui/icons'

  const List = ({ list, handleAddFav, handleRemoveFav, favList }) => {
    return (
    <ul>
      {list.map((item) =>{
      let fav = favList?.find(favItem=>favItem.id==item.id)
      return (
      <Flex key={`${item.id}-flex`} direction='row'>
        <Item
          key={item.id}
          item={item}
        />                 
        <StarIcon 
              color={fav?'red.500':'gray.400'} 
              marginLeft='10px'
              key={`${item.id}-add/remove`} 
              onClick={fav?()=>handleRemoveFav(item.id):()=>handleAddFav(item)}
            />
      </Flex>
      )})
      }
    </ul>
  )}

  
  const Item = ({ item }) => (
    <li key={item.id}>
      <Link to={`/show/${item.id}`} >
        <span key={item.id}>{item.id}-{ item.name} / {item.rating}</span>
      </Link>
    </li>
  );

  const TVShow = ({show}) => (
    <>
      <Heading>{show.name}</Heading>
      <br/>
      <div dangerouslySetInnerHTML={{ __html: `${show.summary}` }}></div>
      <Box>
      <br/>
        <ul>
          {show.cast?.map((item, index)=>
            <li key={`${index}-${item.personName}`}>{item.personName}</li>
          )}
        </ul>
      </Box>
    </>
  )

  export {List, TVShow}