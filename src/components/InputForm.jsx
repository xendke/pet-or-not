import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Col, Input, Button } from 'reactstrap';

const InputForm = ({ handleClick }) => ( // NOTE: or ( props ) and use props.handleClick below
    <Form className="w-100">
        <FormGroup row>
        <Col sm="8">
            <Input type="text" innerRef={ref => this.input = ref}/>
            {/* ref still works! (but now we pass the value back up to parent through handleClick)*/}
        </Col>
        <Col sm="4">
            <Button className="w-100" size="md" color="primary" onClick={e => handleClick(e, this.input.value)}>Predict!</Button>
        </Col>
        </FormGroup>
    </Form>
);

InputForm.propTypes = {
    handleClick: PropTypes.func.isRequired
}

export default InputForm;