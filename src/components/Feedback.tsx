import React from 'react';

interface FeedbackProps {
  feedback: string;
}

const Feedback: React.FC<FeedbackProps> = ({ feedback }) => {
  if (!feedback) {
    return null;
  }
  return <p>{feedback}</p>;
};

export default Feedback;