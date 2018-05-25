import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import Clarifai from 'clarifai';
import Results from '../components/Results';
import InputForm from '../components/InputForm';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
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
        results: concepts
      }
    });
  }

  componentDidMount() {

  }

  render() {
    return (
      <Container className="mb-5">
        {this.state.results.length > 0 ? 
          null : 
          <Jumbotron> 
              <h1 className="display-4">AI For Cute Animals</h1>
              {/* <p className="lead">Image recognition is </p> */}
              <hr className="my-2" />
              <p className="lead">
                This web app aims to demonstrate how impressive modern image recognition can be.
                </p>

              <p className="">
                Start by pasting your pet's picture link address below.
              </p>
          </Jumbotron>
        }
        <Row>
          <Col>
            <InputForm handleClick={this.handleClick}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <Results results={this.state.results}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
