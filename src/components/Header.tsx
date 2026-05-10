import styles from "./Header.module.css";

interface HeaderProps {
  onCopy: () => void;
  onRandomize: () => void;
  copyStatus: string;
}

export function Header({ onCopy, onRandomize, copyStatus }: HeaderProps) {
  return (
    <header className={styles.topbar}>
      <div>
        <p className={styles.eyebrow}>Prompt Studio</p>
        <h1 className={styles.title}>Headshot & Avatar Converter</h1>
      </div>
      <div className={styles.actions} aria-label="Prompt actions">
        <button
          className={styles.iconButton}
          type="button"
          title="Randomize"
          onClick={onRandomize}
        >
          <span aria-hidden="true">R</span>
          <span className="sr-only">Randomize</span>
        </button>
        <button className={styles.primaryButton} type="button" onClick={onCopy}>
          Copy Prompt
        </button>
        {copyStatus && (
          <span className={styles.copyStatus} role="status" aria-live="polite">
            {copyStatus}
          </span>
        )}
      </div>
    </header>
  );
}
