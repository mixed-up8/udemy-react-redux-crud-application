//配列の要素を操作するパッケージ
import _ from 'lodash'
import { READ_EVENTS } from '../actions'

//actionから値を受取ってstateに置けるようにreduce（変換）する
export default( events = {}, action) => {
    switch (action.type) {
        case READ_EVENTS:
            return _.mapKeys(action.response.data, 'id')
        default:
            return events
    }
}