import styled from 'styled-components';
import { theme } from '../../theme';

interface SubmitButtonProps {
    Icon?: React.ReactElement;
    label: string;
    className?: string;
}

export default function SubmitButton({
    Icon,
    label,
    className,
}: SubmitButtonProps) {
    return (
        <SubmitButtonStyled
            className={className}
            aria-label="Accéder à votre espace"
        >
            {label} <div className="chevronRight">{Icon}</div>
        </SubmitButtonStyled>
    );
}

const SubmitButtonStyled = styled.button`
    background-color: ${theme.colors.primary};
    border: none;
    border-radius: ${theme.borderRadius.round};
    color: ${theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${theme.spacing.sm};

    :hover {
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.primary};
        cursor: pointer;
    }

    :active {
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
        border: 1px solid ${theme.colors.white};
    }

    .chevronRight {
        padding-left: ${theme.spacing.xxs};
    }
`;
