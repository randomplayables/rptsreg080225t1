export interface GuessEntry {
  value: number
  isPrime: boolean
  feedback: string
  roundNumber: number
}

export interface PrimeGameState {
  currentGuess: string
  guesses: GuessEntry[]
  feedback: string
  isGameOver: boolean
}

export interface InitGameSessionResponse {
  sessionId: string
  [key: string]: any
}

export interface SaveGameDataResponse {
  [key: string]: any
}