import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Clarifai from 'clarifai';
import ApiResults from '../containers/ApiResults';
import InputForm from './InputForm';
import Jumbo from '../components/Jumbo';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      imageUrl: "",
      binaryFileString: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleFile = this.handleFile.bind(this);

  }

  handleFile(acceptedFile) {
    if (acceptedFile.length === 1) {    
      const file = acceptedFile[0];
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result;
        const binaryString = dataUrl.substring(dataUrl.indexOf("base64,")+7);
        
        this.setState(() => {
          return {
            binaryFileString: binaryString,
            imageUrl: dataUrl
          }
        });
      }
      reader.readAsDataURL(file);
    }
  }

  async handleClick(e, typedUrl) {
    e.preventDefault();
    const { clarifai } = this.props;

    // stop if there is no information to send to api
    if(!typedUrl && !this.state.binaryFileString) return

    try {
      let fileData = typedUrl || {base64: this.state.binaryFileString};
      let imageUrl = typedUrl || this.state.imageUrl; // to be used by img's src attr.

      let data = await clarifai.models.predict(Clarifai.GENERAL_MODEL, fileData);
      const concepts = data.outputs[0].data.concepts;

      this.setState((prevState, props) => {
        return {
          results: concepts,
          imageUrl: imageUrl
        }
      });
    } catch(e) {
      alert("Error. Try a different image or url.");
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <Container className="mb-5">
        { this.state.results.length > 0 ? null : <Jumbo/> }
        { this.state.results.length > 0 ? <ApiResults concepts={this.state.results} imageUrl={this.state.imageUrl}/> : null }
        <InputForm handleClick={this.handleClick} handleFileDrop={this.handleFile}/>  
      </Container>
    );
  }
}

export default Main;
