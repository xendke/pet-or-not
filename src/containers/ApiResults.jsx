import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import Concepts from '../components/Concepts';
import MainResult from '../components/MainResult';


const ApiResults = ({ concepts, imgUrl }) => {
    const petKeyWords = ['pet', 'dog', 'cat', 'fish', 'animal'];
    const isPet = (concepts) => {
        console.log(concepts);
        let isPet = false;
        for (let concept of concepts) {
            if (petKeyWords.includes(concept.name)) {
                isPet = true
                return isPet
            }
        }
        return isPet;
    }
    return (
    <Fragment>
    <Row>
        <Col>
            <MainResult imgUrl={imgUrl} isPet={isPet(concepts)}/>
        </Col>
    </Row>
    <Row>
        <Col>
            <Concepts concepts={concepts}/>
        </Col>
    </Row>
    </Fragment>
)};

ApiResults.propTypes = {
    concepts: PropTypes.array.isRequired, 
    imgUrl: PropTypes.string.isRequired
    // TODO: use PropTypes.arrayOf() and shape()
}

export default ApiResults;