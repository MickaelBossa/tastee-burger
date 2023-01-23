import styled from 'styled-components';
import { theme } from '../../../../../theme';
import ProductCardText from './ProductCardText/ProductCardText';

interface ProductCardProps {
    id: number;
    imageSource: string;
    title: string;
    price: number;
    quantity: number;
    isAvailable: boolean;
    isAdvertised: boolean;
}

export default function ProductCard({ item }: { item: ProductCardProps }) {
    return (
        <ProductCardStyled>
            <div className="imgContainer">
                <img src={item.imageSource} alt={item.imageSource} />
            </div>
            <ProductCardText title={item.title} price={item.price} />
        </ProductCardStyled>
    );
}

const ProductCardStyled = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 240px;
    height: 330px;
    border-radius: ${theme.borderRadius.extraRound};
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);

    .imgContainer {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 200px;
        height: 145px;
        margin: 50px 20px 0px 20px;

        img {
            max-height: 100%;
        }
    }
`;
