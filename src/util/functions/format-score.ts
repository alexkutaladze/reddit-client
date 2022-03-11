export const formatScore = (score: number) => {
  if (Math.abs(score) > 1000) {
    return (score / 1000).toFixed(1) + 'k';
  }
  return score.toString();
};
