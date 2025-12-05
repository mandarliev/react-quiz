import { useQuiz } from "../contexts/QuizContext";

function Progress() {
  const { oneBasedIndex, numQuestions, points, maxPossiblePoints, answer } =
    useQuiz();

  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={oneBasedIndex + Number(answer !== null)}
      ></progress>
      <p>
        Question <strong>{oneBasedIndex}</strong>/ {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
