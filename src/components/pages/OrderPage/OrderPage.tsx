import styled from 'styled-components';
import { theme } from '../../../theme';
import Navbar from './Navbar/Navbar';
import ProductCards from './ProductCards/ProductCards';

export default function OrderPage() {
    return (
        <OrderPageStyled>
            <div className="container">
                <Navbar />
                <ProductCards />
            </div>
        </OrderPageStyled>
    );
}

const OrderPageStyled = styled.div`
    display: flex;
    background-color: ${theme.colors.primary};
    min-height: 100vh;
    overflow: auto;

    .container {
        display: flex;
        flex-direction: column;
        width: 1400px;
        height: 95vh;
        margin: auto;
    }
`;
