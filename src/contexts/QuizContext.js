import React, { createContext, useContext } from "react";

const QuizContext = createContext(null);

/**
 * Provider wrapper. Pass an object containing at least:
 *   { dispatch, answer, secondsRemaining }
 */
export function QuizProvider({ value, children }) {
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

/**
 * Hook to consume quiz context.
 * Throws an error when used outside the provider (helpful for debugging).
 */
export function useQuiz() {
  const ctx = useContext(QuizContext);
  if (!ctx) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return ctx;
}
