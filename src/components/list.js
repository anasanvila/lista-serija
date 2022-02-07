import React from 'react'
import { Flex} from '@chakra-ui/react'
import { Link } from 'react-router-dom' 
import { StarIcon} from '@chakra-ui/icons'

  const List = ({ list, handleAddFav, handleRemoveFav, favouritesList }) => (
    <ul>
      { list.map( ( item ) => {
          let isFavourite = favouritesList?.find(favItem=>favItem.id==item.id)
          return (
          <Flex key={`${item.id}-flex`} direction='row'>
            <Item
              key={item.id}
              item={item}
            />                 
            <StarIcon 
                  color={isFavourite?'red.500':'gray.400'} 
                  marginLeft='10px'
                  key={`${item.id}-add/remove`} 
                  onClick={isFavourite?()=>handleRemoveFav(item.id):()=>handleAddFav(item)}
                />
          </Flex>
          )})
      }
    </ul>
  )

  
  const Item = ({ item }) => (
    <li key={item.id}>
      <Link to={`/show/${item.id}`} >
        <span key={item.id}>{item.id}-{ item.name} / {item.rating}</span>
      </Link>
    </li>
  );

 
  export {List}