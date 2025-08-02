import React, { ChangeEvent, FormEvent } from 'react';
import { MIN_GUESS, MAX_GUESS } from '../constants';

interface GuessInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const GuessInput: React.FC<GuessInputProps> = ({ value, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="number"
        value={value}
        onChange={onChange}
        min={MIN_GUESS}
        max={MAX_GUESS}
        placeholder={`Enter a number between ${MIN_GUESS} and ${MAX_GUESS}`}
      />
      <button type="submit">Guess</button>
    </form>
  );
};

export default GuessInput;
