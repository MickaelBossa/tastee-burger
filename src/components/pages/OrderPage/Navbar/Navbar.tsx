import { BsPersonCircle } from 'react-icons/bs';
import Logo from '../../../../ui/Logo/Logo';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../../../theme';
import RightSideNavText from './RightSideNavText/RightSideNavText';

export default function Navbar() {
    const { username } = useParams();

    return (
        <NavbarStyled>
            <Logo />
            <div className="rightSubcontainer">
                <RightSideNavText username={username!} />
                <BsPersonCircle className="profilIcon" />
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
    padding-left: ${theme.spacing.md};

    .rightSubcontainer {
        display: flex;
        align-items: flex-end;
        margin-right: ${theme.spacing.xl};
    }

    .profilIcon {
        width: ${theme.fonts.size.P5};
        height: ${theme.fonts.size.P5};
        color: ${theme.colors.greySemiDark};
    }
`;
