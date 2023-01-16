import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../../../theme';
import TextInput from '../../../../ui/TextInput/TextInput';
import LoginButton from './LoginButton/LoginButton';
import { BsPersonCircle } from 'react-icons/bs';

export default function LoginForm() {
    const [inputValue, setInputValue] = useState<string>('');

    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        navigate(`order/${inputValue}`);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <LoginFormStyled action="submit" onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous !</h1>
            <h2>Connectez vous</h2>
            <TextInput
                value={inputValue}
                onChange={handleChange}
                required={true}
                placeholder={'Entrez votre prénom'}
                Icon={<BsPersonCircle />}
            />
            <LoginButton />
        </LoginFormStyled>
    );
}

const LoginFormStyled = styled.form`
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: ${theme.colors.white};
    font-family: 'Amatic SC';

    h1 {
        font-size: ${theme.fonts.P5};
        border-bottom: 3px solid ${theme.colors.primary};
        margin-bottom: ${theme.spacing.md};
    }

    h2 {
        font-size: ${theme.fonts.P4};
        margin-top: ${theme.spacing.md};
        margin-bottom: ${theme.spacing.sm};
    }
`;
