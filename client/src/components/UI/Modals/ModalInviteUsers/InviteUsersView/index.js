import { connect } from 'react-redux';
import InviteUsersView from './InviteUsersView.jsx';
import { getModalDataByType } from '/src/Store/modals/selectors';

const mapStateToProps = (state, ownProps) => ({
    modalData: getModalDataByType(state, ownProps),
});

export default connect(mapStateToProps)(InviteUsersView);
