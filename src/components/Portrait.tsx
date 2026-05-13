import type { StylePreset } from "../types";
import styles from "./Portrait.module.css";

const NEUTRAL_PALETTE: [string, string, string, string] = [
  "#f1f1ec",
  "#c7c8c2",
  "#1f2328",
  "#ffffff",
];

interface PortraitProps {
  style: StylePreset | null;
  approachValue: number;
}

export function Portrait({ style, approachValue }: PortraitProps) {
  const palette = style?.palette ?? NEUTRAL_PALETTE;
  const mouthHeight = `${Math.max(8, approachValue + 6)}px`;
  const hairTone = style?.id === "minimal" ? "#4d3f37" : "#2b2424";

  return (
    <div className={styles.card}>
      <div
        className={styles.stage}
        style={{
          "--stageA": palette[0],
          "--stageB": palette[1],
        } as React.CSSProperties}
      >
        <div className={styles.orbit} />
        <div
          className={styles.portrait}
          aria-hidden="true"
          style={{
            "--hairTone": hairTone,
            "--jacketTone": palette[2],
            "--shirtTone": palette[3],
            "--mouthHeight": mouthHeight,
          } as React.CSSProperties}
        >
          <div className={styles.hair} />
          <div className={styles.head}>
            <div className={`${styles.brow} ${styles.left}`} />
            <div className={`${styles.brow} ${styles.right}`} />
            <div className={`${styles.eye} ${styles.left}`} />
            <div className={`${styles.eye} ${styles.right}`} />
            <div className={styles.nose} />
            <div className={styles.mouth} />
          </div>
          <div className={styles.neck} />
          <div className={styles.shirt} />
          <div className={styles.jacket} />
        </div>
      </div>
      <div className={styles.meta}>
        <div>
          <span className={styles.metaLabel}>Style</span>
          <strong>{style ? style.name : "Custom"}</strong>
        </div>
        <div>
          <span className={styles.metaLabel}>Ratio</span>
          <strong>{style ? style.ratio : "—"}</strong>
        </div>
      </div>
    </div>
  );
}
