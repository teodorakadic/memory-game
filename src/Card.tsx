import './Card.css'

interface Props {
	value: string
	selected: boolean
	cleared: boolean
	handleClick: (value: string) => void
}

const Card = ({ value, selected, cleared, handleClick }: Props) => {
	return (
		<div
			className={`card-wrapper
				${selected ? 'selected' : ''}
			${cleared ? 'cleared' : ''}`}
			onClick={() => handleClick(value)}
		>
			<div className="content">
				<div className="card-back"></div>
				<div className="card-front">{value}</div>
			</div>
		</div>
	)
}

export default Card
