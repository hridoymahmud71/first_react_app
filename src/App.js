import React,{Component} from 'react';
import { directive } from '@babel/types';


class  App extends Component {

  render(){
    const name = 'Sam U Jackson';
    return(
      <div className="App">
          React
          {name}
      </div>
    );
  }

}

export default App;
