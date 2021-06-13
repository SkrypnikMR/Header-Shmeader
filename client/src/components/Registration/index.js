import { connect } from 'react-redux';
import Registration from './Registration.jsx';
import { setRegistrationValue, sendRegistrationRequest } from '../../Store/registration/actions';
import { registrationStore } from '../../Store/registration/selectors';

const mapStateToProps = state => ({ fields: registrationStore(state) });

const mapDispatchToProps = { setRegistrationValue, sendRegistrationRequest };

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
