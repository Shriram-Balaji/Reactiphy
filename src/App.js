import React, { Component } from 'react';
import './App.css'
import Header from './Components/Header/'
import Graphics from './Components/Graphics/'
class App extends Component {
  constructor(){
     //ES Subclasses need to call the super class to initialize this
     super();
    this.state = {
      graphics: []
    }
  }

  getGraphics() {
    const API_KEY = '0fcb4f2ee1bf433090d2ac4736b08f79';
    let host = 'https://api.giphy.com';
    let path = '/v1/gifs/trending';
    let method = 'GET';
    let request = `${host}/${path}?api_key=${API_KEY}&limit=27`;
    let graphics = {};
    return fetch(request)
      .then((response) => {
          if(response.status!==200) {
            console.log('Error Response Code');
            return;
          }
          else{
            return response.json();
          }
        })
        .then((responseJSON) => {
            return responseJSON.data;
      });
  }


  //lifecycle method invoked before mounting and render() method.
  componentWillMount(){
    //Better to set state here.

  }

  componentDidMount(){
   this.getGraphics().then((graphics) => {
     this.setState({graphics: graphics})
    });
    //setting state here will cause re-rendering
  }


  render() {
    return (
      <div className="App">
        <Header app_name='Reactiphy'/>
        <Graphics graphics={this.state.graphics} />
      </div>
    );
  }
}

export default App;
