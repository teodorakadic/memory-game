import './styles/App.css'
import Board from './Board'
import { useState } from 'react'

type DifficultyType = null | 'easy' | 'medium' | 'hard'
type GameStateType = null | 'new' | 'active' | 'over'

function App() {
	const [gameState, setGameState] = useState<GameStateType>('new')
	const [size, setSize] = useState(new Array(6).fill(6))
	const [difficulty, setDifficulty] = useState<DifficultyType>(null)

	const handleDifficultyClick = (difficulty: DifficultyType) => {
		switch (difficulty) {
			case 'easy':
				setDifficulty('easy')
				setSize(new Array(4).fill(4))
				break
			case 'medium':
				setDifficulty('medium')
				setSize(new Array(6).fill(6))
				break
			case 'hard':
				setDifficulty('hard')
				setSize(new Array(8).fill(8))
		}
		setGameState('active')
	}

	return (
		<div className="App">
			{gameState === 'new' && (
				<>
					<button onClick={() => handleDifficultyClick('easy')}>easy</button>
					<button onClick={() => handleDifficultyClick('medium')}>
						medium
					</button>
					<button onClick={() => handleDifficultyClick('hard')}>hard</button>
				</>
			)}
			{gameState === 'active' && <Board size={size.length}></Board>}
		</div>
	)
}

export default App
