import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'
export const READ_EVENT = 'READ_EVENT'
export const CREATE_EVENT = 'CREATE_EVENT'
export const UPDATE_EVENT = 'UPDATE_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

export const readEvents = () => async dispatch => {
    //外部APIサーバにGETリクエストを投げる(テンプレートリテラルを使った場合)
    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
//    const response = await axios.get(ROOT_URL+"/events"+QUERYSTRING)
    //responseを含めたactionをdispatchでreducerに渡す
    dispatch({ type: READ_EVENTS, response }) 
}

//valuesは画面から受取ったTitleやBodyもろもろ。それが
export const postEvent = values => async dispatch => {
    //外部APIサーバにPOSTリクエストを投げる(テンプレートリテラルを使った場合)
    const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values)
    //responseを含めたactionをdispatchでreducerに渡す
    dispatch({ type: CREATE_EVENT, response }) 
}

export const putEvent = values => async dispatch => {
  console.log(values.id)
  const response = await axios.put(`${ROOT_URL}/events/${values.id}${QUERYSTRING}`)
  dispatch ({ type : UPDATE_EVENT, response })
}

export const getEvent = id => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
    dispatch ({ type : READ_EVENT, response })
}

//deleteEventにはパラメータidが渡ってくる
export const deleteEvent = id => async dispatch => {
    //外部APIサーバにDELETEリクエストを投げる(テンプレートリテラルを使った場合)
    const response = await axios.delete(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
    //削除されたidをdispatchでreducerに渡す
    dispatch({ type: DELETE_EVENT, id }) 
}
