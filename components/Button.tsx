import { styled, css } from "next-yak";
import { ButtonHTMLAttributes } from 'react'

export enum ButtonVariant {
    primary = 'primary',
    secondary = 'secondary'
}

export enum ButtonSize {
    large = 'large',
    small = 'small'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: `${ButtonSize}`
    variant?: `${ButtonVariant}`
    fullWidth?: boolean
}

export default function Button({
    size = 'large',
    variant = 'primary',
    children,
    fullWidth,
    ...props
}: ButtonProps) {
    return (
        <StyledButton
            {...props}
            $size={size}
            $variant={variant}
            $fullWidth={fullWidth}
        >
            {children}
        </StyledButton>
    );
};

const StyledButton = styled.button<{
    $size: `${ButtonSize}`
    $variant: `${ButtonVariant}`
    $fullWidth?: boolean
}>`
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    line-height: 1;
    cursor: pointer;
    box-sizing: border-box;
    transition: transform .15s ease-in-out;
    border-radius: 6px;
    padding: 0 18px;

    ${props => props.$fullWidth && css`
         width: 100%;
    `}

    ${props => props.$variant === 'primary' && css`
        background: var(--color-text);
        color: #fff;
        border: 1px solid transparent;
    `}

    ${props => props.$variant === 'secondary' && css`
        background: #fff;
        color: var(--color-text);
        border: 1px solid var(--color-light-grey);
    `}

    ${props => props.$size === 'large' && css`
        height: 48px;
        font-size: 16px;
        padding: 0 24px;
    `}

    ${props => props.$size === 'small' && css`
        height: 34px;
        font-size: 12px;
        padding: 0 18px;
    `}

    &:disabled {
        cursor: default;
        opacity: .5;
    }

    @media (pointer: fine) {
        &:not(:disabled):hover,
        &:not(:disabled):active,
        &:not(:disabled):focus {
            transform: scale(1.03);
        }
    }
`;
