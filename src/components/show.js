import React from 'react'
import { Box, Heading } from '@chakra-ui/react'

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
  
  export {TVShow}