import MyAccount from './MyAccount.jsx';
import { connect } from 'react-redux';
import { userInfo, changeUser } from '../../Store/user/selectors';
import { setValue } from '../../Store/user/actions';

const mapStateToProps = state => ({ userInfo: userInfo(state), changeUser: changeUser(state)});
const mapDispatchToProps = dispatch => ({
    setValue: payload => dispatch(setValue(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount);
