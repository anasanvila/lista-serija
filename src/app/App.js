import {useContext} from 'react';
import Main from './main/main';
import Header from '../components/header';
import Footer from '../components/footer';
import { ChakraProvider} from '@chakra-ui/react'
import { ThemeContext } from "../context/themeContext";
import myChakraTheme from '../utils/theme'

function App() {
  const theme = useContext(ThemeContext);
  let darkMode = theme.state.darkMode;

 if (darkMode) {
   document.body.style.background = 'black'
   document.body.style.color = 'white'
  }
 if (!darkMode) {
   document.body.style.background = 'white'
   document.body.style.color = 'black'
  }


  return (
    <ChakraProvider theme={ myChakraTheme }>    
        <Header/>
          <Main/>
        <Footer/>
    </ChakraProvider>
  );
}

export default App;