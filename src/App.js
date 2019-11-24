import React, { Component } from 'react';
import  Component1 from './functional/component1'
import  Container1 from './container/container1'



class App extends Component {
  
  render() {
    
    return (
      <div className="App">
       <Container1 nick="fury" max="mad" />
        <Component1 name="Hanaka" age="25"/>
      </div>
    );
  }

}

export default App;
