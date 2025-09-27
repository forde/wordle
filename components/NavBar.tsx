import { styled } from "next-yak";
import Link from "next/link";
import { FaReact } from "react-icons/fa";
import Container from "./Container";

export default function NavBar() {
    return (
        <StyledDiv>
            <Container>
                <Link href="/">
                    <FaReact />
                </Link>
            </Container>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    background: #fff;
    height: var(--navbar-height);
    box-shadow: var(--shadow-soft);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    > div {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: space-between;
        > a {
            display: contents;
            svg {
                font-size: 32px;
            }
        }
    }
`;
