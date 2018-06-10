import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';


const ConceptList = ({ concepts }) => (
    <Fragment>
    <h6 className="mb-3">More in this picture:</h6>
    <ListGroup className="mx-auto mb-4 w-100">
        { 
            concepts.map( 
                (concept) => (<ListGroupItem key={concept.id}>{concept.name}</ListGroupItem>) 
            )
        }
    </ListGroup>
    </Fragment>
);

ConceptList.propTypes = {
    concepts: PropTypes.array.isRequired 
    // TODO: use PropTypes.arrayOf() and shape()
}

export default ConceptList;