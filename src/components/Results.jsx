import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';


const Results = ({ results }) => (
    <ListGroup className="mx-auto mb-4 w-100">
          { 
            results.map( 
                (concept) => (<ListGroupItem key={concept.id}>{concept.name}</ListGroupItem>) 
            )
          }
    </ListGroup>
);

Results.propTypes = {
    results: PropTypes.array.isRequired 
    // TODO: use PropTypes.arrayOf() and shape()
}

export default Results;