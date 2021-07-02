import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UsersItem from '../../../UserItem'; 
import Button from '/src/components/UI/Button';
// import { NotificationManager } from 'react-notifications';
import { useTranslation } from 'react-i18next';
import { StContentModalUsers, StControlPanel, StUsersItem } from './styled';
import { MODAL_USERS_BUTTON } from '/src/constants/componentsСonsts.js';
 
const InviteUsersView = ({ users, changeModalVisibility }) => {
    const handleSendMessageClick = () => {  
    };
    const { t } = useTranslation();
    const [state, setState] = useState({ newRoomName: '', user_ids: [] });
    const handleToggleUsers = (e) => {
        console.log(e)
        setState ({ 
            ...state,
            user_ids: state.user_ids.includes(e.name)
            ? state.user_ids.filter(id => id !== e.name) 
            : [...state.user_ids, e.name],
        });
    }
    // const handleCreateNewRoom = () => {
    //     if (!state.newRoomName) {
    //         return NotificationManager
    //             .error(t('without_text_new_room'), t('input_error'), 2000);
    //     }
    //     createNewRoom(state);
    //     changeModalVisibility({
    //         isOpen: false, data: {}, modalType: 'createChat',
    //     });
    // };
    const handleCloseModal = () => changeModalVisibility({ modalType: 'usersInChat', data: {}, isOpen: false });

    const getFunctionForButtons = (el) => {
        switch (el.id) {
            case 'sendMessage': return handleSendMessageClick;
            default: return handleCloseModal;
        }
    };
    
    return (
        <StContentModalUsers> 
            <StUsersItem>
            {users?.length > 0 ? users.map((user) => { 
                return (
                    <UsersItem 
                    id={user.id} 
                    email={user.email} 
                    key={user.id} 
                    onChange={handleToggleUsers} 
                    isSelected={state.user_ids.includes(user.id)} 
                    />
                );
            }) : null}
            </StUsersItem>
            <StControlPanel>
                {MODAL_USERS_BUTTON.map((el) => {
                    return (
                        <Button
                            key={el.id}
                            content={el.content}
                            id={el.id}
                            onClick={getFunctionForButtons(el)}
                        />
                    );
                })}
            </StControlPanel>
        </StContentModalUsers>
    );
};

InviteUsersView.propTypes = {
    users: PropTypes.array,
    changeModalVisibility: PropTypes.func.isRequired,

};

export default InviteUsersView;
