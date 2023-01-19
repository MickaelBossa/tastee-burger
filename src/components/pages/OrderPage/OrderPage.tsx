import styled from 'styled-components';
import { theme } from '../../../theme';
import Navbar from './Navbar/Navbar';

export default function OrderPage() {
    return (
        <OrderPageStyled>
            <div className="container">
                <Navbar />
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

    .content {
        background-color: ${theme.colors.background_white};
        height: 84.1vh;
        border-bottom-left-radius: ${theme.borderRadius.extraRound};
        border-bottom-right-radius: ${theme.borderRadius.extraRound};
    }
`;
