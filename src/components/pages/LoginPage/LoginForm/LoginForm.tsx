import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../../../theme';
import { BsPersonCircle, BsChevronRight } from 'react-icons/bs';

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
            <div className="inputContainer">
                <BsPersonCircle className="iconPerson" />
                <input
                    type="text"
                    required
                    placeholder="Entrez votre prénom"
                    onChange={handleChange}
                    value={inputValue}
                />
            </div>
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

    .inputContainer {
        position: relative;
        background-color: ${theme.colors.white};
        border-radius: ${theme.borderRadius.round};
    }

    .iconPerson {
        position: absolute;
        top: 35%;
        left: 5%;
        color: ${theme.colors.greyBlue};
    }

    input {
        height: ${theme.spacing.xl};
        width: 75%;
        border: none;
    }

    input:focus {
        outline: none;
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

    .chevronRight {
        width: ${theme.fonts.P4};
    }
`;
