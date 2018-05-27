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
      imgUrl: ""
    };
    this.handleClick = this.handleClick.bind(this);

  }

  async handleClick(e, textValue) {
    e.preventDefault();

    const { clarifai } = this.props;
    const data = await clarifai.models.predict(Clarifai.GENERAL_MODEL, textValue);
    const concepts = data.outputs[0].data.concepts;
    
    this.setState((prevState, props) => {
      return {
        results: concepts,
        imgUrl: textValue
      }
    });
  }

  componentDidMount() {

  }

  render() {
    return (
      <Container className="mb-5">
        { this.state.results.length > 0 ? null : <Jumbo/> }
        <InputForm handleClick={this.handleClick}/>  
        { this.state.results.length > 0 ? <ApiResults concepts={this.state.results} imgUrl={this.state.imgUrl}/> : null }
      </Container>
    );
  }
}

export default Main;
