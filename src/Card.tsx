import './styles/Card.css'

interface Props {
	value: string
	selected: boolean
	cleared: boolean
	handleClick: (value: string) => void
	delayRunning?: boolean
	gameState: string
}

const Card = ({
	value,
	selected,
	cleared,
	handleClick,
	delayRunning,
	gameState
}: Props) => {
	return (
		<div
			className={`card-wrapper
				${selected ? 'selected' : ''}
			${cleared ? 'cleared' : ''}
			${!delayRunning ? ' selectable' : ''}`}
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
