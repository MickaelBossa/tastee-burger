import styled from 'styled-components';
import { theme } from '../../theme';

interface SubmitButtonProps {
    Icon: React.ReactElement;
    label: string;
}

export default function SubmitButton({ Icon, label }: SubmitButtonProps) {
    return (
        <SubmitButtonStyled aria-label="Accéder à votre espace">
            {label} <div className="chevronRight">{Icon}</div>
        </SubmitButtonStyled>
    );
}

const SubmitButtonStyled = styled.button`
    height: ${theme.spacing.xl};
    background-color: ${theme.colors.primary};
    border: none;
    border-radius: ${theme.borderRadius.round};
    color: ${theme.colors.white};
    margin-top: ${theme.spacing.sm};
    display: flex;
    justify-content: center;
    align-items: center;

    :focus,
    :active,
    :hover {
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.primary};
        cursor: pointer;
    }

    .chevronRight {
        padding-left: ${theme.spacing.xxs};
    }
`;
