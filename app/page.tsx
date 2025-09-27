'use client'
import { styled } from 'next-yak';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
    const router = useRouter()
    useEffect(() => {
        const lang = window.localStorage.getItem('lang')
        if (lang) {
            router.push(`/${lang.toLowerCase()}`)
        } else {
            window.localStorage.setItem('lang', 'gb')
            router.replace('/gb')
        }
    }, [router])

    return (
        <StyledDiv>

        </StyledDiv>
    )
}

const StyledDiv = styled.div`

`;
