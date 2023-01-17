import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme/index';

interface TextInputProps {
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    required: boolean;
    placeholder: string;
    Icon: React.ReactElement;
}

export default function TextInput({
    value,
    onChange,
    required,
    placeholder,
    Icon,
}: TextInputProps) {
    return (
        <TextInputStyled>
            <div className="iconPerson">{Icon}</div>
            <input
                type="text"
                required={required}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
        </TextInputStyled>
    );
}

const TextInputStyled = styled.div`
    position: relative;
    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.round};

    .iconPerson {
        position: absolute;
        top: 35%;
        left: 5%;
        color: ${theme.colors.greyBlue};
    }

    input {
        height: ${theme.spacing.xl};
        width: 75%;
        border: none;
    }

    input:focus {
        outline: none;
    }
`;
