import styled from 'styled-components';
import { theme } from '../../../../../theme';
import SubmitButton from '../../../../../ui/SubmitButton/SubmitButton';

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

            <div className="textContainer">
                <p className="productTitle">{item.title}</p>
                <div className="priceAndButton">
                    <p className="productPrice">{item.price} €</p>
                    <SubmitButton
                        className="orderSubmitButton"
                        label="Ajouter"
                    />
                </div>
            </div>
        </ProductCardStyled>
    );
}

const ProductCardStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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

    .textContainer {
        width: 200px;
        height: 105px;
        margin: 20px 20px 10px 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .productTitle {
        font-family: 'Amatic SC';
        font-size: ${theme.fonts.size.P4};
        font-weight: ${theme.fonts.weights.bold};
    }

    .priceAndButton {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .productPrice {
        width: 95.2px;
        height: 65px;
        display: flex;
        align-items: center;
        margin-bottom: 14.81px;
        color: ${theme.colors.primary};
        font-weight: ${theme.fonts.weights.medium};
        font-size: ${theme.fonts.size.P2};
    }

    .orderSubmitButton {
        height: ${theme.fonts.size.P4};
        width: 100px;
        margin-bottom: 25px;
    }
`;
