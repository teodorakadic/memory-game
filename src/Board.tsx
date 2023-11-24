import { useEffect, useState } from 'react'
import './Board.css'
import Card from './Card'
import { CardType, DeckType, buildDeck } from './utils'

interface Props {
	size: number
}

type selectedCardType = {
	value: number | string
	selected: boolean
	cleared: boolean
	i?: number
}

const Board = ({ size }: Props) => {
	const deckSize = new Array(size).fill(new Array(size).fill(0))
	const [selected, setSelected] = useState<selectedCardType | null>(null)
	const [deck, setDeck] = useState<null | DeckType>(null)

	useEffect(() => {
		setDeck(buildDeck((size * size) / 2))
	}, [])

	const handleCardClick = (card: CardType, i: number) => {
		// No card selected yet
		if (selected === null) {
			const deckCopy = deck!.map((card, cardI) => {
				if (cardI === i) {
					// Set card to selected
					return { ...card, selected: true }
				} else return card
			})
			// Set deck with selected card
			setDeck(deckCopy)
			setSelected({ ...card, i })
			return
		}

		if (selected.i === i) {
			// Card already selected
			return
		} else {
			const deckCopy = deck!.map((card, cardI) => {
				if (cardI === i) {
					// Set card to selected
					return { ...card, selected: true }
				} else return card
			})
			// Set deck with selected cards
			setDeck(deckCopy)
		}

		// Match found
		if (selected.value === card.value) {
			const deckCopy = deck!.map((card) => {
				if (card.value === selected.value) return { ...card, cleared: true }
				else return card
			})
			// Set deck with cleared cards
			setDeck(deckCopy)
		}
		// Mismatch
		else {
			const deckCopy = deck!.map((card) => {
				return { ...card, selected: false }
			})
			// Set deck to no cards selected
			setDeck(deckCopy)
			setSelected(null)
		}
	}

	return (
		<div className="board-wrapper">
			{deck &&
				deckSize.map((row, rowI) => (
					<div className="row" key={rowI}>
						{deck!
							// Map cards row by row
							.slice(rowI * deckSize.length, deckSize.length * (rowI + 1))
							.map((card, i) => (
								<div>
									<Card
										key={i}
										value={card.value}
										selected={card.selected}
										cleared={card.cleared}
										handleClick={() =>
											handleCardClick(card, rowI * deckSize.length + i)
										}
									/>
								</div>
							))}
					</div>
				))}
		</div>
	)
}

export default Board
