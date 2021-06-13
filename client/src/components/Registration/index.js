import { connect } from 'react-redux';
import Registration from './Registration.jsx';
import { setRegistrationValue, sendRegistrationRequest } from '../../Store/registration/actions';
import { registrationField } from '../../Store/registration/selectors';

const mapStateToProps = state => ({
    fields: {
        email: registrationField(state, 'email'),
        confirm: registrationField(state, 'confirm'),
        success: registrationField(state, 'success'),
        lastName: registrationField(state, 'lastName'),
        password: registrationField(state, 'password'),
        firstName: registrationField(state, 'firstName'),
    },
});

const mapDispatchToProps = {
    setRegistrationValue,
    sendRegistrationRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
