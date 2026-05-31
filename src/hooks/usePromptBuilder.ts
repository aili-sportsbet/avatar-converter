import { useCallback } from "react";
import type { ControlValues, PromptMode, StylePreset } from "../types";

function descriptorFromValue(label: string, value: number): string {
  if (value >= 9) return `extremely ${label}`;
  if (value >= 7) return `highly ${label}`;
  if (value >= 5) return `moderately ${label}`;
  if (value >= 3) return `lightly ${label}`;
  return `subtly ${label}`;
}

function buildDetailsBlock(controls: ControlValues): string {
  return [
    descriptorFromValue("realistic", controls.realism),
    descriptorFromValue("polished", controls.polish),
    descriptorFromValue("approachable", controls.approach),
    descriptorFromValue("creative", controls.creative),
  ].join("; ");
}

export function usePromptBuilder() {
  const buildNegativePrompt = useCallback((): string => {
    return [
      "avoid changing the person's identity",
      "avoid a different face, different age, different ethnicity, different gender, celebrity likeness, or generic stock model",
      "avoid distorted facial anatomy, warped face, uneven eyes, warped ears, asymmetrical teeth, or unnatural smile",
      "avoid extra fingers, extra hands, extra limbs, malformed hands, cropped hands, phones, or handheld devices",
      "avoid plastic-looking skin, waxy skin, unnaturally smooth skin, over-processed retouching, blurry details, or low-resolution output",
      "avoid visible watermark, text, logo artifacts, busy background, harsh shadows, stock photo appearance, cropped chin, or cropped forehead",
    ].join(", ");
  }, []);

  const buildPresetPrompt = useCallback(
    (style: StylePreset, controls: ControlValues): string => {
      const faceMatch = descriptorFromValue(
        "faithful to the reference face and identity",
        controls.faceMatch,
      );
      const quality = buildDetailsBlock(controls);

      return [
        `Transform the reference image into a styled portrait. Use the reference image as the source identity, not as loose inspiration.`,
        `Identity preservation: ${faceMatch}; maintain the exact facial structure, age impression, skin tone, hairstyle direction, and recognizable key features. Do not change the person into a different model, celebrity, gender, ethnicity, or age.`,
        `Quality: ${quality}; ultra-realistic studio portrait, high-resolution, sharp focus, refined film grain, professional color grading.`,
        `Style direction: ${style.prompt}. Palette cues: ${style.palette.join(", ")}. Aspect ratio ${style.ratio}.`,
      ].join("\n\n");
    },
    [],
  );

  const buildCustomPrompt = useCallback(
    (controls: ControlValues): string => {
      const targetVibe = controls.identity.trim() || "professional profile";
      const faceMatch = descriptorFromValue(
        "faithful to the reference face and identity",
        controls.faceMatch,
      );
      const quality = buildDetailsBlock(controls);

      return [
        `Subject: Transform the reference image into a portrait with a ${targetVibe} vibe. Use the reference image as the source identity, not as loose inspiration.`,
        `Identity preservation: ${faceMatch}; maintain the exact facial structure, age impression, skin tone, hairstyle direction, and recognizable key features. Do not change the person into a different model, celebrity, gender, ethnicity, or age.`,
        `Pose and framing: ${controls.framing}; keep the original head angle and gaze direction unless the chosen style requires a subtle refinement.`,
        `Clothing and styling: ${controls.wardrobe}; ${controls.hairDetail}; ${controls.makeup}; ${controls.accessories}.`,
        `Face detail: ${controls.expression}; ${controls.skinTexture}; subtle catchlights in the eyes; balanced facial symmetry; observe crisp detail, not waxy or over-smoothed skin.`,
        `Background and lighting: ${controls.background}; ${controls.lighting}.`,
        `Camera and quality: ${controls.camera}; ${quality}; ultra-realistic studio portrait, high-resolution, sharp focus, refined film grain, professional color grading.`,
      ].join("\n\n");
    },
    [],
  );

  const buildPrompt = useCallback(
    (mode: PromptMode, style: StylePreset, controls: ControlValues): string => {
      if (mode === "preset") {
        return buildPresetPrompt(style, controls);
      }
      return buildCustomPrompt(controls);
    },
    [buildPresetPrompt, buildCustomPrompt],
  );

  const buildPromptPackage = useCallback(
    (mode: PromptMode, style: StylePreset, controls: ControlValues): string => {
      const parts = [
        "POSITIVE PROMPT",
        buildPrompt(mode, style, controls),
        "",
        "NEGATIVE PROMPT",
        buildNegativePrompt(),
      ];

      if (mode === "preset") {
        parts.push("", `ASPECT RATIO: ${style.ratio}`);
      }

      return parts.join("\n");
    },
    [buildNegativePrompt, buildPrompt],
  );

  return { buildPrompt, buildNegativePrompt, buildPromptPackage };
}
