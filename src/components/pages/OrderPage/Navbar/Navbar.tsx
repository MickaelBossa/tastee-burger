import { CgProfile } from 'react-icons/cg';
import BackButton from '../../../../ui/BackButton/BackButton';
import Logo from '../../../../ui/Logo/Logo';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../../../theme';

export default function Navbar() {
    const { username } = useParams();

    return (
        <NavbarStyled>
            <div className="Logo" onClick={() => window.location.reload()}>
                <Logo />
            </div>
            <div className="rightSubcontainer">
                <div className="rightTextAndButton">
                    <h1 className="helloUser">
                        Hey, <span className="username">{username}</span>
                    </h1>
                    <BackButton buttonLink="/" buttonText="Se déconnecter" />
                </div>
                <CgProfile className="profilIcon" />
            </div>
        </NavbarStyled>
    );
}

const NavbarStyled = styled.nav`
    background-color: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${theme.spacing.xxl};
    border-top-left-radius: ${theme.borderRadius.extraRound};
    border-top-right-radius: ${theme.borderRadius.extraRound};
    box-shadow: 0 20px 10px -2px ${theme.colors.greyLight};
    position: relative;

    .Logo {
        scale: 0.4;
        :hover {
            cursor: pointer;
        }
    }

    .rightSubcontainer {
        display: flex;
        align-items: flex-end;
        margin-right: ${theme.spacing.xxl};
    }

    .rightTextAndButton {
        margin-right: ${theme.spacing.xs};
        color: ${theme.colors.greySemiDark};
    }

    .helloUser {
        font-size: ${theme.fonts.P2};
        font-weight: ${theme.weights.medium};
        text-align: center;
    }

    .username {
        color: ${theme.colors.primary};
    }

    .profilIcon {
        width: ${theme.fonts.P5};
        height: ${theme.fonts.P5};
        color: ${theme.colors.greySemiDark};
    }
`;
