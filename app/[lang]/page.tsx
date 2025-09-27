import Card from '@/components/Card';
import Game from '@/components/Game';
import { styled } from 'next-yak';
import Error from '@/components/Error';

function rnd(max: number) {
    return Math.floor(Math.random() * max);
}

async function getWords(lang: string) {
    switch (lang) {
        case 'gb': return Object.values(await import('@/dictionary/gb.json'))
        case 'pl': return Object.values(await import('@/dictionary/pl.json'))
        default: return []
    }
}

export default async function Lang({
    params,
}: {
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params
    const words = await getWords(lang)
    const secretWord = (words[rnd(words.length)] || '') as string
    return (
        <StyledDiv>
            <Card>
                {secretWord ?
                    <Game secretWord={secretWord} />
                    :
                    <Error>Dictionary not found</Error>
                }
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
