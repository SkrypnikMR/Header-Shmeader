import React from 'react';
import PropTypes from 'prop-types';
import Form from '../UI/Form';
import Input from '../Ui/Input';
import Button from '../UI/Button';
import { regInputs } from '../../contsants/componentsСonsts';

const Registration = ({ sendRegistrationRequest, setRegistrationValue, fields }) => {
    return (
        <Form>
            <p>Sign Up</p>
            {regInputs.map(input => (
                <Input
                    width="80%"
                    id={input.id}
                    key={input.id}
                    name={input.id}
                    height="100px"
                    inputHeight="50px"
                    borderRadius="5px"
                    label={input.label}
                    value={fields[input.id]}
                    onChange={setRegistrationValue}
                    placeholder={input.placeholder}
                />
            ))}
            <Button id="registration" onClick={sendRegistrationRequest} content="Submit" height="50px" />
        </Form>
    );
};

Registration.propTypes = {
    sendRegistrationRequest: PropTypes.func.isRequired,
    setRegistrationValue: PropTypes.func.isRequired,
    fields: PropTypes.object.isRequired,
};

export default Registration;
