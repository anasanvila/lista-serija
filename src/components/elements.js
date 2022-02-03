import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom' 

  const List = ({ list }) => (
    <ul>
      {list.map((item) => (
        <Item
          key={item.id}
          item={item}
        />
      ))}
    </ul>
  );
  
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
      <i>{show.summary}</i>
      
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