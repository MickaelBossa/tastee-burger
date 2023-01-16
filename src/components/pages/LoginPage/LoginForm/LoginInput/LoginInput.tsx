import { BsPersonCircle } from 'react-icons/bs';
import styled from 'styled-components';
import { theme } from '../../../../../theme/index';

interface LoginInputProps {
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function LoginInput({ value, onChange }: LoginInputProps) {
    return (
        <LoginInputStyled>
            <BsPersonCircle className="iconPerson" />
            <input
                type="text"
                required
                placeholder="Entrez votre prénom"
                onChange={onChange}
                value={value}
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
