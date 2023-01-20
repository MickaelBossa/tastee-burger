import { fakeMenu2 } from '../../../../fakeData/fakeMenu';
import ProductCard from './ProductCard/ProductCard';
import styled from 'styled-components';
import { theme } from '../../../../theme';

export default function ProductCards() {
    return (
        <ProductCardsStyled>
            {fakeMenu2.map((item) => (
                <div className="cardsContainer" key={item.id}>
                    <ProductCard item={item} />
                </div>
            ))}
        </ProductCardsStyled>
    );
}

const ProductCardsStyled = styled.div`
    flex: 1;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    background-color: ${theme.colors.background_white};
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 60px;
    grid-column-gap: 76.67px;
    padding: 50px 50px 150px;
`;
