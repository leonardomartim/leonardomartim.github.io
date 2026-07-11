import { useState } from "react";

const typewriterStorageKey = "leonardo-martim.typewriter";

function loadTypewriterMode() {
  return typeof window !== "undefined" && window.localStorage.getItem(typewriterStorageKey) === "enabled";
}

export function useTypewriterMode() {
  const [typewriterEnabled, setTypewriterEnabled] = useState(loadTypewriterMode);

  function setTypewriterMode(enabled: boolean) {
    setTypewriterEnabled(enabled);
    window.localStorage.setItem(typewriterStorageKey, enabled ? "enabled" : "disabled");
  }

  return { typewriterEnabled, setTypewriterMode };
}
