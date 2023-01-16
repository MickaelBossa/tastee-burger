import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../../../theme';
import { BsChevronRight } from 'react-icons/bs';
import LoginInput from './LoginInput/LoginInput';

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
            <LoginInput inputValue={inputValue} handleChange={handleChange} />
            <button aria-label="Accéder à votre espace">
                Accédez à mon espace <BsChevronRight className="chevronRight" />
            </button>
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

    button {
        height: ${theme.spacing.xl};
        background-color: ${theme.colors.primary};
        border: none;
        border-radius: ${theme.borderRadius.round};
        color: ${theme.colors.white};
        margin-top: ${theme.spacing.sm};
        display: flex;
        justify-content: center;
        align-items: center;
    }

    button:focus,
    button:active,
    button:hover {
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.primary};
        cursor: pointer;
    }

    .chevronRight {
        width: ${theme.fonts.P4};
    }
`;
