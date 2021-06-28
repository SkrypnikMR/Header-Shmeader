import Chat from './Chat.jsx';
import { connect } from 'react-redux';
import { init } from '/src/Store/chat/actions';

const mapDispatchToProps = dispatch => ({
    init: () => dispatch(init()),
});

export default connect(null, mapDispatchToProps)(Chat);
