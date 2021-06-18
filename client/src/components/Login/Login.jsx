import React from 'react';
import PropTypes from 'prop-types';
import { logInputs } from '/src/contsants/componentsСonsts';
import { NavLink, Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { APP_ROUTES } from '/src/contsants/reactRoutes';
import { StLoginDiv } from './styled';
import Form from '../UI/Form';
import Input from '../Ui/Input';
import Button from '../UI/Button';

const Login = ({ sendLoginRequest, setLoginValue, fields }) => {
  const { t } = useTranslation();
  if (fields.success) return <Redirect to={APP_ROUTES.chat} />;
  return (
    <StLoginDiv>
      <Form>
        <p>{t('authorization')}</p>
        {logInputs.map(input => (
          <Input
            width="80%"
            id={input.id}
            height="100px"
            key={input.id}
            name={input.id}
            inputHeight="50px"
            borderRadius="5px"
            label={t(input.label)}
            value={fields[input.id]}
            onChange={setLoginValue}
            placeholder={t(input.placeholder)}
          />
        ))}
        <Button
          height="50px"
          content={t('loginBtn')}
          id="login"
          onClick={sendLoginRequest}
        />
        <span>
          {t('loginSpanText')}
          <NavLink to={APP_ROUTES.registration}>{t('loginLinkText')}</NavLink>
        </span>
      </Form>
    </StLoginDiv>
  );
};

Login.propTypes = {
  sendLoginRequest: PropTypes.func.isRequired,
  setLoginValue: PropTypes.func.isRequired,
  fields: PropTypes.object.isRequired,
};

export default Login;
