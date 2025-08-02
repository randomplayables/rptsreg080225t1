import React from 'react';

interface GameControlsProps {
  onRestart: () => void;
}

const GameControls: React.FC<GameControlsProps> = ({ onRestart }) => {
  return (
    <div className="game-controls">
      <button onClick={onRestart}>Play Again</button>
    </div>
  );
};

export default GameControls;