import { useEffect, useState } from "react";

type AnimationPhase = "deleting" | "pausing" | "typing";

type KeywordState = {
  displayedWord: string;
  phase: AnimationPhase;
  wordIndex: number;
};

const pauseDelay = 1800;
const deleteDelay = 70;
const typeDelay = 105;

export function useCyclingKeyword(words: string[], disabled: boolean) {
  const [state, setState] = useState<KeywordState>({
    displayedWord: words[0] ?? "",
    phase: "pausing",
    wordIndex: 0,
  });

  useEffect(() => {
    if (disabled || words.length < 2) {
      return;
    }

    const delay =
      state.phase === "pausing"
        ? pauseDelay
        : state.phase === "deleting"
          ? deleteDelay
          : typeDelay;

    const timeout = window.setTimeout(() => {
      setState((current) => {
        if (current.phase === "pausing") {
          return { ...current, phase: "deleting" };
        }

        if (current.phase === "deleting") {
          const characters = Array.from(current.displayedWord);

          if (characters.length > 0) {
            return { ...current, displayedWord: characters.slice(0, -1).join("") };
          }

          return {
            displayedWord: "",
            phase: "typing",
            wordIndex: (current.wordIndex + 1) % words.length,
          };
        }

        const nextWord = words[current.wordIndex];
        const nextLength = Array.from(current.displayedWord).length + 1;
        const displayedWord = Array.from(nextWord).slice(0, nextLength).join("");

        return {
          ...current,
          displayedWord,
          phase: displayedWord === nextWord ? "pausing" : "typing",
        };
      });
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [disabled, state, words]);

  return disabled ? (words[0] ?? "") : state.displayedWord;
}
