import React from 'react'
import { HandType, WinnerType } from '../App'

type PropsType = {
    hand: number
    cards: HandType
    winner: WinnerType | null
}

const Hand: React.FC<PropsType> = ( {hand, cards, winner} ) => {
    const winnerPairsClasses = (card: string): string | null => {
        if (winner && hand === winner.hand) {
            for (let i = 0; i < winner.pairs.length; i++) {
                if (winner.pairs[i] === card) {
                    return `pair${i}`
                }
            }
        }

        return null
    }

    return (
        <section className={`hand ${winner && hand === winner.hand && 'winning'}`}>
            <h1>Player {hand + 1}</h1>
            {cards.length &&
                cards.map(card => {
                    return (
                        <img key={`${card.suit}${card.card}`}
                            className={`card ${ winnerPairsClasses(card.card) }`}
                            src={`http://h3h.net/images/cards/${card.suit}_${card.card}.svg`}
                            alt={`${card.suit}${card.card}`}
                        />
                    )
                })
            }
        </section>
    )
}

export default Hand