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
    height: 100vh;

    .container {
        display: flex;
        flex-direction: column;
        width: 95vw;
        height: 95vh;
        margin: auto;
    }

    .content {
        flex: 1;
        box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
        background-color: ${theme.colors.background_white};
        border-bottom-left-radius: ${theme.borderRadius.extraRound};
        border-bottom-right-radius: ${theme.borderRadius.extraRound};
    }
`;
