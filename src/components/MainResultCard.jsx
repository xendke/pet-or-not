import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardTitle, CardBody, Button } from 'reactstrap';


const MainResultCard = ({ isPet, imageUrl, onResetClick }) => (
    <Card className="mb-3">
        <CardImg top width="100%" src={imageUrl} alt="Picture Submitted" />
        <CardBody>
          <CardTitle>{isPet ? "Pet detected!" : "No pet detected!"}</CardTitle>
          {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
          <CardText>Keep in mind that the results are affected by image quality.</CardText>
          <Button onClick={onResetClick}>Try Again</Button>
        </CardBody>
    </Card>
);

MainResultCard.propTypes = {
    isPet: PropTypes.bool.isRequired,
    imageUrl: PropTypes.string.isRequired,
    onResetClick: PropTypes.func.isRequired
    // TODO: use PropTypes.arrayOf() and shape()
}

export default MainResultCard;