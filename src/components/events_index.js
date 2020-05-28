// EventIndex というコンポーネントの処理　
import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'
import { Link } from 'react-router-dom'

import { readEvents } from '../actions'

class EventsIndex extends Component {
  // render直後（Did）に行いたい処理として、一覧表示処理を呼ぶ
  componentDidMount() {
    //データ取得するreadEventsを呼ぶ
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>
          <Link to={`/events/${event.id}`}>
            {event.title}
          </Link>
        </td>
        <td>{event.body}</td>
      </tr>
    ))
  }
  render() {
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>
        <Link to="/events/new">New Event</Link>
      </React.Fragment>
    )
  }
}

//stateをpropsとして扱うことができるようにする
//reducerが変更した状態(state)を扱う
const mapStateToProps = state => ({　events : state.events  })

//action関数をpropsとして使うことができるようにする
const mapDispatchToProps = ({　readEvents })

//StateとActionを関連づける
export default connect (mapStateToProps, mapDispatchToProps)(EventsIndex)

