import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Logo from './components/Logo/logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '4c04c610c1d44452ac731de616ac04cf'
});

class App extends Component {
  constructor(){
    super();
    this.state={
      input:'',
      imageUrl:''
    }
  }

  onInputChange=(event)=>{
    this.setState({input:event.target.value});
  }

  onSubmit=()=>{
    this.setState({imageUrl:this.state.input})
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input).then(
    function(response) {
      console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
    },
    function(err) {
      // there was an error
    }
  );
  }
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
        <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
