import React from 'react'
import usePrimeGame from './hooks/usePrimeGame'
import GuessInput from './components/GuessInput'
import GuessList from './components/GuessList'
import Feedback from './components/Feedback'
import GameControls from './components/GameControls'

const App: React.FC = () => {
  const {
    currentGuess,
    guesses,
    feedback,
    isGameOver,
    handleGuessChange,
    handleGuessSubmit,
    restartGame
  } = usePrimeGame()

  return (
    <div className="app-container">
      <h1>Prime Number Guessing Game</h1>
      {!isGameOver && (
        <GuessInput
          value={currentGuess}
          onChange={handleGuessChange}
          onSubmit={handleGuessSubmit}
        />
      )}
      <Feedback feedback={feedback} />
      <GuessList guesses={guesses} />
      {isGameOver && <GameControls onRestart={restartGame} />}
    </div>
  )
}

export default App