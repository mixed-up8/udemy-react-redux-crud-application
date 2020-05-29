//lodashは配列の要素を操作するパッケージ
import _ from 'lodash'
import {
  CREATE_EVENT,
  READ_EVENTS,
  READ_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
} from '../actions'

//actionから値を受取ってstateに置けるようにreduce（変換）する
export default (events = {}, action) => {
  switch (action.type) {
    case CREATE_EVENT:
    case READ_EVENT:
    case UPDATE_EVENT:
      const data = action.response.data
      return { ...events, [data.id]: data }
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id')
    case DELETE_EVENT:
      delete events[action.id]
      //スプレッド演算子　こうすると新しいメモリ空間上に更新後のものをreducerが返してくれる
      return { ...events }
    default:
      return events
  }
}