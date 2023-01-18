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
                    <Logo />
                    <div className="rightSubcontainer">
                        <div className="rightTextAndButton">
                            <h1>
                                Hey,{' '}
                                <span className="username">{username}</span>
                            </h1>
                            <BackButton
                                buttonLink="/"
                                buttonText="Se déconnecter"
                            />
                        </div>
                        <CgProfile
                            style={{
                                width: '48px',
                                height: '48px',
                                color: 'gray',
                            }}
                        />
                    </div>
                </nav>
                <div className="content"></div>
            </div>
        </OrderPageStyled>
    );
}

const OrderPageStyled = styled.div`
    display: flex;
    height: 100vh;
    background-color: ${theme.colors.primary};

    .container {
        width: 95vw;
        height: 95vh;
        margin: auto;
    }

    nav {
        background-color: ${theme.colors.white};
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 20%;
    }

    .rightSubcontainer {
        display: flex;
        align-items: center;
    }

    .username {
        color: ${theme.colors.primary};
    }

    .content {
        background-color: ${theme.colors.background_white};
        height: 80%;
    }
`;
