import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../UI/Button';
import Input from '../UI/Input';
import { StFieldText,
        StMyAccountWrapper,
        StMyAccountTitle,
        StMyAccountHeader,
        StMyAccountIcon,
        StMyAccountContent,
        StMyAccountAvatarConteiner,
        StMyAccountFieldsConteiner,
        StMyAccountSignificance,
        StMyAccountFooter} from './styled';


const MyAccount = ( { userInfo, changeUser, setValue } ) => {
    const { firstName, lastName } = userInfo;
    const { firstName: inputFirstName, lastName: inputLastName, age, hobby, city, company } = changeUser;
    const [state, setState] = useState({ edit: false });
    const { t } = useTranslation();
    const handleEditClick = () => {
        setState({ ...state, edit: true });
    };
    const handleApplyClick = () => {
        setState({...state, edit: false });
    };
    const handleOnChange = data => {
        setValue(data);
    };
    return (
        <StMyAccountWrapper>
            <StMyAccountHeader>
                <StMyAccountTitle>{t('my_account')}</StMyAccountTitle>
                    <StMyAccountIcon onClick={handleEditClick}>🖉</StMyAccountIcon>
            </StMyAccountHeader>
            <StMyAccountContent>
                <StMyAccountAvatarConteiner>
                    <img src='../../../public/assets/images/user.png' />
                </StMyAccountAvatarConteiner>
                <StMyAccountFieldsConteiner>
                    <StFieldText>
                        {t('first_name_label')} : { state.edit
                        ? <Input
                            id='first_name_update'
                            name='firstName'
                            onChange={handleOnChange}
                            value={inputFirstName}
                            margin='0 50px'
                            width='300px'
                            height='40px'
                            isDisabled={false}
                        /> : <StMyAccountSignificance>{ firstName }</StMyAccountSignificance> }
                    </StFieldText>
                    <StFieldText>
                        {t('last_name_label')}: { state.edit
                        ? <Input
                            id='last_name_update'
                            name='lastName'
                            onChange={handleOnChange}
                            value={inputLastName}
                            margin='0 50px'
                            width='300px'
                            height='40px'
                            isDisabled={false}
                        /> : <StMyAccountSignificance>{ lastName }</StMyAccountSignificance> }
                    </StFieldText>
                    <StFieldText>
                        {t('age')} : { state.edit
                        ? <Input
                            id='age'
                            name='age'
                            onChange={handleOnChange}
                            value={age}
                            margin='0 50px'
                            width='300px'
                            height='40px'
                            isDisabled={false}
                        /> : <StMyAccountSignificance></StMyAccountSignificance> }
                    </StFieldText>
                    <StFieldText>
                        {t('city')} : { state.edit
                        ? <Input
                            id='city'
                            name='city'
                            onChange={handleOnChange}
                            value={city}
                            margin='0 50px'
                            width='300px'
                            height='40px'
                            isDisabled={false}
                        /> : <StMyAccountSignificance></StMyAccountSignificance> }
                    </StFieldText>
                    <StFieldText>
                        {t('company')} : { state.edit
                        ? <Input
                            id='company'
                            name='company'
                            onChange={handleOnChange}
                            value={company}
                            margin='0 50px'
                            width='300px'
                            height='40px'
                            isDisabled={false}
                        /> : <StMyAccountSignificance></StMyAccountSignificance> }
                    </StFieldText>
                    <StFieldText>
                        {t('hobby')} : { state.edit
                        ? <Input
                            id='hobby'
                            name='hobby'
                            onChange={handleOnChange}
                            value={hobby}
                            margin='0 50px'
                            width='300px'
                            height='40px'
                            isDisabled={false}
                        /> : <StMyAccountSignificance></StMyAccountSignificance> }
                    </StFieldText>
                </StMyAccountFieldsConteiner>
            </StMyAccountContent>
            <StMyAccountFooter>
                {state.edit ? <Button
                    id='apply'
                    name='apply'
                    onClick={handleApplyClick}
                    width='200px'
                    content={t('apply')}
                    fontSize='25px'
                    height='50px'
                /> : null}
            </StMyAccountFooter>
        </StMyAccountWrapper>
    );
};

export default MyAccount;
