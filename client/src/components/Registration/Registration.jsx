import React from 'react';
import Form from '../UI/Form';
import Input from '../Ui/Input';
import Button from '../UI/Button';
import { regInputs } from '../../contsants/components_consts';

function Registration() {
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
                        onChange={() => { }}
                        placeholder={input.placeholder}
                    />
                );
            })}
            <Button id="registration" onClick={() => { }} content="Submit" height="50px" />
        </Form>
    );
}

export default Registration;
