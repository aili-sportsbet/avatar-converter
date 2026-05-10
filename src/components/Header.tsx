import styles from "./Header.module.css";

interface HeaderProps {
  currentPage: "studio" | "guide";
  onPageChange: (page: "studio" | "guide") => void;
  onCopy: () => void;
  onRandomize: () => void;
  copyStatus: string;
}

export function Header({
  currentPage,
  onPageChange,
  onCopy,
  onRandomize,
  copyStatus,
}: HeaderProps) {
  return (
    <header className={styles.topbar}>
      <div className={styles.brand}>
        <span className={styles.eyebrow} aria-hidden="true">
          <svg
            className={styles.sparkle}
            viewBox="0 0 24 24"
            width="18"
            height="18"
          >
            <path
              d="M12 2 L13.8 9.2 L21 11 L13.8 12.8 L12 20 L10.2 12.8 L3 11 L10.2 9.2 Z"
              fill="currentColor"
            />
          </svg>
          Prompt Studio
        </span>
        <h1 className={styles.title}>
          Headshot &amp; Avatar
          <span className={styles.titleAccent}>Converter</span>
        </h1>
      </div>

      <div className={styles.headerControls}>
        <nav className={styles.pageNav} aria-label="Main pages">
          <button
            className={styles.navButton}
            type="button"
            data-active={currentPage === "studio"}
            onClick={() => onPageChange("studio")}
          >
            Generator
          </button>
          <button
            className={styles.navButton}
            type="button"
            data-active={currentPage === "guide"}
            onClick={() => onPageChange("guide")}
          >
            Prompt Guide
          </button>
        </nav>

        {currentPage === "studio" && (
          <div className={styles.actions} aria-label="Prompt actions">
            <button
              className={styles.iconButton}
              type="button"
              title="Randomize"
              onClick={onRandomize}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path
                  d="M4 7h6l4 10h6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 17h6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <path
                  d="M14 7h6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <path
                  d="M17 4l3 3-3 3M17 14l3 3-3 3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="sr-only">Randomize</span>
            </button>
            <button
              className={styles.primaryButton}
              type="button"
              onClick={onCopy}
            >
              Copy Prompt
            </button>
            <span
              className={styles.copyStatus}
              role="status"
              aria-live="polite"
            >
              {copyStatus}
            </span>
          </div>
        )}
      </div>
    </header>
  );
}
