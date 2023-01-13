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
    background: red;
    height: 100vh;
`;
