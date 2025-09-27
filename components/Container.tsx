import { styled } from 'next-yak';
import { HTMLAttributes } from 'react';

export default function Container({ children, ...props }: HTMLAttributes<HTMLDivElement>) {
    return (
        <StyledDiv {...props}>
            {children}
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    @media(max-width: 1120px) {
        padding: 0 24px;
    }
`;
