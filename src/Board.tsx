import Card from './Card'

interface Props {
	size: number
}

const Board = ({ size }: Props) => {
	const deck = new Array(size).fill(new Array(size).fill(0))
	return (
		<>
			{deck.map(
				(row, rowI) =>
					row.map((el: number, elI: number) => (
						<>
							{elI}
							<Card />
						</>
					))

				// <Card />
			)}
		</>
	)
}

export default Board
