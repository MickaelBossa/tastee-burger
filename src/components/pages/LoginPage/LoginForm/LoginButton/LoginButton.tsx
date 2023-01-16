import { BsChevronRight } from 'react-icons/bs';
import styled from 'styled-components';
import { theme } from '../../../../../theme';

export default function LoginButton() {
    return (
        <LoginButtonStyled aria-label="Accéder à votre espace">
            Accédez à mon espace <BsChevronRight className="chevronRight" />
        </LoginButtonStyled>
    );
}

const LoginButtonStyled = styled.button`
    height: ${theme.spacing.xl};
    background-color: ${theme.colors.primary};
    border: none;
    border-radius: ${theme.borderRadius.round};
    color: ${theme.colors.white};
    margin-top: ${theme.spacing.sm};
    display: flex;
    justify-content: center;
    align-items: center;

    :focus,
    :active,
    :hover {
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.primary};
        cursor: pointer;
    }

    .chevronRight {
        width: ${theme.fonts.P4};
    }
`;
