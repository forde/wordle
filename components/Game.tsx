'use client'
import { styled, css } from 'next-yak';
import { HTMLAttributes, useEffect, useState, useRef } from 'react';
import Button from './Button';

interface Props extends HTMLAttributes<HTMLDivElement> {
    secretWord: string
}

export default function Game({ secretWord }: Props) {

    const [secret] = useState(secretWord.toLowerCase())
    const [row, setRow] = useState(0)
    const [words, setWords] = useState(['', '', '', '', '', ''])
    const [finished, setFinished] = useState(false)
    const [won, setWon] = useState(false)

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        function onKeyDown(e: KeyboardEvent) {
            if (finished) {
                if (e.key === 'Enter') {
                    location.reload()
                }
                return
            }
            if (e.key === 'Enter') {
                //submit
                if (words[row].length < 5) return

                if (words.filter(w => w).slice(-1)[0] === secret) {
                    setWon(true)
                    setFinished(true)
                }
                setRow(row => row + 1)
            } else if (e.key === 'Backspace') {
                //remove letter
                setWords(words => {
                    if (words[row].length === 0) return words
                    const newWords = [...words]
                    newWords[row] = newWords[row].substring(0, newWords[row].length - 1)
                    return newWords
                })
            } else {
                //add letter
                if (e.key.length !== 1 || !e.key.match(/[a-zśćąęółńżź]/i)) return
                setWords(words => {
                    if (words[row].length === 5) return words

                    const newWords = [...words]
                    newWords[row] = newWords[row].concat(e.key)
                    return newWords
                })
            }
        }
        document.addEventListener('keydown', onKeyDown)
        return () => document.removeEventListener('keydown', onKeyDown)
    }, [row, words, finished, secret])

    useEffect(() => {
        if (row === 6) {
            setFinished(true)
        }
        document.getElementById(`word-${row}`)?.scrollIntoView({ behavior: "smooth" });
    }, [row])

    const reset = () => {
        location.reload()
    }

    console.log(secret)

    return (
        <div onClick={() => {
            inputRef.current?.focus()
        }}>
            <HiddenInput name="hidden" ref={inputRef} />
            {words.map((word, i) => <Word
                id={`word-${i}`}
                key={i}
                word={word}
                secret={secret}
                active={!finished && (row === i)}
            />)}
            {finished && <Result
                won={won}
                secret={secret}
                onReset={reset}
            />}
        </div>
    )
}

const HiddenInput = styled.input`
    position: absolute;
    left: -10000px;
`

const Word = (
    { id, word, secret, active }: { id: string, word: string, secret: string, active: boolean }
) => {
    return (
        <StyledWord $active={active} id={id}>
            {[...new Array(5).keys()].map((i) => {
                const letter = word.charAt(i) || ''
                const letterNotEmpty = letter !== ''
                const exactMatch = letter === secret.charAt(i)
                const partialMatch = letterNotEmpty && (secret.indexOf(letter) !== -1)
                const noMatch = letterNotEmpty && !partialMatch
                const render = (type?: MatchType) => <Letter key={i} $type={type}>{letter}</Letter>

                if (active) return render()
                if (exactMatch) return render('match')
                if (partialMatch) return render('partial-match')
                if (noMatch) return render('no-match')
                return render()
            })}
        </StyledWord>
    )
}

const StyledWord = styled.div<{ $active: boolean }>`
    display: flex;
    justify-content: space-between;
    margin: 5px;
    transition: all .15s ease-in-out;
    ${props => props.$active && css`
        transform: scale(1.1);
        margin: 10px;
    `}
`;

type MatchType = 'match' | 'partial-match' | 'no-match'
interface LetterProps {
    $type?: MatchType
}

const Letter = styled.div<LetterProps>`
    display: flex;
    border: 1px solid var(--color-text-grey);
    width: calc(20% - 5px);
    height: 60px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    border-radius: 4px;
    font-weight: 600;
    background: #fff;
    ${props => props.$type === 'match' && css`
        background: #bbec5b;
    `}
    ${props => props.$type === 'partial-match' && css`
        background: #ffed6c;
    `}
    ${props => props.$type === 'no-match' && css`
        background: #eff0f0;
    `}
`

const Result = ({ won, secret, onReset }: { won: boolean, secret: string, onReset: () => void }) => (
    <StyledResult>
        <div>{won ? '🎉' : '💩'}</div>
        <h1>{won ? 'Congrats!' : 'Sorry!'}</h1>
        <p>The word was &quot;<span>{secret}</span>&quot;</p>
        <Button onClick={onReset} >Try again</Button>
    </StyledResult>
)

const StyledResult = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: rgba(255,255,255,.9);
    div {
        font-size: 150px;
        line-height: 1;
        margin-bottom: 30px;
    }
    p {
        margin: 20px 0;
        font-size: 22px;
        span {
            font-weight: 600;
        }
    }
`
