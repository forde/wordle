import Button from '@/components/Button';
import Card from '@/components/Card';
import Input from '@/components/Input';
import Label from '@/components/Label';
import { styled } from 'next-yak';

export default function Home() {
    return (
        <StyledDiv>
            <Card>
                <Label>Label</Label>
                <Input placeholder="Placeholder" />
                <Input size="small" placeholder="Placeholder" />
                <Input errors={['required!']} placeholder="Placeholder" />
                <Input errors={['required!']} size="small" placeholder="Placeholder" />
                <div className="buttons">
                    <Button >Click!</Button>
                    <Button variant="secondary">Click!</Button>
                    <Button size="small">Click!</Button>
                    <Button size="small" variant="secondary">Click!</Button>
                </div>
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
        width: 600px;
        padding: 24px;
        > * {
            margin-bottom: 10px;
        }
        :global(.buttons) {
            display: flex;
            align-items: center;
            button {
                margin-right: 12px;
            }
        }
    }
`;
