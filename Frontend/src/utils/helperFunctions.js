export const getRandomQuestions = (
  questions,
  count
) => {

  const shuffled =
    [...questions].sort(
      () => Math.random() - 0.5
    );

  return shuffled.slice(0, count);
};