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

      const details = [
        `Transform the user's provided reference image into a ${controls.format} with a ${targetVibe} vibe`,
        "use the reference image as the source identity, not as loose inspiration",
        `${faceMatch}; preserve the person's facial structure, age impression, skin tone, hairstyle direction, and recognizable features`,
        `${poseLock}; keep the original head angle, gaze direction, and crop unless the chosen style requires a subtle refinement`,
        style.prompt,
        `${controls.expression}, ${controls.wardrobe}`,
        `${controls.background}, ${controls.lighting}`,
        `${descriptorFromValue("realistic", controls.realism)}, ${descriptorFromValue("polished", controls.polish)}`,
        `${descriptorFromValue("approachable", controls.approach)}, ${descriptorFromValue("creative", controls.creative)}`,
        "sharp eyes, natural skin texture, balanced facial symmetry, flattering lens compression, professional color grading",
        "do not change the person into a different model, celebrity, gender, ethnicity, or age",
        `palette cues: ${style.palette.join(", ")}`,
        `aspect ratio ${style.ratio}`,
      ];

      if (controls.modelSyntax) {
        return `${details.join(", ")} --ar ${style.ratio} --style raw --v 6`;
      }

      return details.join(". ") + ".";
    },
    [],
  );

  const buildNegativePrompt = useCallback((): string => {
    return [
      "avoid changing the person's identity",
      "avoid a different face, different age, different ethnicity, different gender, celebrity likeness, or generic stock model",
      "avoid distorted facial anatomy",
      "avoid extra fingers, warped ears, uneven eyes, plastic skin, heavy blur, harsh shadows",
      "avoid over-smoothed retouching, visible watermark, text, logo artifacts, cropped chin, cropped forehead",
      "avoid exaggerated smile unless requested, avoid busy background, avoid low-resolution details",
    ].join(", ");
  }, []);

  return { buildPrompt, buildNegativePrompt };
}
