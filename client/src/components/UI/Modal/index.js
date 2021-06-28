import ModalComponent from './ModalComponent.jsx';
import { connect } from 'react-redux';
import { changeModalVisibility } from '/src/Store/modals/actions';
import { getModalVisibilityByType } from '/src/Store/modals/selectors';

const mapStateToProps = (state, ownProps) => ({ modalType: getModalVisibilityByType(state, ownProps) });

const mapDispatchToProps = dispatch => ({
    changeModalVisibility: payload => dispatch(changeModalVisibility(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalComponent);
