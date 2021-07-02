import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '/src/components/UI/Input';
import { StChatListItems, StPhoto, StUsersView } from './styled';
import { INPUT__MESSAGE } from '/src/constants/componentsСonsts.js';
 
const InviteUsersView = ({ img, email, reciveSuccessUsersRequest, id }) => {
    // console.log(modalData, 'modalData');
    const handleClick = () => reciveSuccessUsersRequest({ name: 'currentUser', value: { user_id: id, user_email: email } });
    const [state, setState] = useState({
      error: false, 
      src: img,
      defaultImg: '../../../../public/assets/images/user.png',
    });
    const onError = () => setState({ ...state, error: true, src: state.defaultImg });
    return (
    <StUsersView>
        <StChatListItems onClick={handleClick}>
            <StPhoto>
                <img src={img ? state.src : state.defaultImg} onError={onError} />
            </StPhoto>
            <div> 
                {email}
                Name Name
            </div>
        </StChatListItems>
        <Input
            type="checkbox"
            id={INPUT__MESSAGE.id}
            height="30px"
            key={INPUT__MESSAGE.id}
            name="newMessage"
            inputHeight="30px"
            borderRadius="0px"
            width="30px"
            // value={messageInputValue}
            // onChange={onChangeInput}
            margin="0"
            bgColor="transparent"
            fontSizeInp="10px"
            borderColor="transparent"
            bgFocusColor="transparent"
            padding="0"
        />
    </StUsersView>
    );
};

InviteUsersView.propTypes = {
    email: PropTypes.string,
    img: PropTypes.any,
    reciveSuccessUsersRequest: PropTypes.func,
    id: PropTypes.number,
};

export default InviteUsersView;
