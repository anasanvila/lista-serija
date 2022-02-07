import {theme as chakraTheme} from '@chakra-ui/react'
import {extendTheme} from '@chakra-ui/react'

const myChakraTheme = extendTheme({
    colors: {
      blue: {
        150: "#1976d2",
        250: "#2196f3"
      }
    },
    fonts: {
        ...chakraTheme.fonts,
        body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto, Oxygen-Sans, Ubuntu, Cantarell,Helvetica,Neue,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
        heading: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto, Oxygen-Sans, Ubuntu, Cantarell,Helvetica,Neue,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
      }
  })

export default myChakraTheme