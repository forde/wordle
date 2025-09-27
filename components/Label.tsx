import { styled } from "next-yak";
import { LabelHTMLAttributes } from 'react';

export default function Label(
    { children, ...props }: LabelHTMLAttributes<HTMLLabelElement>
) {
    return (
        <StyledLabel {...props}>
            {children}
        </StyledLabel>
    )
}

const StyledLabel = styled.label`
    font-size: 12px;
    line-height: 18px;
    color: var(--color-text-grey);
`;
