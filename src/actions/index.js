import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'
export const CREATE_EVENT = 'CREATE_EVENT'
export const DELETE_EVENTS = 'DELETE_EVENTS'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

export const readEvents = () => async dispatch => {
    //外部APIサーバにGETリクエストを投げる(テンプレートリテラルを使った場合)
    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
//    const response = await axios.get(ROOT_URL+"/events"+QUERYSTRING)
    //responseを含めたactionをdispatchでreducerに渡す
    dispatch({ type: READ_EVENTS, response }) 
}

//valuesはTitleやBodyもろもろ
export const postEvent = values => async dispatch => {
    //外部APIサーバにPOSTリクエストを投げる(テンプレートリテラルを使った場合)
    const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values)
    //responseを含めたactionをdispatchでreducerに渡す
    dispatch({ type: CREATE_EVENT, response }) 
}

//deleteEventにはパラメータidが渡ってくる
export const deleteEvent = id => async dispatch => {
    //外部APIサーバにDELETEリクエストを投げる(テンプレートリテラルを使った場合)
    const response = await axios.delete(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
    //削除されたidをdispatchでreducerに渡す
    dispatch({ type: DELETE_EVENTS, id }) 
}
