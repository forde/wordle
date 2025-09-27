import { styled } from "next-yak";
import Link from "next/link";
import Container from "./Container";
import { RiCharacterRecognitionFill } from "react-icons/ri";

export default function NavBar() {
    return (
        <StyledDiv>
            <Container>
                <Link href="/">
                    <RiCharacterRecognitionFill /> Wordle
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
        justify-content: center;
        > a {
            display: flex;
            align-items: center;
            justify-content: center;
            display: contents;
            font-size: 28px;
            font-weight: 800;
            svg {
                font-size: 40px;
                position: relative;
                margin: -4px 8px 0 0;
            }
        }
    }
`;
