import { useState } from 'react'
import './Board.css'
import Card from './Card'

interface Props {
	size: number
}

const Board = ({ size }: Props) => {
	const [selected, setSelected] = useState(false)
	const deckSize = new Array(size).fill(new Array(size).fill(0))

	const handleCardClick = () => {
		setSelected(!selected)
	}
	return (
		<div className="board">
			{deckSize.map(
				(row, rowI) =>
					row.map((el: number, elI: number) => (
						<>
							{/* {elI} */}
							<Card selected={selected} handleClick={handleCardClick} />
						</>
					))

				// <Card />
			)}
		</div>
	)
}

export default Board
