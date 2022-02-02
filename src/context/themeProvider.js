import {useReducer} from 'react'
import { ThemeContext } from './themeContext'
import { themeReducer } from '../state/themeReducer'
import {initialState} from '../state/initialState'

export default function ThemeProvider(props) {
    const [state, dispatch] = useReducer(themeReducer, initialState);
    return <ThemeContext.Provider value={{state:state, dispatch:dispatch}}>
        {props.children}
    </ThemeContext.Provider>
}