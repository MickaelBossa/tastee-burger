import styled from 'styled-components';
import { theme } from '../../theme/index';

export default function Logo() {
    return (
        <LogoStyled>
            Crazee
            <img src={'./images/logo-orange.png'} alt="Logo de tastee burger" />
            Burger
        </LogoStyled>
    );
}

const LogoStyled = styled.h1`
    background: yellow;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: ${theme.spacing.xl};
    margin-bottom: ${theme.spacing.sm};
    font-family: 'Amatic SC';
    font-size: ${theme.fonts.P6};
    color: ${theme.colors.primary_burger};

    img {
        width: 10vw;
    }
`;
