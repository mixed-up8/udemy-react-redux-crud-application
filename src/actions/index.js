import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

export const readEvents = () => async dispatch => {
    //外部APIサーバにリクエストを投げる(テンプレートリテラルを使った場合)
    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
//    const response = await axios.get(ROOT_URL+"/events"+QUERYSTRING)
    //responseを含めたactionをdispatchでreducerに渡す
    dispatch({ type: READ_EVENTS, response }) 
}


