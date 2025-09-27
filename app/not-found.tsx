'use client'
import Button from '@/components/Button';
import Card from '@/components/Card';
import { styled } from 'next-yak';
import { useRouter } from 'next/navigation';

export default function NotFound() {
    const router = useRouter()
    return (
        <StyledDiv>
            <Card>
                <h1>Not found</h1>
                <p>The page you are looking for does not exist</p>
                <Button size="small" variant="secondary" onClick={() => router.push('/')} >
                    Go home
                </Button>
            </Card>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    flex-direction: column;
    & > div {
        padding: 32px;
        text-align: center;
        h1 {
            margin-bottom: 20px;
            line-height: 1;
            color: var(--color-text)
        }
        p {
            margin-bottom: 20px;
            color: var(--color-text-grey);
            font-size: 14px;
        }
        button {
            margin: 0 auto;
        }
    }
`;
