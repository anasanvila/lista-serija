import {useContext} from 'react';
import Main from './main/main';
import Header from '../components/header';
import Footer from '../components/footer';
import { ChakraProvider, Box, Text } from '@chakra-ui/react'
import { ThemeContext } from "../context/themeContext";
import myChakraTheme from '../styles/theme'

function App() {
  const theme = useContext(ThemeContext);
  let darkMode = theme.state.darkMode;
  
  const colorsDarkMode = {
    background:'black',
    color:'white'
  }
  const colorsLightMode = {
    background:'white',
    color:'black'
  }
  
  return (
    <ChakraProvider theme={myChakraTheme}>
      <Box style={darkMode?colorsDarkMode:colorsLightMode} w='100%'>
        <Header/>
        <Main>
          <Text>
              {darkMode ? "Dark Mode" : "Light Mode"}
          </Text>
        </Main>
        <Footer/>
      </Box>
    </ChakraProvider>
  );
}

export default App;