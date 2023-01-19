import styled from 'styled-components';
import { theme } from '../../theme/index';

export default function Logo({ className }: { className: string }) {
    return (
        <LogoStyled className={className} onClick={() => window.location.reload()}>
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
    font-size: ${theme.fonts.P5};
    color: ${theme.colors.primary_burger};

    :hover {
        cursor: pointer;
    }

    img {
        width: ${theme.fonts.P6};
    }
`;
