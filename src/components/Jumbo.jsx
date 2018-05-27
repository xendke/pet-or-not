import React from 'react';
import { Jumbotron } from 'reactstrap';


const Jumbo = ({ results }) => (
    <Jumbotron> 
        <h1 className="display-4">AI For Cute Animals</h1>
        <hr className="my-2" />
        <p className="lead">
        This web app aims to demonstrate how impressive modern image recognition can be.
        </p>
        <p className="">
        Start by pasting your pet's picture link address below.
        </p>
    </Jumbotron>
);
export default Jumbo;