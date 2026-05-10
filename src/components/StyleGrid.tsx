import type { StylePreset } from "../types";
import styles from "./StyleGrid.module.css";

interface StyleGridProps {
  presets: StylePreset[];
  selectedId: string;
  onSelect: (style: StylePreset) => void;
}

export function StyleGrid({ presets, selectedId, onSelect }: StyleGridProps) {
  return (
    <div className={styles.grid} aria-label="Style choices">
      {presets.map((preset) => (
        <label key={preset.id} className={styles.option}>
          <input
            type="radio"
            name="style"
            value={preset.id}
            checked={preset.id === selectedId}
            onChange={() => onSelect(preset)}
            className={styles.radio}
          />
          <span className={styles.card} data-selected={preset.id === selectedId}>
            <span
              className={styles.thumb}
              style={{
                "--a": preset.palette[0],
                "--b": preset.palette[1],
                "--skin": preset.palette[4],
              } as React.CSSProperties}
            />
            <strong className={styles.name}>{preset.name}</strong>
            <span className={styles.desc}>{preset.description}</span>
          </span>
        </label>
      ))}
    </div>
  );
}
