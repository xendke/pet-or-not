import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Row, Col, Input, Button } from 'reactstrap';
import Dropbox from '../components/Dropbox';


const InputForm = ({ handleClick, handleFileDrop }) => { // NOTE: or ( props ) and use props.handleClick below
    return (
        <Row>
        <Col>
        <Form className="w-100" onSubmit={handleClick}>
        <FormGroup row>
            <Col sm="12">
                <Dropbox handleFileDrop={handleFileDrop}/>
            </Col>
        </FormGroup>
        <FormGroup row>
            <Col sm="8">
                <Input type="text" innerRef={ref => this.input = ref} placeholder="URL"/>
                {/* ref still works! (but now we pass the value back up to parent through handleClick)*/}
            </Col>
            <Col sm="4">
                <Button className="w-100" size="md" color="primary" onClick={e => handleClick(e, this.input.value)}>Predict!</Button>
            </Col>
        </FormGroup>
        </Form>
        </Col>
        </Row>
    )
};

InputForm.propTypes = {
    handleClick: PropTypes.func.isRequired,
    handleFileDrop: PropTypes.func.isRequired
}

export default InputForm;