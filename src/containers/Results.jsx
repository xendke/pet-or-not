import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import ConceptList from '../components/ConceptList';
import MainResultCard from '../components/MainResultCard';


const Results = ({ concepts, imageUrl, onResetClick }) => {
    const petKeyWords = ['pet', 'dog', 'cat', 'fish', 'animal'];
    const isPet = (concepts) => {
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
        <Col sm="5">
            <MainResultCard onResetClick={onResetClick} imageUrl={imageUrl} isPet={isPet(concepts)}/>
        </Col>
        <Col>
            <ConceptList concepts={concepts}/>
        </Col>
    </Row>
    </Fragment>
)};

Results.propTypes = {
    concepts: PropTypes.array.isRequired, 
    imageUrl: PropTypes.string.isRequired,
    onResetClick: PropTypes.func.isRequired
    // TODO: use PropTypes.arrayOf() and shape()
}

export default Results;