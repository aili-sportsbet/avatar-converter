import { useState, useCallback, useMemo } from "react";
import type { ControlValues, PromptTab, StylePreset } from "./types";
import { styles as stylePresets, defaultControls, identities, expressions, wardrobes, backgrounds, lightings } from "./data/styles";
import { usePromptBuilder } from "./hooks/usePromptBuilder";
import { useClipboard } from "./hooks/useClipboard";
import { Header } from "./components/Header";
import { ControlsPanel } from "./components/ControlsPanel";
import { Portrait } from "./components/Portrait";
import { OutputPanel } from "./components/OutputPanel";
import styles from "./App.module.css";

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomInRange(min: number, max: number): number {
  return Math.ceil(Math.random() * (max - min)) + min;
}

export function App() {
  const [selectedStyleId, setSelectedStyleId] = useState("studio");
  const [controls, setControls] = useState<ControlValues>(defaultControls);
  const [activeTab, setActiveTab] = useState<PromptTab>("prompt");

  const { buildPrompt, buildNegativePrompt } = usePromptBuilder();
  const { status: copyStatus, copy } = useClipboard();

  const selectedStyle = useMemo(
    () => stylePresets.find((s) => s.id === selectedStyleId) ?? stylePresets[0],
    [selectedStyleId],
  );

  const promptText = useMemo(() => {
    if (activeTab === "prompt") {
      return buildPrompt(selectedStyle, controls);
    }
    return buildNegativePrompt();
  }, [activeTab, selectedStyle, controls, buildPrompt, buildNegativePrompt]);

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
    setSelectedStyleId("studio");
    setActiveTab("prompt");
    setControls({ ...defaultControls });
  }, []);

  const handleRandomize = useCallback(() => {
    const style = pickRandom(stylePresets);
    setSelectedStyleId(style.id);
    setControls({
      format: pickRandom(["professional headshot", "profile avatar", "founder portrait"]),
      identity: pickRandom(identities),
      expression: pickRandom(expressions),
      wardrobe: pickRandom(wardrobes),
      background: pickRandom(backgrounds),
      lighting: pickRandom(lightings),
      faceMatch: randomInRange(8, 10),
      poseLock: randomInRange(5, 9),
      realism: randomInRange(6, 10),
      polish: randomInRange(5, 10),
      approach: randomInRange(4, 10),
      creative: randomInRange(2, 10),
      modelSyntax: false,
    });
  }, []);

  const handleCopy = useCallback(() => {
    copy(promptText);
  }, [copy, promptText]);

  return (
    <main className={styles.shell}>
      <Header
        onCopy={handleCopy}
        onRandomize={handleRandomize}
        copyStatus={copyStatus}
      />

      <section className={styles.workspace} aria-label="Prompt generator workspace">
        <ControlsPanel
          presets={stylePresets}
          selectedStyleId={selectedStyleId}
          controls={controls}
          onStyleSelect={handleStyleSelect}
          onControlChange={updateControl}
          onReset={handleReset}
        />

        <section className={styles.previewPanel} aria-label="Prompt preview">
          <Portrait style={selectedStyle} approachValue={controls.approach} />
          <OutputPanel
            activeTab={activeTab}
            onTabChange={setActiveTab}
            promptText={promptText}
            modelSyntax={controls.modelSyntax}
            onModelSyntaxChange={(v) => updateControl("modelSyntax", v)}
            copyStatus={copyStatus}
          />
        </section>
      </section>
    </main>
  );
}
