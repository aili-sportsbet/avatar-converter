import { useState, useCallback, useRef } from "react";

export function useClipboard(resetMs = 1800) {
  const [status, setStatus] = useState("");
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        setStatus("Copied");
      } catch {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        setStatus("Copied");
      }

      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setStatus(""), resetMs);
    },
    [resetMs],
  );

  return { status, copy };
}
