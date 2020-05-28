//lodashは配列の要素を操作するパッケージ
import _ from 'lodash'
import {
  READ_EVENTS,
  DELETE_EVENTS,
} from '../actions'

//actionから値を受取ってstateに置けるようにreduce（変換）する
export default( events = {}, action) => {
    switch (action.type) {
        case READ_EVENTS:
          return _.mapKeys(action.response.data, 'id')
        case DELETE_EVENTS:
          delete events[action.id]
          //スプレッド演算子　こうすると新しいメモリ空間上に更新後のものをreducerが返してくれる
          return { ...events }
        default:
          return events
    }
}