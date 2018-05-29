import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Row, Col, Input, Button } from 'reactstrap';
import Dropzone from 'react-dropzone';

const dropzoneStyle = {
    width: '100%',
    height: 150,
    lineHeight: '150px',
    borderWidth: 2,
    borderColor: 'rgb(102, 102, 102)',
    borderStyle: 'dashed',
    borderRadius: 5,
    textAlign: 'center',
}

const InputForm = ({ handleClick, handleFileDrop }) => { // NOTE: or ( props ) and use props.handleClick below
    
    return (
    <Row>
    <Col>
    <Form className="w-100" onSubmit={handleClick}>
    <FormGroup row>
        <Col sm="8">
            <Input type="text" innerRef={ref => this.input = ref} placeholder="URL"/>
            {/* ref still works! (but now we pass the value back up to parent through handleClick)*/}
        </Col>
        <Col sm="4">
            <Button className="w-100" size="md" color="primary" onClick={e => handleClick(e, this.input.value)}>Predict!</Button>
        </Col>
        </FormGroup>
        <FormGroup row>
        <Col sm="12">
            <Dropzone style={dropzoneStyle} accept="image/*" onDrop={handleFileDrop}>
                {({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => {
                    if (isDragActive) {
                        return "Drop here!";
                    }
                    if (acceptedFiles.length > 0) {
                        return "Ready!";
                    }
                    if (rejectedFiles.length > 0) {
                        return "Try a different file.";
                    }
                    
                    return "Choose or drop file here!";
                }}
            </Dropzone>
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