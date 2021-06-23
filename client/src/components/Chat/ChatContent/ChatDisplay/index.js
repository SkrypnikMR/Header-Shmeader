import { connect } from 'react-redux';
import ChatDisplay from './ChatDisplay.jsx';
import { messages, userInfo } from '../../../../Store/user/selectors';

const mapStateToProps = state => ({
    messages: messages(state),
    currentUser: userInfo(state).email,
});

export default connect(mapStateToProps)(ChatDisplay);
