import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import styles from "./ComboField.module.css";

interface ComboFieldProps {
  label: string;
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
}

export function ComboField({ label, value, options, onChange }: ComboFieldProps) {
  const [open, setOpen] = useState(false);
  const [isFiltering, setIsFiltering] = useState(false);
  const [highlightIdx, setHighlightIdx] = useState(-1);
  const listId = useId();
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);

  const query = value.trim().toLowerCase();
  const filtered =
    isFiltering && query.length > 0
      ? options.filter((o) => o.toLowerCase().includes(query))
      : options;

  function openShowAll() {
    setOpen(true);
    setIsFiltering(false);
    const idx = options.findIndex((o) => o === value);
    setHighlightIdx(idx);
  }

  function close() {
    setOpen(false);
    setIsFiltering(false);
    setHighlightIdx(-1);
  }

  useEffect(() => {
    if (!open) return;
    const handleDown = (e: MouseEvent) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) {
        close();
      }
    };
    document.addEventListener("mousedown", handleDown);
    return () => document.removeEventListener("mousedown", handleDown);
  }, [open]);

  useEffect(() => {
    if (!open || highlightIdx < 0 || !listRef.current) return;
    const el = listRef.current.querySelector<HTMLLIElement>(
      `[data-idx="${highlightIdx}"]`,
    );
    if (el) el.scrollIntoView({ block: "nearest" });
  }, [open, highlightIdx]);

  function commit(next: string) {
    onChange(next);
    close();
  }

  function handleKeyDown(e: ReactKeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!open) {
        openShowAll();
      } else {
        setHighlightIdx((i) => Math.min(filtered.length - 1, i + 1));
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!open) {
        openShowAll();
      } else {
        setHighlightIdx((i) => Math.max(0, i - 1));
      }
    } else if (e.key === "Enter") {
      if (open && highlightIdx >= 0 && filtered[highlightIdx]) {
        e.preventDefault();
        commit(filtered[highlightIdx]);
      } else {
        setOpen(false);
      }
    } else if (e.key === "Escape") {
      close();
    }
  }

  return (
    <label className={styles.field}>
      <span>{label}</span>
      <div ref={wrapRef} className={styles.wrap}>
        <input
          type="text"
          role="combobox"
          aria-expanded={open}
          aria-controls={listId}
          aria-autocomplete="list"
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            setOpen(true);
            setIsFiltering(true);
            setHighlightIdx(-1);
          }}
          onFocus={openShowAll}
          onClick={openShowAll}
          onKeyDown={handleKeyDown}
          className={styles.combo}
          autoComplete="off"
          spellCheck={false}
        />
        {open && filtered.length > 0 && (
          <ul
            ref={listRef}
            id={listId}
            role="listbox"
            className={styles.list}
          >
            {filtered.map((opt, i) => (
              <li
                key={opt}
                role="option"
                aria-selected={opt === value}
                data-highlight={i === highlightIdx}
                data-idx={i}
                className={styles.option}
                onMouseEnter={() => setHighlightIdx(i)}
                onMouseDown={(e) => {
                  e.preventDefault();
                  commit(opt);
                }}
              >
                {opt}
              </li>
            ))}
          </ul>
        )}
      </div>
    </label>
  );
}
