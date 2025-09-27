'use client'
import { styled } from "next-yak";
import Link from "next/link";
import Container from "./Container";
import Image from "next/image";
import { RiCharacterRecognitionFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function NavBar() {

    const [lang, setLang] = useState('')
    const pathname = usePathname()

    useEffect(() => {
        setLang(localStorage.getItem('lang') || '')
    }, [pathname])

    const changeLang = (code: string) => () => {
        window.localStorage.setItem('lang', code)
    }

    return (
        <StyledDiv>
            <Container>
                <Link href="/">
                    <RiCharacterRecognitionFill /> Wordlee
                </Link>
                <Languages>
                    {['gb', 'pl'].map(code => (
                        <Link
                            key={code}
                            href={`/${code}`}
                            onClick={changeLang(code)}
                            data-active={lang === code}>
                            <Image src={`https://flagsapi.com/${code.toUpperCase()}/flat/64.png`} width={40} height={40} alt={code} />
                        </Link>
                    ))}
                </Languages>
            </Container>
        </StyledDiv >
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
            color: var(--color-text);
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

const Languages = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30px;
        margin-left: 16px;
        opacity: .5;
        &[data-active="true"] {
            opacity: 1;
        }
        img {
            display: block;
        }
    }
`
