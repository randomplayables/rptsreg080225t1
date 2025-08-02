import { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import { initGameSession, saveGameData } from '../services/apiService'
import { isPrime, generateRandomPrime } from '../utils/math'
import { MIN_GUESS, MAX_GUESS } from '../constants'
import type { GuessEntry } from '../types'

const usePrimeGame = () => {
  const [sessionId, setSessionId] = useState<string>('')
  const [secretNumber, setSecretNumber] = useState<number>(() =>
    generateRandomPrime(MIN_GUESS, MAX_GUESS)
  )
  const [currentGuess, setCurrentGuess] = useState<string>('')
  const [guesses, setGuesses] = useState<GuessEntry[]>([])
  const [feedback, setFeedback] = useState<string>('')
  const [isGameOver, setIsGameOver] = useState<boolean>(false)

  useEffect(() => {
    async function initSession() {
      const sessionData = await initGameSession()
      if (sessionData?.sessionId) {
        setSessionId(sessionData.sessionId)
      }
    }
    initSession()
  }, [])

  const handleGuessChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentGuess(e.target.value)
  }

  const handleGuessSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const guessValue = parseInt(currentGuess, 10)
    if (
      isNaN(guessValue) ||
      guessValue < MIN_GUESS ||
      guessValue > MAX_GUESS
    ) {
      setFeedback(`Please enter a valid number between ${MIN_GUESS} and ${MAX_GUESS}.`)
      return
    }

    const primeCheck = isPrime(guessValue)
    let resultFeedback = ''
    let correct = false

    if (!primeCheck) {
      resultFeedback = 'Not a prime number.'
    } else if (guessValue < secretNumber) {
      resultFeedback = 'Too low.'
    } else if (guessValue > secretNumber) {
      resultFeedback = 'Too high.'
    } else {
      resultFeedback = 'Correct! You guessed the prime number.'
      correct = true
    }

    const roundNumber = guesses.length + 1
    const newEntry: GuessEntry = {
      value: guessValue,
      isPrime: primeCheck,
      feedback: resultFeedback,
      roundNumber
    }

    setGuesses(prev => [...prev, newEntry])
    setFeedback(resultFeedback)
    setCurrentGuess('')

    saveGameData(sessionId, roundNumber, newEntry)

    if (correct) {
      setIsGameOver(true)
    }
  }

  const restartGame = () => {
    setSecretNumber(generateRandomPrime(MIN_GUESS, MAX_GUESS))
    setGuesses([])
    setFeedback('')
    setCurrentGuess('')
    setIsGameOver(false)
  }

  return {
    currentGuess,
    guesses,
    feedback,
    isGameOver,
    handleGuessChange,
    handleGuessSubmit,
    restartGame
  }
}

export default usePrimeGame