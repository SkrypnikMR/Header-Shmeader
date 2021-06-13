import { connect } from 'react-redux';
import Registration from './Registration.jsx';
import { setEmailValue, setPasswordValue, setConfirmValue, setFirstNameValue, setLastNameValue, sendRegistrationRequest } from '../../Store/registration/actions';
import { registrationField } from '../../Store/registration/selectors';

const mapStateToProps = state => ({
    email: registrationField(state, 'email'),
    confirm: registrationField(state, 'confirm'),
    success: registrationField(state, 'success'),
    lastName: registrationField(state, 'lastName'),
    password: registrationField(state, 'password'),
    firstName: registrationField(state, 'firstName'),
});

const mapDispatchToProps = {
    emailFunc: setEmailValue,
    confirmFunc: setConfirmValue,
    lastNameFunc: setLastNameValue,
    passwordFunc: setPasswordValue,
    firstNameFunc: setFirstNameValue,
    sendRegistrationRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
