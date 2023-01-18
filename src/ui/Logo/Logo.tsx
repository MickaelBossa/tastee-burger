import styled from 'styled-components';
import { theme } from '../../theme/index';

export default function Logo() {
    return (
        <LogoStyled>
            Crazee
            <img src={'/images/logo-orange.png'} alt="Logo de tastee burger" />
            Burger
        </LogoStyled>
    );
}

const LogoStyled = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Amatic SC';
    font-size: ${theme.fonts.P6};
    color: ${theme.colors.primary_burger};
    padding-top: ${theme.spacing.xl};
    margin-right: auto;
    margin-left: auto;
    width: 50%;
    scale: 2;

    img {
        width: 7vw;
    }
`;
