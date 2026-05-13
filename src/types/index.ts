export interface StylePreset {
  id: string;
  name: string;
  description: string;
  prompt: string;
  palette: [string, string, string, string];
  ratio: string;
  realism: number;
  polish: number;
  creativity: number;
}

export type PromptMode = "preset" | "custom";

export interface ControlValues {
  identity: string;
  expression: string;
  wardrobe: string;
  framing: string;
  camera: string;
  background: string;
  lighting: string;
  skinTexture: string;
  hairDetail: string;
  makeup: string;
  accessories: string;
  faceMatch: number;
  realism: number;
  polish: number;
  approach: number;
  creative: number;
}

export type PromptTab = "prompt" | "negative" | "package";
