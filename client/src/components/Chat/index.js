import Chat from './Chat.jsx';
import { connect } from 'react-redux';
import { connection } from '/src/Store/chat/actions';

const mapDispatchToProps = dispatch => ({
    connection: () => dispatch(connection()),
});

export default connect(null, mapDispatchToProps)(Chat);
