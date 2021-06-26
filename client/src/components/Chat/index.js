import Chat from './Chat.jsx';
import { connect } from 'react-redux';
import { connection, getAllRooms } from '/src/Store/chat/actions';
import { userInfo } from '/src/Store/user/selectors';

const mapStateToProps = state => ({ userID: userInfo(state).id });

const mapDispatchToProps = dispatch => ({
    connection: () => dispatch(connection()),
    getAllRooms: payload => dispatch(getAllRooms(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
