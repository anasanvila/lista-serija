import {useReducer} from 'react'
import { ThemeContext } from './themeContext'
import { themeReducer } from '../state/themeReducer'
import {themeInitialState} from '../state/themeInitialState'

export default function ThemeProvider(props) {
    const [state, dispatch] = useReducer(themeReducer, themeInitialState);
    return <ThemeContext.Provider value={{state:state, dispatch:dispatch}}>
        {props.children}    </ThemeContext.Provider>
}