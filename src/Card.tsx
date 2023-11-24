import './Card.css'

interface Props {
	selected: boolean
	handleClick: () => void
}

// const handleClick = () => {}

const Card = ({ selected, handleClick }: Props) => {
	return (
		<>
			<div
				className={`card ${selected ? 'selected' : ''}`}
				onClick={() => handleClick()}
			></div>
		</>
	)
}

export default Card
