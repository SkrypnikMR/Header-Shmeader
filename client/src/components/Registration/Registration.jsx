import React from 'react';
import PropTypes from 'prop-types';
import { regInputs } from '/src/contsants/componentsСonsts';
import { NavLink, useHistory } from 'react-router-dom';
import Form from '../UI/Form';
import Input from '../Ui/Input';
import Button from '../UI/Button';

const Registration = ({ sendRegistrationRequest, setRegistrationValue, fields }) => {
    const history = useHistory();
    if (fields.success) history.push('/');
    return (
        <Form>
            <p>Sign Up</p>
            {regInputs.map(input => (
                <Input
                    width="80%"
                    id={input.id}
                    height="100px"
                    key={input.id}
                    name={input.id}
                    inputHeight="50px"
                    borderRadius="5px"
                    label={input.label}
                    value={fields[input.id]}
                    onChange={setRegistrationValue}
                    placeholder={input.placeholder}
                />
            ))}
            <Button
                height="50px"
                content="Submit"
                id="registration"
                onClick={sendRegistrationRequest}
            />
            <span>
                Already Registered?
                <NavLink to='/'>Sign In</NavLink>
            </span>
        </Form>
    );
};

Registration.propTypes = {
    sendRegistrationRequest: PropTypes.func.isRequired,
    setRegistrationValue: PropTypes.func.isRequired,
    fields: PropTypes.object.isRequired,
};

export default Registration;
