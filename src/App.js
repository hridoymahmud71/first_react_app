import React, { Component } from 'react';
// import Component1 from './functional/component1'
//  import Container1 from './container/container1'



class App extends Component {
  // cities = [
  //   { id: 1, post: "jakarta" },
  //   { id: 2, post: "bali" },
  //   { id: 3, post: "rangoon" },
  //   { id: 4, post: "pataya" },
  //   { id: 5, post: "hanoi" },
  //   { id: 6, post: "chiang mai" },
  //   { id: 7, post: "kualalampur" },
  // ]

  // renderCities = (props) => (
  //   <div>
  //     <p>
  //       {props.city.post}
  //     </p>
  //     <p>
  //       {props.city.id}
  //     </p>

  //   </div>
  // )

  state = {
    value: ''
  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({
      value: event.target.value
    })
  }



  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.name.value);

  }





  render() {



    return (
      <div className="App">
        {this.state.value}
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input id="name" type="text" onChange={this.handleChange}></input>
          <button type="submit">Submit</button>
        </form>


        {/* {
        this.cities.map((city,idx) => (<this.renderCities city={city} key={idx}/>)) 
        }
        <Container1 nick="fury" max="mad" />   */}
      </div>
    );
  }

}

export default App;
