import styled from 'styled-components';
import { theme } from '../../../theme';
import Logo from '../../../ui/Logo/Logo';
import LoginForm from './LoginForm/LoginForm';

export default function LoginPage() {
    return (
        <LoginPageStyled>
            <Logo className={'logoLoginPage'} />
            <LoginForm />
        </LoginPageStyled>
    );
}

const LoginPageStyled = styled.div`
    height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
        center / cover no-repeat url('/images/burger-background.jpg');
    padding-top: ${theme.spacing.xxl};

    .logoLoginPage {
        scale: 2;
    }
`;
