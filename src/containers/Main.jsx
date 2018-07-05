import React, { Component } from 'react';
import { Container, Progress } from 'reactstrap';
import Clarifai from 'clarifai';
import Results from '../containers/Results';
import InputForm from './InputForm';
import Jumbo from '../components/Jumbo';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      imageUrl: "",
      binaryFileString: "",
      loading: false
    };
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.handleFileDrop = this.handleFileDrop.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleReset() {
    console.log("test");
    this.setState(() => (
      {
        results: [],
        imageUrl: "",
        binaryFileString: "",
        loading: false
      }
    ));
  }

  handleFileDrop(acceptedFile) {
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

  async handleSubmitClick(e, typedUrl) {
    e.preventDefault();
    const { clarifai } = this.props;

    // stop if there is no information to send to api
    if(!typedUrl && !this.state.binaryFileString) return
    this.setState(() => {
      return {loading: true}
    });

    try {
      let fileData = typedUrl || {base64: this.state.binaryFileString};
      let imageUrl = typedUrl || this.state.imageUrl; // to be used by img's src attr.

      let data = await clarifai.models.predict(Clarifai.GENERAL_MODEL, fileData);
      const concepts = data.outputs[0].data.concepts;

      this.setState((prevState, props) => {
        return {
          results: concepts,
          imageUrl: imageUrl,
          loading: false
        }
      });
    } catch(e) {
      alert("Error. Try a different image or url.");
      this.handleReset();
    }
  }

  componentDidMount() {

  }

  render() {
    const { results, loading, imageUrl } = this.state;
    return (
      <Container className="mb-5">
        { results.length > 0 ? 
        <Results concepts={results} imageUrl={imageUrl} onResetClick={this.handleReset}/> : 
          <div>
            <Jumbo/>
            { loading ? 
              <div>
                <p className="text-center">Loading...</p>
                <Progress animated value="100" />
              </div> : 
              <InputForm onSubmitClick={this.handleSubmitClick} onFileDrop={this.handleFileDrop}/>  
            }
          </div>
        }
      </Container>
    );
  }
}

export default Main;
