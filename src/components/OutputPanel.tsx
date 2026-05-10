import type { PromptTab } from "../types";
import styles from "./OutputPanel.module.css";

interface OutputPanelProps {
  activeTab: PromptTab;
  onTabChange: (tab: PromptTab) => void;
  promptText: string;
}

export function OutputPanel({
  activeTab,
  onTabChange,
  promptText,
}: OutputPanelProps) {
  return (
    <div className={styles.panel}>
      <div className={styles.tabs} role="tablist" aria-label="Prompt tabs">
        <button
          className={`${styles.tab} ${activeTab === "prompt" ? styles.active : ""}`}
          type="button"
          role="tab"
          aria-selected={activeTab === "prompt"}
          onClick={() => onTabChange("prompt")}
        >
          Prompt
        </button>
        <button
          className={`${styles.tab} ${activeTab === "negative" ? styles.active : ""}`}
          type="button"
          role="tab"
          aria-selected={activeTab === "negative"}
          onClick={() => onTabChange("negative")}
        >
          Negative
        </button>
        <button
          className={`${styles.tab} ${activeTab === "package" ? styles.active : ""}`}
          type="button"
          role="tab"
          aria-selected={activeTab === "package"}
          onClick={() => onTabChange("package")}
        >
          Package
        </button>
      </div>
      <textarea
        className={styles.textarea}
        readOnly
        spellCheck={false}
        aria-label="Generated prompt"
        value={promptText}
      />
    </div>
  );
}
