import type { ControlValues, PromptMode, StylePreset } from "../types";
import { ComboField } from "./ComboField";
import { StyleGrid } from "./StyleGrid";
import { RangeSlider } from "./RangeSlider";
import {
  accessories,
  backgrounds,
  cameras,
  expressions,
  framings,
  hairDetails,
  identities,
  lightings,
  makeupStyles,
  skinTextures,
  wardrobes,
} from "../data/styles";
import styles from "./ControlsPanel.module.css";

interface ControlsPanelProps {
  mode: PromptMode;
  onModeChange: (mode: PromptMode) => void;
  presets: StylePreset[];
  selectedStyleId: string;
  controls: ControlValues;
  onStyleSelect: (style: StylePreset) => void;
  onControlChange: <K extends keyof ControlValues>(key: K, value: ControlValues[K]) => void;
  onReset: () => void;
}

const modes: { value: PromptMode; label: string }[] = [
  { value: "preset", label: "Style Preset" },
  { value: "custom", label: "Custom Prompt" },
];

export function ControlsPanel({
  mode,
  onModeChange,
  presets,
  selectedStyleId,
  controls,
  onStyleSelect,
  onControlChange,
  onReset,
}: ControlsPanelProps) {
  return (
    <aside
      className={styles.panel}
      data-mode={mode}
      aria-label="Prompt controls"
    >
      {/* Mode toggle + Reset */}
      <div className={styles.modeBar}>
        <h2 className={styles.heading}>Mode</h2>
        <div className={styles.segmented} role="radiogroup" aria-label="Prompt mode">
          {modes.map((m) => (
            <label key={m.value}>
              <input
                type="radio"
                name="promptMode"
                value={m.value}
                checked={mode === m.value}
                onChange={() => onModeChange(m.value)}
                className={styles.segmentedRadio}
              />
              <span
                className={styles.segmentedLabel}
                data-checked={mode === m.value}
              >
                {m.label}
              </span>
            </label>
          ))}
        </div>
        <button className={styles.ghostButton} type="button" onClick={onReset}>
          Reset
        </button>
      </div>

      {/* Column 1: Style grid (preset mode only) */}
      {mode === "preset" && (
        <div className={styles.column}>
          <div className={styles.section}>
            <h2 className={styles.heading}>Style</h2>
            <StyleGrid
              presets={presets}
              selectedId={selectedStyleId}
              onSelect={onStyleSelect}
            />
          </div>
        </div>
      )}

      {/* Column 2: Subject + Scene (custom mode only) */}
      {mode === "custom" && (
        <div className={styles.column}>
          <div className={styles.section}>
            <h2 className={styles.heading}>Subject</h2>
            <ComboField
              label="Target vibe"
              value={controls.identity}
              options={identities}
              onChange={(v) => onControlChange("identity", v)}
            />
            <ComboField
              label="Expression"
              value={controls.expression}
              options={expressions}
              onChange={(v) => onControlChange("expression", v)}
            />
            <ComboField
              label="Wardrobe"
              value={controls.wardrobe}
              options={wardrobes}
              onChange={(v) => onControlChange("wardrobe", v)}
            />
            <ComboField
              label="Framing"
              value={controls.framing}
              options={framings}
              onChange={(v) => onControlChange("framing", v)}
            />
          </div>
          <div className={styles.section}>
            <h2 className={styles.heading}>Scene</h2>
            <ComboField
              label="Background"
              value={controls.background}
              options={backgrounds}
              onChange={(v) => onControlChange("background", v)}
            />
            <ComboField
              label="Lighting"
              value={controls.lighting}
              options={lightings}
              onChange={(v) => onControlChange("lighting", v)}
            />
            <ComboField
              label="Camera"
              value={controls.camera}
              options={cameras}
              onChange={(v) => onControlChange("camera", v)}
            />
          </div>
        </div>
      )}

      {/* Column 3 (custom only): Face Detail */}
      {mode === "custom" && (
        <div className={styles.column}>
          <div className={styles.section}>
            <h2 className={styles.heading}>Face Detail</h2>
            <ComboField
              label="Skin Texture"
              value={controls.skinTexture}
              options={skinTextures}
              onChange={(v) => onControlChange("skinTexture", v)}
            />
            <ComboField
              label="Hair"
              value={controls.hairDetail}
              options={hairDetails}
              onChange={(v) => onControlChange("hairDetail", v)}
            />
            <ComboField
              label="Makeup"
              value={controls.makeup}
              options={makeupStyles}
              onChange={(v) => onControlChange("makeup", v)}
            />
            <ComboField
              label="Accessories"
              value={controls.accessories}
              options={accessories}
              onChange={(v) => onControlChange("accessories", v)}
            />
          </div>
        </div>
      )}

      {/* Details — always visible */}
      <div className={styles.column}>
        <div className={styles.section}>
          <h2 className={styles.heading}>Details</h2>
          <RangeSlider label="Face match" value={controls.faceMatch} onChange={(v) => onControlChange("faceMatch", v)} />
          <RangeSlider label="Realism" value={controls.realism} onChange={(v) => onControlChange("realism", v)} />
          <RangeSlider label="Polish" value={controls.polish} onChange={(v) => onControlChange("polish", v)} />
          <RangeSlider label="Approachability" value={controls.approach} onChange={(v) => onControlChange("approach", v)} />
          <RangeSlider label="Creativity" value={controls.creative} onChange={(v) => onControlChange("creative", v)} />
        </div>
        {mode === "preset" && (
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
        )}
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
