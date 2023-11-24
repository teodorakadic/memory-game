import './App.css'
import Board from './Board'

function App() {
	const size = 3
	return (
		<div className="App">
			<Board size={size}></Board>
		</div>
	)
}

export default App
