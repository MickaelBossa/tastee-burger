import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../theme';

export default function BackButton({
    buttonText,
    buttonLink,
}: {
    buttonText: string;
    buttonLink: string;
}) {
    return (
        <BackButtonStyled>
            <Link className="backButton" to={buttonLink}>
                {buttonText}
            </Link>
        </BackButtonStyled>
    );
}

const BackButtonStyled = styled.div`
    .backButton {
        text-decoration: none;
        color: ${theme.colors.greySemiDark};
        font-size: ${theme.fonts.P0};
    }
`;
