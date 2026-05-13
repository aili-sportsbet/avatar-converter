import { useState, useCallback, useMemo } from "react";
import type { ControlValues, PromptMode, PromptTab, StylePreset } from "./types";
import {
  accessories,
  backgrounds,
  cameras,
  defaultControls,
  expressions,
  framings,
  hairDetails,
  identities,
  lightings,
  makeupStyles,
  skinTextures,
  styles as stylePresets,
  wardrobes,
} from "./data/styles";
import { usePromptBuilder } from "./hooks/usePromptBuilder";
import { useClipboard } from "./hooks/useClipboard";
import { Header } from "./components/Header";
import { ControlsPanel } from "./components/ControlsPanel";
import { Portrait } from "./components/Portrait";
import { OutputPanel } from "./components/OutputPanel";
import { PromptGuidePage } from "./components/PromptGuidePage";
import styles from "./App.module.css";

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomInRange(min: number, max: number): number {
  return Math.ceil(Math.random() * (max - min)) + min;
}

export function App() {
  const [currentPage, setCurrentPage] = useState<"studio" | "guide">("studio");
  const [mode, setMode] = useState<PromptMode>("preset");
  const [selectedStyleId, setSelectedStyleId] = useState("studio");
  const [controls, setControls] = useState<ControlValues>(defaultControls);
  const [activeTab, setActiveTab] = useState<PromptTab>("prompt");

  const { buildPrompt, buildNegativePrompt, buildPromptPackage } = usePromptBuilder();
  const { status: copyStatus, copy } = useClipboard();

  const selectedStyle = useMemo(
    () => stylePresets.find((s) => s.id === selectedStyleId) ?? stylePresets[0],
    [selectedStyleId],
  );

  const promptText = useMemo(() => {
    if (activeTab === "prompt") {
      return buildPrompt(mode, selectedStyle, controls);
    }
    if (activeTab === "package") {
      return buildPromptPackage(mode, selectedStyle, controls);
    }
    return buildNegativePrompt();
  }, [activeTab, mode, selectedStyle, controls, buildPrompt, buildNegativePrompt, buildPromptPackage]);

  const updateControl = useCallback(
    <K extends keyof ControlValues>(key: K, value: ControlValues[K]) => {
      setControls((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  const handleStyleSelect = useCallback((style: StylePreset) => {
    setSelectedStyleId(style.id);
    setControls((prev) => ({
      ...prev,
      realism: style.realism,
      polish: style.polish,
      creative: style.creativity,
    }));
  }, []);

  const handleReset = useCallback(() => {
    setMode("preset");
    setSelectedStyleId("studio");
    setActiveTab("prompt");
    setControls({ ...defaultControls });
  }, []);

  const handleRandomize = useCallback(() => {
    const detailSliders = {
      faceMatch: randomInRange(8, 10),
      realism: randomInRange(6, 10),
      polish: randomInRange(5, 10),
      approach: randomInRange(4, 10),
      creative: randomInRange(2, 10),
    };

    if (mode === "preset") {
      const style = pickRandom(stylePresets);
      setSelectedStyleId(style.id);
      setControls((prev) => ({
        ...prev,
        ...detailSliders,
        realism: style.realism,
        polish: style.polish,
        creative: style.creativity,
      }));
    } else {
      setControls({
        identity: pickRandom(identities),
        expression: pickRandom(expressions),
        wardrobe: pickRandom(wardrobes),
        framing: pickRandom(framings),
        camera: pickRandom(cameras),
        background: pickRandom(backgrounds),
        lighting: pickRandom(lightings),
        skinTexture: pickRandom(skinTextures),
        hairDetail: pickRandom(hairDetails),
        makeup: pickRandom(makeupStyles),
        accessories: pickRandom(accessories),
        ...detailSliders,
      });
    }
  }, [mode]);

  const handleCopy = useCallback(() => {
    copy(promptText);
  }, [copy, promptText]);

  return (
    <main className={styles.shell}>
      <Header
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        onCopy={handleCopy}
        onRandomize={handleRandomize}
        copyStatus={copyStatus}
      />

      {currentPage === "studio" ? (
        <section className={styles.workspace} aria-label="Prompt generator workspace">
          <ControlsPanel
            mode={mode}
            onModeChange={setMode}
            presets={stylePresets}
            selectedStyleId={selectedStyleId}
            controls={controls}
            onStyleSelect={handleStyleSelect}
            onControlChange={updateControl}
            onReset={handleReset}
          />

          <div className={styles.bottomRow}>
            <Portrait
              style={mode === "preset" ? selectedStyle : null}
              approachValue={controls.approach}
            />
            <OutputPanel
              activeTab={activeTab}
              onTabChange={setActiveTab}
              promptText={promptText}
            />
          </div>
        </section>
      ) : (
        <PromptGuidePage />
      )}
    </main>
  );
}
