//import React from 'react';
import React, { Component } from 'react';
/*
function App() {
  return (
    <div>Hello, world</div>
    
  );
}
 */
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
export default App;
