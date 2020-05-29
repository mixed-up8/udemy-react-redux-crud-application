// EventIndex というコンポーネントの処理　
import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

import { readEvents } from '../actions'

class EventsIndex extends Component {
  // render直後（Did）に行いたい処理として、一覧表示処理を呼ぶ
  componentDidMount() {
    //データ取得するreadEventsを呼ぶ
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <TableRow key={event.id}>
        <TableRowColumn>{event.id}</TableRowColumn>
        <TableRowColumn>
          <Link to={`/events/${event.id}`}>
            {event.title}
          </Link>
        </TableRowColumn>
        <TableRowColumn>{event.body}</TableRowColumn>
      </TableRow>
    ))
  }
  render() {
    const style = {
      position: "fixed",
      right: 12,
      bottom: 12
    }
    return (
      <React.Fragment>
        <FloatingActionButton styles={style} containerElement={<Link to="/events/new" /> }>
          <ContentAdd/>
        </FloatingActionButton>
        <Table>
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
          >
            <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Title</TableHeaderColumn>
            <TableHeaderColumn>Body</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.renderEvents()}
          </TableBody>
        </Table>
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

