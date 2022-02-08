import { useReducer, useEffect, useCallback } from 'react'
import { useParams } from 'react-router'
import {API_ENDPOINT, API_BASE} from '../../components/constants'
import { Container, Text} from '@chakra-ui/react'
import { mapResult } from '../../utils/mapAndSortFunctions'
import showReducer from '../../state/showReducer'
import { Show } from '../../components/show'
import axios from 'axios'

const ShowPage = () => {
    const { id } = useParams()
    const [show, dispatchShow] = useReducer(
        showReducer,
        {data:[], isLoading:false, isError: false}
    )

    let url = `${API_ENDPOINT}${API_BASE}/${id}?embed=cast`

    const handleFetchShow = useCallback(
        async () => {
            dispatchShow({ type: 'SHOW_FETCH_INIT' })
            try {
                const result = await axios.get(url);
                let mappedData = mapResult(result.data)
                dispatchShow({
                    type: 'SHOW_FETCH_SUCCESS',
                    payload: mappedData
                })
            } catch {
                dispatchShow({ type: 'SHOW_FETCH_FAILURE' })
            }
    },[url])

    useEffect(()=>handleFetchShow(),[handleFetchShow])

    return (
        <Container  maxWidth='90vw' p='0'>
            {show.isError && <Text>Something went wrong...</Text>}
            {show.isLoading
                ?<Text>Loading...</Text>
                :(
                    !show.isError &&<Show show={show.data} />
        
                )}
        </Container>
    );
}

export default ShowPage