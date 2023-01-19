import { useParams } from 'react-router-dom';
import BackButton from '../../../ui/BackButton/BackButton';
import Logo from '../../../ui/Logo/Logo';
import { CgProfile } from 'react-icons/cg';
import styled from 'styled-components';
import { theme } from '../../../theme';

export default function OrderPage() {
    const { username } = useParams();

    return (
        <OrderPageStyled>
            <div className="container">
                <nav>
                    <div className="Logo">
                        <Logo />
                    </div>
                    <div className="rightSubcontainer">
                        <div className="rightTextAndButton">
                            <h1 className="helloUser">
                                Hey,{' '}
                                <span className="username">{username}</span>
                            </h1>
                            <BackButton
                                buttonLink="/"
                                buttonText="Se déconnecter"
                            />
                        </div>
                        <CgProfile className="profilIcon" />
                    </div>
                </nav>
                <div className="content"></div>
            </div>
        </OrderPageStyled>
    );
}

const OrderPageStyled = styled.div`
    display: flex;
    background-color: ${theme.colors.primary};

    .container {
        width: 95vw;
        margin: ${theme.spacing.lg} auto;
        position: relative;
    }

    nav {
        background-color: ${theme.colors.white};
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: ${theme.spacing.xxl};
        border-top-left-radius: ${theme.borderRadius.extraRound};
        border-top-right-radius: ${theme.borderRadius.extraRound};
        box-shadow: 0 20px 10px -2px ${theme.colors.greyLight};
        position: relative;
    }

    .Logo {
        scale: 0.4;
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

    .content {
        background-color: ${theme.colors.background_white};
        height: 84.1vh;
        border-bottom-left-radius: ${theme.borderRadius.extraRound};
        border-bottom-right-radius: ${theme.borderRadius.extraRound};
    }
`;
