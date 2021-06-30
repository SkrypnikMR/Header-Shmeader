import { connect } from 'react-redux';
import ChatTitle from './ChatTitle.jsx';
import { currentRoomName } from '/src/Store/chat/selectors';
import { changeModalVisibility } from '/src/Store/modals/actions';

const mapStateToProps = state => ({ 
    currentRoomName: currentRoomName(state),
});

const mapDispatchToProps = dispatch => ({
    changeModalVisibility: payload => dispatch(changeModalVisibility(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatTitle);
