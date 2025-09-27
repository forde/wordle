import { styled, css } from "next-yak";
import { InputHTMLAttributes } from 'react'
import Error from "@/components/Error";

export enum InputSize {
    large = 'large',
    small = 'small'
}

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    errors?: string[]
    size?: `${InputSize}`
}

function box<T>(value: T): T[] {
    if (!value) return []
    return Array.isArray(value) ? value : [value]
}

export default function Input({
    errors,
    size = 'large',
    ...props
}: InputProps) {
    return (
        <StyledDiv>
            <StyledInput
                $invalid={Boolean(box(errors).length)}
                $size={size}
                {...props}
            />
            {errors && errors.map(e => (
                <Error className="error" key={e}>{e}</Error>
            ))}
        </StyledDiv>
    );
};

const StyledDiv = styled.div`
    :global(.error) {
        margin-top: 4px;
    }
`

const StyledInput = styled.input<{
    $invalid: boolean,
    $size: InputProps['size']
}>`
    all: unset;
    border-radius: 6px;
    font-weight: 400;
    line-height: 1;
    width: 100%;
    border: 1px solid var(--color-light-grey);
    box-sizing: border-box;
    transition: all .15s ease-in-out;
    background: #fff;
    padding: 0 14px;
    color: var(--color-text);
    cursor: text;

    ${props => props.$size === 'large' && css`
        height: 48px;
        font-size: 16px;
    `}

    ${props => props.$size === 'small' && css`
        height: 34px;
        font-size: 12px;
    `}

    &::placeholder {
        color: var(--color-text-grey);
        opacity: 1;
    }

    &:not(:disabled):not(:read-only):hover,
    &:not(:disabled):not(:read-only):active,
    &:not(:disabled):not(:read-only):focus {
        border-color: var(--color-text-grey);
    }

    ${props => props.$invalid && css`
        border-color: var(--color-red) !important;
    `}
`;
