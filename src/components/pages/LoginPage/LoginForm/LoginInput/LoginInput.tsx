import { BsPersonCircle } from 'react-icons/bs';
import styled from 'styled-components';
import { theme } from '../../../../../theme/index';

export default function LoginInput({
    inputValue,
    handleChange,
}: {
    inputValue: string;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
}) {
    return (
        <LoginInputStyled>
            <BsPersonCircle className="iconPerson" />
            <input
                type="text"
                required
                placeholder="Entrez votre prénom"
                onChange={handleChange}
                value={inputValue}
            />
        </LoginInputStyled>
    );
}

const LoginInputStyled = styled.div`
    position: relative;
    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.round};

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
`;
