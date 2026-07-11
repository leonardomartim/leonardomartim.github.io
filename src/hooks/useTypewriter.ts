import { useEffect, useState } from "react";

const characterDelay = 36;

export function useTypewriter(text: string) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const characters = Array.from(text);
    let characterIndex = 0;

    if (characters.length === 0) {
      return;
    }

    const interval = window.setInterval(() => {
      characterIndex += 1;
      setDisplayedText(characters.slice(0, characterIndex).join(""));

      if (characterIndex === characters.length) {
        window.clearInterval(interval);
      }
    }, characterDelay);

    return () => window.clearInterval(interval);
  }, [text]);

  return { displayedText, isAnimating: displayedText !== text };
}
