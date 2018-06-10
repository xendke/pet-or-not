import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardTitle, CardBody } from 'reactstrap';


const MainResultCard = ({ isPet, imageUrl }) => (
    <Card className="mb-3">
        <CardImg top width="100%" src={imageUrl} alt="Picture Submitted" />
        <CardBody>
          <CardTitle>{isPet ? "Pet detected!" : "No pet detected!"}</CardTitle>
          {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
          <CardText>Keep in mind that the results are affected by image quality.</CardText>
          {/* <Button>Button</Button> */}
        </CardBody>
    </Card>
);

MainResultCard.propTypes = {
    isPet: PropTypes.bool.isRequired,
    imageUrl: PropTypes.string.isRequired
    // TODO: use PropTypes.arrayOf() and shape()
}

export default MainResultCard;