import React, {useState, useEffect} from 'react'
import Hand from './components/Hand'
import './App.css'

type HandsType = Array<HandType>
export type HandType = Array<CardType>
type CardType = {
  suit: string
  card: string
}

type WinnersType = Array<WinnerType>
export type WinnerType = {
  hand: number
  pairs: Array<string>
}

const initData = {
  suits: ['spade', 'heart', 'diamond', 'club'],
  cards: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
  handsNumber: 2,
  cardsNumber: 5,
  pairsProbability: 0.9
}

const App = () => {
  let [hands, setHands] = useState<HandsType | null>(null)
  let [winner, setWinner] = useState<WinnerType | null>(null)

  useEffect(() => {
    if (!hands) eventPlayAgainClicked()
  })

  const eventPlayAgainClicked = (): void => {
    const hands = []
    const winners = []
    let handsWithoutPairs = 0

    do {
      if (hands.length) {
        hands.splice(0)
        winners.splice(0)
        handsWithoutPairs = 0
      }

      for (let i = 0; i < initData.handsNumber; i++) {
        const hand = createHand(hands)
        hands.push(hand)

        const pairs = determinePairs(hand)
        if (!pairs.length) {
          handsWithoutPairs += 1
        } else if ( isPotentialWinner(winners, pairs) ) {
          if ( !winners[0] || winners[0].pairs.length === pairs.length ) {
            winners.push( {hand: i, pairs} )
          } else if (winners[0] && winners[0].pairs.length < pairs.length) {
            winners.splice( 0, winners.length, {hand: i, pairs} )
          }
        }
      }
    } while (handsWithoutPairs / initData.handsNumber > 1 - initData.pairsProbability)

    console.log(hands)

    setHands(hands)
    setWinner(winners.length === 1 ? winners[0] : null)
  }

  const createHand = (hands: HandsType): HandType => {
    const hand = []

    while (hand.length < initData.cardsNumber) {
      const card = createCard()
      if ( isUnusedCard(card, hand, hands) ) hand.push(card)
    }

    return hand
  }

  const createCard = (): CardType => {
    return {
      suit: initData.suits[ Math.floor( Math.random() * initData.suits.length ) ],
      card: initData.cards[ Math.floor( Math.random() * initData.cards.length ) ]
    }
  }

  const isUnusedCard = (newCard: CardType, hand: HandType, hands: HandsType): boolean => {
    return (
      !hand.some(card => card.suit === newCard.suit && card.card === newCard.card) && 
      (
        !hands.length || 
        !hands.some(hand => hand.some(card => card.suit === newCard.suit && card.card === newCard.card))
      )
    )
  }

  const determinePairs = (hand: HandType): Array<string> => {
    const pairs: any = {}
    const pairsList: Array<string> = []

    hand.forEach(card => {
      if (!pairs[card.card]) {
        pairs[card.card] = 1
      } else {
        delete pairs[card.card]
        pairsList.push(card.card)
      }
    })

    return pairsList
  }

  const isPotentialWinner = (winners: WinnersType, pairs: Array<string>): boolean => {
    if ( !winners[0] || winners[0].pairs.length <= pairs.length ) {
      return true
    }
    
    return false
  }

  return (
    <div>
      {hands ? 
        hands.map((hand, i) => {
          return <Hand key={`${hand[0].suit}${hand[0].card}`} hand={i} cards={hand} winner={winner} />
        }) : null
      }

      <section className='buttons'>
          <button onClick={eventPlayAgainClicked}>Play Again</button>
      </section>
    </div>
  )
}

export default App
