import React from 'react';
import type { GuessEntry } from '../types';

interface GuessListProps {
  guesses: GuessEntry[];
}

const GuessList: React.FC<GuessListProps> = ({ guesses }) => {
  if (guesses.length === 0) {
    return null;
  }

  return (
    <ul>
      {guesses.map((guess) => (
        <li key={guess.roundNumber}>
          Round {guess.roundNumber}: {guess.value} - {guess.feedback}
        </li>
      ))}
    </ul>
  );
};

export default GuessList;