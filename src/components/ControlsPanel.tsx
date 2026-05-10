import type { ControlValues, StylePreset } from "../types";
import { StyleGrid } from "./StyleGrid";
import { RangeSlider } from "./RangeSlider";
import {
  accessories,
  backgrounds,
  cameras,
  expressions,
  formats,
  framings,
  hairDetails,
  lightings,
  makeupStyles,
  skinTextures,
  wardrobes,
} from "../data/styles";
import styles from "./ControlsPanel.module.css";

interface ControlsPanelProps {
  presets: StylePreset[];
  selectedStyleId: string;
  controls: ControlValues;
  onStyleSelect: (style: StylePreset) => void;
  onControlChange: <K extends keyof ControlValues>(key: K, value: ControlValues[K]) => void;
  onReset: () => void;
}

export function ControlsPanel({
  presets,
  selectedStyleId,
  controls,
  onStyleSelect,
  onControlChange,
  onReset,
}: ControlsPanelProps) {
  return (
    <aside className={styles.panel} aria-label="Prompt controls">
      {/* Column 1: Format + Style */}
      <div className={styles.column}>
        <div className={styles.section}>
          <div className={styles.sectionHead}>
            <h2 className={styles.heading}>Format</h2>
            <button className={styles.ghostButton} type="button" onClick={onReset}>
              Reset
            </button>
          </div>
          <div className={styles.segmented} role="radiogroup" aria-label="Image type">
            {formats.map((f) => (
              <label key={f.value}>
                <input
                  type="radio"
                  name="format"
                  value={f.value}
                  checked={controls.format === f.value}
                  onChange={() => onControlChange("format", f.value)}
                  className={styles.segmentedRadio}
                />
                <span
                  className={styles.segmentedLabel}
                  data-checked={controls.format === f.value}
                >
                  {f.label}
                </span>
              </label>
            ))}
          </div>
        </div>
        <div className={styles.section}>
          <h2 className={styles.heading}>Style</h2>
          <StyleGrid
            presets={presets}
            selectedId={selectedStyleId}
            onSelect={onStyleSelect}
          />
        </div>
      </div>

      {/* Column 2: Subject + Scene */}
      <div className={styles.column}>
        <div className={styles.section}>
          <h2 className={styles.heading}>Subject</h2>
          <label className={styles.field}>
            <span>Target vibe</span>
            <input
              type="text"
              value={controls.identity}
              maxLength={80}
              onChange={(e) => onControlChange("identity", e.target.value)}
              className={styles.textInput}
            />
          </label>
          <label className={styles.field}>
            <span>Expression</span>
            <select
              value={controls.expression}
              onChange={(e) => onControlChange("expression", e.target.value)}
              className={styles.select}
            >
              {expressions.map((expr) => (
                <option key={expr}>{expr}</option>
              ))}
            </select>
          </label>
          <label className={styles.field}>
            <span>Wardrobe</span>
            <select
              value={controls.wardrobe}
              onChange={(e) => onControlChange("wardrobe", e.target.value)}
              className={styles.select}
            >
              {wardrobes.map((w) => (
                <option key={w}>{w}</option>
              ))}
            </select>
          </label>
          <label className={styles.field}>
            <span>Framing</span>
            <select
              value={controls.framing}
              onChange={(e) => onControlChange("framing", e.target.value)}
              className={styles.select}
            >
              {framings.map((framing) => (
                <option key={framing}>{framing}</option>
              ))}
            </select>
          </label>
        </div>
        <div className={styles.section}>
          <h2 className={styles.heading}>Scene</h2>
          <label className={styles.field}>
            <span>Background</span>
            <select
              value={controls.background}
              onChange={(e) => onControlChange("background", e.target.value)}
              className={styles.select}
            >
              {backgrounds.map((bg) => (
                <option key={bg}>{bg}</option>
              ))}
            </select>
          </label>
          <label className={styles.field}>
            <span>Lighting</span>
            <select
              value={controls.lighting}
              onChange={(e) => onControlChange("lighting", e.target.value)}
              className={styles.select}
            >
              {lightings.map((l) => (
                <option key={l}>{l}</option>
              ))}
            </select>
          </label>
          <label className={styles.field}>
            <span>Camera</span>
            <select
              value={controls.camera}
              onChange={(e) => onControlChange("camera", e.target.value)}
              className={styles.select}
            >
              {cameras.map((camera) => (
                <option key={camera}>{camera}</option>
              ))}
            </select>
          </label>
          <PaletteStrip
            palette={
              presets.find((p) => p.id === selectedStyleId)?.palette ?? [
                "#ccc",
                "#ccc",
                "#ccc",
                "#ccc",
              ]
            }
          />
        </div>
      </div>

      {/* Column 3: Face Detail + Details */}
      <div className={styles.column}>
        <div className={styles.section}>
          <h2 className={styles.heading}>Face Detail</h2>
          <label className={styles.field}>
            <span>Skin Texture</span>
            <select
              value={controls.skinTexture}
              onChange={(e) => onControlChange("skinTexture", e.target.value)}
              className={styles.select}
            >
              {skinTextures.map((texture) => (
                <option key={texture}>{texture}</option>
              ))}
            </select>
          </label>
          <label className={styles.field}>
            <span>Hair</span>
            <select
              value={controls.hairDetail}
              onChange={(e) => onControlChange("hairDetail", e.target.value)}
              className={styles.select}
            >
              {hairDetails.map((hair) => (
                <option key={hair}>{hair}</option>
              ))}
            </select>
          </label>
          <label className={styles.field}>
            <span>Makeup</span>
            <select
              value={controls.makeup}
              onChange={(e) => onControlChange("makeup", e.target.value)}
              className={styles.select}
            >
              {makeupStyles.map((makeup) => (
                <option key={makeup}>{makeup}</option>
              ))}
            </select>
          </label>
          <label className={styles.field}>
            <span>Accessories</span>
            <select
              value={controls.accessories}
              onChange={(e) => onControlChange("accessories", e.target.value)}
              className={styles.select}
            >
              {accessories.map((accessory) => (
                <option key={accessory}>{accessory}</option>
              ))}
            </select>
          </label>
        </div>
        <div className={styles.section}>
          <h2 className={styles.heading}>Details</h2>
          <RangeSlider label="Face match" value={controls.faceMatch} onChange={(v) => onControlChange("faceMatch", v)} />
          <RangeSlider label="Pose lock" value={controls.poseLock} onChange={(v) => onControlChange("poseLock", v)} />
          <RangeSlider label="Realism" value={controls.realism} onChange={(v) => onControlChange("realism", v)} />
          <RangeSlider label="Polish" value={controls.polish} onChange={(v) => onControlChange("polish", v)} />
          <RangeSlider label="Approachability" value={controls.approach} onChange={(v) => onControlChange("approach", v)} />
          <RangeSlider label="Creativity" value={controls.creative} onChange={(v) => onControlChange("creative", v)} />
        </div>
      </div>
    </aside>
  );
}

function PaletteStrip({ palette }: { palette: string[] }) {
  return (
    <div className={styles.swatchStrip} aria-label="Color palette">
      {palette.map((color, i) => (
        <span
          key={i}
          className={styles.swatch}
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}
