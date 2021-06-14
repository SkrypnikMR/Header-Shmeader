import React from 'react';
import PropTypes from 'prop-types';
import { logInputs } from '/src/contsants/componentsСonsts';
import Form from '../UI/Form';
import Input from '../Ui/Input';
import Button from '../UI/Button';

const Login = ({ sendLoginRequest, setLoginValue, fields }) => {
    return (
        <Form>
            <p>Sign In</p>
            {logInputs.map(input => (
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
                    onChange={setLoginValue}
                    placeholder={input.placeholder}
                />
            ))}
            <Button
                height="50px"
                content="Submit"
                id="login"
                onClick={sendLoginRequest}
            />
        </Form>
    );
};

Login.propTypes = {
    sendLoginRequest: PropTypes.func.isRequired,
    setLoginValue: PropTypes.func.isRequired,
    fields: PropTypes.object.isRequired,
};

export default Login;
