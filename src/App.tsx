import './App.css'
import Board from './Board'

function App() {
	const size = 4
	return (
		<div className="App">
			<Board size={size}></Board>
		</div>
	)
}

export default App
