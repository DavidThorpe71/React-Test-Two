import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    picture: {}
  };

  getDogPic = () => {
    const endpoint = 'https://random.dog/woof.json';
    fetch(endpoint)
      .then(res => res.json())
      .then(res => { 
        this.setState({
          picture: res.url
        })
      })

  };

  // componentWillMount() {
  //   fetch('https://jsonplaceholder.typicode.com/posts/1')
  //     .then(data => {
  //       return data.json();
  //     })
  //     .then(data => {
  //       let picture = data;      
  //       this.setState({
  //         picture: picture
  //       })
  //     }) 
  // };

  render() {
    return (
      <div className="container">
        <div className="test">React API Tester</div>
        <button className="getdog" onClick={this.getDogPic} >Get Dog picture</button>
        <img src={this.state.picture} alt="dog"/>
      </div>
    );
  };
}

export default App;
