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
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 60px;
    grid-column-gap: 76.67px;
    padding: 134px 50px 150px;
`;
