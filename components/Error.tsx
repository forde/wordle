import { styled } from "next-yak";
import { HTMLAttributes } from 'react';
import { BiSolidError } from "react-icons/bi";


export default function Error(
    { children, ...props }: HTMLAttributes<HTMLDivElement>
) {
    return (
        <StyledDiv {...props}>
            <BiSolidError />
            {children}
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    color: var(--color-red);
    display: flex;
    align-items: center;
    font-size: 12px;
    line-height: 18px;
    svg {
        margin-right: 6px;
        font-size: 14px;
    }
`;
