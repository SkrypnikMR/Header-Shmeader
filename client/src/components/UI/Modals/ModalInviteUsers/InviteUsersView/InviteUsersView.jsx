import * as React from 'react';
import PropTypes from 'prop-types';

const InviteUsersView = ({ modalData }) => {
    console.log(modalData, 'modalData');
    return <div>I am User Invite View</div>;
};

InviteUsersView.propTypes = {
    modalData: PropTypes.object,
};

export default InviteUsersView;
