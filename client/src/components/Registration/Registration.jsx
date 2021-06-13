import React from 'react';
import PropTypes from 'prop-types';
import Form from '../UI/Form';
import Input from '../Ui/Input';
import Button from '../UI/Button';
import { regInputs } from '../../contsants/components_consts';

function Registration(props) {
    const { sendRegistrationRequest } = props;
    return (
        <Form>
            <p>Sign Up</p>
            {regInputs.map((input) => {
                return (
                    <Input
                        width="80%"
                        id={input.id}
                        key={input.id}
                        height="100px"
                        inputHeight="50px"
                        borderRadius="5px"
                        label={input.label}
                        value={props[input.id]}
                        onChange={props[`${input.id}Func`]}
                        placeholder={input.placeholder}
                    />
                );
            })}
            <Button id="registration" onClick={sendRegistrationRequest} content="Submit" height="50px" />
        </Form>
    );
}
Registration.propTypes = {
    sendRegistrationRequest: PropTypes.func.isRequired,
};
export default Registration;
