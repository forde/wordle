'use client'
import Card from '@/components/Card';
import { styled } from 'next-yak';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
    const router = useRouter()
    useEffect(() => {
        const lang = window.localStorage.getItem('lang')
        if (lang) {
            router.push(`/${lang.toLowerCase()}`)
        }
    }, [router])

    return (
        <StyledDiv>
            <Card>
                Select language
            </Card>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    padding: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - var(--navbar-height));
    > div {
        width: 400px;
        padding: 24px;
    }
`;
