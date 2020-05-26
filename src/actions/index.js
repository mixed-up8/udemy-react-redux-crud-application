import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token=123'

export const readEvents = () => async dispatch => {
    //外部サーバにリクエストを投げる
    const response = await axios.get('${ROOT_URL}/events${QUERYSTRING}')
    console.log(response)
    //reducerに渡す
    dispatch({ type: READ_EVENTS, response }) 
}


