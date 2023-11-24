import './Card.css'

interface Props {
	value?: number | string
	selected: boolean
	handleClick: () => void
}

// const handleClick = () => {}

const Card = ({ value, selected, handleClick }: Props) => {
	return (
		<>
			<div
				className={`card-wrapper ${selected ? 'selected' : ''}`}
				onClick={() => handleClick()}
			>
				<div className="content">
					<div className="card-back"></div>
					<div className="card-front">{value}</div>
				</div>
			</div>
		</>
	)
}

export default Card
