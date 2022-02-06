import { useContext } from "react";
import { Switch } from '@chakra-ui/react'
import { ThemeContext } from "../context/themeContext";

export default function SwitchThemeButton() {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
  
    const onChange = () => {
      if (darkMode)
        theme.dispatch({ type: "LIGHTMODE" });
      else
        theme.dispatch({ type: "DARKMODE" });
    };
  
    return (
      <Switch onChange={onChange} paddingTop='2px'>
        {/* <span style={{fontSize:'12px'}}><i>{darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}</i></span> */}
      </Switch>
    );
  }