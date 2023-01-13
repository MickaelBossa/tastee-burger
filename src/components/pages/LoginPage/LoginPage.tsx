import styled from 'styled-components';
import Logo from '../../Logo/Logo';
import LoginForm from './LoginForm/LoginForm';

export default function LoginPage() {
    return (
        <LoginPageStyled>
            <Logo />
            <LoginForm />
        </LoginPageStyled>
    );
}

const LoginPageStyled = styled.div`
    height: 100vh;
    background-image: url('/images/burger-background.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;
