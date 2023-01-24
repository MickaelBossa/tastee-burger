import styled from 'styled-components';
import { theme } from '../../../../../../theme';
import SubmitButton from '../../../../../../ui/SubmitButton/SubmitButton';
import { formatPrice } from '../../../../../../utils/math';

export default function ProductCardText({
    title,
    price,
}: {
    title: string;
    price: number;
}) {
    return (
        <ProductCardTextStyled>
            <p className="productTitle">{title}</p>
            <div className="priceAndButton">
                <p className="productPrice">{formatPrice(price)} €</p>
                <SubmitButton className="orderSubmitButton" label="Ajouter" />
            </div>
        </ProductCardTextStyled>
    );
}

const ProductCardTextStyled = styled.div`
    width: 200px;
    height: 105px;
    margin: 20px 20px 10px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .productTitle {
        font-family: 'Amatic SC';
        font-size: ${theme.fonts.size.P4};
        font-weight: ${theme.fonts.weights.bold};
        width: 200px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        min-height: 2.6rem;
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
