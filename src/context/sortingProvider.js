import {useReducer} from 'react'
import SortingContext from './sortingContext'
import { sortingReducer } from '../state/sortingReducer'
import {sortingInitialState} from '../state/sortingInitialState'

export default function SortingProvider(props) {
    const [state, dispatch] = useReducer(sortingReducer, sortingInitialState);
    return (<SortingContext.Provider value={{state:state, dispatch:dispatch}}>
        {props.children}
    </SortingContext.Provider>)
}