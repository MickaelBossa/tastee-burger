import { useState } from 'react';
import { fakeMenu2 } from '../../../../fakeData/fakeMenu';
import ProductCard from './ProductCard/ProductCard';
import styled from 'styled-components';
import { theme } from '../../../../theme';

export default function ProductCards() {
    const [products, setProducts] = useState(fakeMenu2);

    return (
        <ProductCardsStyled>
            {products.map((item) => (
                <div className="cardsContainer" key={item.id}>
                    <ProductCard item={item} />
                </div>
            ))}
        </ProductCardsStyled>
    );
}

const ProductCardsStyled = styled.div`
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    background-color: ${theme.colors.background_white};
    display: grid;
    width: 1400px;
    grid-template-columns: repeat(4, 240px);
    justify-content: center;
    grid-row-gap: 60px;
    grid-column-gap: 76.67px;
    padding: 134px 50px 150px;

    @media (max-width: 1400px) {
        width: 95vw;
        grid-row-gap: 30px;
        grid-column-gap: 38.33px;
        padding: 110px 25px 75px;
    }

    @media (max-width: 1150px) {
        grid-template-columns: repeat(3, 240px);
    }

    @media (max-width: 850px) {
        grid-template-columns: repeat(2, 240px);
    }
`;
