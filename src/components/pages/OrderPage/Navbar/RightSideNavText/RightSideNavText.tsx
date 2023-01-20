import styled from 'styled-components';
import { theme } from '../../../../../theme';
import BackButton from '../../../../../ui/BackButton/BackButton';

export default function RightSideNavText({ username }: { username: string }) {
    return (
        <RightSideNavTextStyled>
            <h1 className="helloUser">
                Hey, <span className="username">{username}</span>
            </h1>
            <BackButton buttonLink="/" buttonText="Se déconnecter" />
        </RightSideNavTextStyled>
    );
}

const RightSideNavTextStyled = styled.div`
    margin-right: ${theme.spacing.xs};
    color: ${theme.colors.greySemiDark};

    .helloUser {
        font-size: ${theme.fonts.size.P2};
        font-weight: ${theme.fonts.weights.medium};
        text-align: center;
    }

    .username {
        color: ${theme.colors.primary};
    }
`;
