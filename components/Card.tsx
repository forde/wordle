import { styled } from 'next-yak';
import { HTMLAttributes } from 'react';

export default function Card({ children, ...props }: HTMLAttributes<HTMLDivElement>) {
    return (
        <StyledDiv {...props}>
            {children}
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    background: #fff;
    border-radius: 12px;
    box-shadow: var(--shadow-soft);
    position: relative;
    max-width: 100%;
    overflow: hidden;
`;
