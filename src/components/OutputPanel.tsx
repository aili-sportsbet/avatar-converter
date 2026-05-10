import type { PromptTab } from "../types";
import styles from "./OutputPanel.module.css";

interface OutputPanelProps {
  activeTab: PromptTab;
  onTabChange: (tab: PromptTab) => void;
  promptText: string;
  modelSyntax: boolean;
  onModelSyntaxChange: (enabled: boolean) => void;
  copyStatus: string;
}

export function OutputPanel({
  activeTab,
  onTabChange,
  promptText,
  modelSyntax,
  onModelSyntaxChange,
  copyStatus,
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
      </div>
      <textarea
        className={styles.textarea}
        readOnly
        spellCheck={false}
        aria-label="Generated prompt"
        value={promptText}
      />
      <div className={styles.footer}>
        <label className={styles.toggle}>
          <input
            type="checkbox"
            checked={modelSyntax}
            onChange={(e) => onModelSyntaxChange(e.target.checked)}
            className={styles.checkbox}
          />
          <span>Model syntax</span>
        </label>
        {copyStatus && (
          <span className={styles.copyStatus} role="status" aria-live="polite">
            {copyStatus}
          </span>
        )}
      </div>
    </div>
  );
}
