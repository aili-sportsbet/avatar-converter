import type { StylePreset } from "../types";
import styles from "./Portrait.module.css";

interface PortraitProps {
  style: StylePreset;
  approachValue: number;
}

export function Portrait({ style, approachValue }: PortraitProps) {
  const mouthHeight = `${Math.max(8, approachValue + 6)}px`;
  const hairTone = style.id === "minimal" ? "#4d3f37" : "#2b2424";

  return (
    <div className={styles.card}>
      <div
        className={styles.stage}
        style={{
          "--stageA": style.palette[0],
          "--stageB": style.palette[1],
        } as React.CSSProperties}
      >
        <div className={styles.orbit} />
        <div
          className={styles.portrait}
          aria-hidden="true"
          style={{
            "--hairTone": hairTone,
            "--jacketTone": style.palette[2],
            "--shirtTone": style.palette[3],
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
          <strong>{style.name}</strong>
        </div>
        <div>
          <span className={styles.metaLabel}>Ratio</span>
          <strong>{style.ratio}</strong>
        </div>
      </div>
    </div>
  );
}
