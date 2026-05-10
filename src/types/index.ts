export interface StylePreset {
  id: string;
  name: string;
  description: string;
  prompt: string;
  palette: [string, string, string, string, string];
  ratio: string;
  realism: number;
  polish: number;
  creativity: number;
}

export interface ControlValues {
  format: string;
  identity: string;
  expression: string;
  wardrobe: string;
  background: string;
  lighting: string;
  faceMatch: number;
  poseLock: number;
  realism: number;
  polish: number;
  approach: number;
  creative: number;
  modelSyntax: boolean;
}

export type PromptTab = "prompt" | "negative";
