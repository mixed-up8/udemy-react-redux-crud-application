import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'
import { Link } from 'react-router-dom'

import { readEvents } from '../actions'

class EventsIndex extends Component {
  componentDidMount() {
    //データ取得するreadEventsを呼ぶ
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
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

//reducerが変更した状態(state)を扱う
const mapStateToProps = state => ({　events : state.events  })

const mapDispatchToProps = ({　readEvents })

export default connect (mapStateToProps, mapDispatchToProps)(EventsIndex)

/* 
class App extends Component {
  render() {
    return (
      <div>
      <label htmlFor="bar">bar</label>
      <input type="text" id="bar" onClick={() => {console.log("I am clicked")}} />
      </div>
    )
  }
}
 */

//export default App;
