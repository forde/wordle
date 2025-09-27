import Card from '@/components/Card';
import Game from '@/components/Game';
import { styled } from 'next-yak';

function rnd(max: number) {
    return Math.floor(Math.random() * max);
}

export default async function Home() {
    const pl = Object.values(await import('@/pl.json'))
    const secretWord = (pl[rnd(pl.length)] || '') as string
    console.log(secretWord)
    return (
        <StyledDiv>
            <Card>
                <Game secretWord={secretWord} />
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
