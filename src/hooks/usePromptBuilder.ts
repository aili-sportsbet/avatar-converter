import { useCallback } from "react";
import type { ControlValues, StylePreset } from "../types";

function descriptorFromValue(label: string, value: number): string {
  if (value >= 9) return `extremely ${label}`;
  if (value >= 7) return `highly ${label}`;
  if (value >= 5) return `moderately ${label}`;
  if (value >= 3) return `lightly ${label}`;
  return `subtly ${label}`;
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

  const buildPrompt = useCallback(
    (style: StylePreset, controls: ControlValues): string => {
      const targetVibe = controls.identity.trim() || "professional profile";
      const faceMatch = descriptorFromValue(
        "faithful to the reference face and identity",
        controls.faceMatch,
      );
      const poseLock = descriptorFromValue(
        "close to the original pose, framing, and facial angle",
        controls.poseLock,
      );
      return [
        `Subject: Transform the user's provided reference image into a ${controls.format} with a ${targetVibe} vibe. Use the reference image as the source identity, not as loose inspiration.`,
        `Identity preservation: ${faceMatch}; maintain the exact facial structure, age impression, skin tone, hairstyle direction, and recognizable key features. Do not change the person into a different model, celebrity, gender, ethnicity, or age.`,
        `Pose and framing: ${poseLock}; ${controls.framing}; keep the original head angle and gaze direction unless the chosen style requires a subtle refinement.`,
        `Clothing and styling: ${controls.wardrobe}; ${controls.hairDetail}; ${controls.makeup}; ${controls.accessories}.`,
        `Face detail: ${controls.expression}; ${controls.skinTexture}; subtle catchlights in the eyes; balanced facial symmetry; observe crisp detail, not waxy or over-smoothed skin.`,
        `Background and lighting: ${controls.background}; ${controls.lighting}; palette cues: ${style.palette.join(", ")}.`,
        `Camera and quality: ${controls.camera}; ${descriptorFromValue("realistic", controls.realism)}; ${descriptorFromValue("polished", controls.polish)}; ${descriptorFromValue("approachable", controls.approach)}; ${descriptorFromValue("creative", controls.creative)}; ultra-realistic studio portrait, high-resolution, sharp focus, refined film grain, professional color grading.`,
        `Style direction: ${style.prompt}. Aspect ratio ${style.ratio}.`,
      ].join("\n\n");
    },
    [],
  );

  const buildPromptPackage = useCallback(
    (style: StylePreset, controls: ControlValues): string => {
      return [
        "POSITIVE PROMPT",
        buildPrompt(style, controls),
        "",
        "NEGATIVE PROMPT",
        buildNegativePrompt(),
        "",
        `ASPECT RATIO: ${style.ratio}`,
      ].join("\n");
    },
    [buildNegativePrompt, buildPrompt],
  );

  return { buildPrompt, buildNegativePrompt, buildPromptPackage };
}
