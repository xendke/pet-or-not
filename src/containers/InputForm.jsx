import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Row, Col, Input, Button } from 'reactstrap';
import Dropbox from '../components/Dropbox';


const InputForm = ({ onSubmitClick, onFileDrop }) => { // NOTE: or ( props ) and use props.onSubmitClick below
    const inputRef = useRef(null)

    return (
        <Row>
        <Col>
        <Form className="w-100" onSubmit={onSubmitClick}>
        <FormGroup row>
            <Col sm="12">
                <Dropbox handleFileDrop={onFileDrop}/>
            </Col>
        </FormGroup>
        <FormGroup row>
            <Col sm="8">
                <Input type="text" innerRef={inputRef} placeholder="URL"/>
            </Col>
            <Col sm="4">
                <Button 
                    className="w-100" 
                    size="md" 
                    color="primary" 
                    onClick={e => onSubmitClick(e, inputRef.current.value)}
                >
                    Predict!
                </Button>
            </Col>
        </FormGroup>
        </Form>
        </Col>
        </Row>
    )
};

InputForm.propTypes = {
    onSubmitClick: PropTypes.func.isRequired,
    onFileDrop: PropTypes.func.isRequired
}

export default InputForm;