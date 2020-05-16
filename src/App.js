import React from 'react';
import PropTypes from 'prop-types';

//import React, { Component } from 'react';

const App = () => {
  const profiles = [
    { name: "Taro", age:10 },
    { name: "Hanako", age:5 },
    { name: "NoName" }
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name ={profile.name} age={profile.age} key= {index}/>
        })
      }
    </div>
  )
}
const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}
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

export default App;
