'use client'
import Button from '@/components/Button';
import Card from '@/components/Card';
import { styled } from 'next-yak';

export default function Error(
    { error, reset }: { error: Error; reset: () => void }
) {
    return (
        <StyledDiv>
            <Card>
                <h1>Something went wrong!</h1>
                <p>{error.message}</p>
                <Button size="small" variant="secondary" onClick={() => reset()} >
                    Try again
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
            color: var(--color-red);
            font-size: 14px;
        }
        button {
            margin: 0 auto;
        }
    }
`;
