const styles = [
  {
    id: "studio",
    name: "Studio Executive",
    description: "sharp, polished, credible",
    prompt: "premium studio photography, crisp skin detail, clean corporate portrait language",
    palette: ["#dce3e8", "#8496a3", "#1f3546", "#f7f3ed", "#c98f67"],
    ratio: "4:5",
    realism: 9,
    polish: 8,
    creativity: 3
  },
  {
    id: "warm-friendly",
    name: "Warm Friendly",
    description: "soft, kind, professional",
    prompt: "warm peach-toned studio portrait, approachable professional presence, polished natural makeup, seated editorial poise",
    palette: ["#f3c7ad", "#d88b67", "#3c3431", "#f4e4d6", "#c98f67"],
    ratio: "4:5",
    realism: 8,
    polish: 7,
    creativity: 3
  },
  {
    id: "bright-elegant",
    name: "Bright Elegant",
    description: "airy, poised, luminous",
    prompt: "bright elegant portrait with an all-white wardrobe, soft peach background, graceful seated posture, smooth luminous highlights",
    palette: ["#fff7f0", "#edb99f", "#44515c", "#ffffff", "#bf8460"],
    ratio: "4:5",
    realism: 8,
    polish: 9,
    creativity: 4
  },
  {
    id: "modern-power",
    name: "Modern Power",
    description: "commanding, sleek, bold",
    prompt: "modern powerful studio portrait, deep black backdrop, structured white suit, clean contrast, commanding neutral expression",
    palette: ["#151515", "#f2f1ea", "#111827", "#ffffff", "#b87959"],
    ratio: "4:5",
    realism: 9,
    polish: 8,
    creativity: 4
  },
  {
    id: "decisive-editorial",
    name: "Decisive Editorial",
    description: "assertive, direct, refined",
    prompt: "clean white editorial portrait, tailored black suit, direct gaze, balanced bright lighting, calm assertive professional mood",
    palette: ["#ffffff", "#d9dde2", "#15191f", "#f1f4f2", "#c18a63"],
    ratio: "3:4",
    realism: 8,
    polish: 8,
    creativity: 5
  },
  {
    id: "editorial",
    name: "Editorial",
    description: "magazine-grade, expressive",
    prompt: "modern editorial portrait, intentional composition, subtle fashion photography influence",
    palette: ["#efe4d8", "#b95e4b", "#2f2a28", "#f8f1e9", "#b98561"],
    ratio: "3:4",
    realism: 8,
    polish: 8,
    creativity: 6
  },
  {
    id: "burgundy-cinema",
    name: "Burgundy Cinema",
    description: "moody, elegant, intense",
    prompt: "cinematic portrait against a deep burgundy backdrop, structured dark blazer, luminous skin, quiet dominance and emotional depth",
    palette: ["#4f1f2f", "#9f3f4e", "#161316", "#2a2024", "#b77a58"],
    ratio: "3:4",
    realism: 9,
    polish: 7,
    creativity: 6
  },
  {
    id: "timeless-shirt",
    name: "Timeless Shirt",
    description: "classic, clean, serene",
    prompt: "timeless minimalist portrait, crisp white shirt, neutral light background, soft even glow, serene direct gaze",
    palette: ["#f6f4ef", "#c9d1d3", "#2d3439", "#ffffff", "#c78d68"],
    ratio: "4:5",
    realism: 8,
    polish: 8,
    creativity: 3
  },
  {
    id: "ethereal-dewy",
    name: "Ethereal Dewy",
    description: "dreamy, delicate, close",
    prompt: "ethereal close-up portrait, pastel gray background, dewy skin highlights, natural blush, glossy lips, calm dreamlike gaze",
    palette: ["#edf0f2", "#d5c7d8", "#3d4750", "#f9f0ea", "#c99170"],
    ratio: "4:5",
    realism: 7,
    polish: 7,
    creativity: 8
  },
  {
    id: "bold-red-art",
    name: "Bold Red Art",
    description: "graphic, raw, magnetic",
    prompt: "bold artistic editorial portrait, saturated red backdrop, black minimalist wardrobe, high contrast studio lighting, dramatic hair texture",
    palette: ["#b51f2a", "#f05545", "#161616", "#e6ded8", "#b67856"],
    ratio: "3:4",
    realism: 8,
    polish: 6,
    creativity: 9
  },
  {
    id: "black-white-profile",
    name: "B&W Profile",
    description: "sculptural, timeless, calm",
    prompt: "black and white side-profile portrait, sculptural soft lighting, elegant face and neck contours, minimal background, quiet strength",
    palette: ["#f2f2f0", "#7b8188", "#16181b", "#e8e8e5", "#b98a68"],
    ratio: "4:5",
    realism: 9,
    polish: 8,
    creativity: 5
  },
  {
    id: "introspective-chair",
    name: "Introspective Chair",
    description: "quiet, cinematic, focused",
    prompt: "cinematic studio portrait leaning gently on a chair, fitted black turtleneck, crisp white background, dewy highlights, introspective calm gaze",
    palette: ["#ffffff", "#d6dde1", "#18191b", "#f7f3ee", "#c08a65"],
    ratio: "4:5",
    realism: 8,
    polish: 7,
    creativity: 6
  },
  {
    id: "romantic-playful",
    name: "Romantic Playful",
    description: "bright, soft, cheerful",
    prompt: "bright romantic studio portrait, soft pastel pink wardrobe, clean white background, sparkling eyes, playful editorial freshness",
    palette: ["#ffffff", "#f3b7c8", "#4b3642", "#ffe7ee", "#c98c66"],
    ratio: "4:5",
    realism: 7,
    polish: 7,
    creativity: 7
  },
  {
    id: "cinematic-series",
    name: "Cinematic Series",
    description: "varied, textured, emotional",
    prompt: "four-frame cinematic portrait series, warm beige background, wet-styled hair texture, shifting light moods from soft glow to sharp highlights",
    palette: ["#c9a889", "#7d6a58", "#201b18", "#ead7c4", "#b77959"],
    ratio: "16:9",
    realism: 8,
    polish: 7,
    creativity: 8
  },
  {
    id: "joyful-closeup",
    name: "Joyful Close-Up",
    description: "candid, warm, energetic",
    prompt: "high-resolution close-up portrait, muted dark gray background, genuine wide smile, luminous skin, candid approachable energy",
    palette: ["#34383d", "#808b93", "#22313d", "#f7eadf", "#c88f66"],
    ratio: "4:5",
    realism: 8,
    polish: 7,
    creativity: 4
  },
  {
    id: "confident-bw-series",
    name: "Confident B&W",
    description: "strong, charismatic, cinematic",
    prompt: "black and white portrait series, oversized black suit, confident seated posture, high contrast shadows, calm strength and charisma",
    palette: ["#f4f4f2", "#8a8d90", "#111111", "#e1e0dc", "#bd8868"],
    ratio: "16:9",
    realism: 9,
    polish: 8,
    creativity: 6
  },
  {
    id: "golden-sculptural",
    name: "Golden Sculptural",
    description: "chiseled, warm, dramatic",
    prompt: "sculptural studio portrait, neutral beige background, oversized dark blazer, warm golden side light, bold cheekbone highlights",
    palette: ["#d8b892", "#d59e22", "#26231f", "#efe0ca", "#b87b57"],
    ratio: "4:5",
    realism: 9,
    polish: 8,
    creativity: 6
  },
  {
    id: "quiet-elegance-bw",
    name: "Quiet B&W",
    description: "introspective, refined, still",
    prompt: "black and white close-up side-profile portrait, fitted black turtleneck, directional lighting, quiet elegance and timeless introspection",
    palette: ["#eeeeeb", "#6f7275", "#151515", "#f5f2ed", "#be8765"],
    ratio: "4:5",
    realism: 9,
    polish: 8,
    creativity: 4
  },
  {
    id: "intimate-editorial",
    name: "Intimate Editorial",
    description: "soft, close, alluring",
    prompt: "intimate editorial portrait, muted warm gray background, off-shoulder black wardrobe, luminous eyes, precise soft lighting",
    palette: ["#8a8179", "#c2afa0", "#151414", "#e8dad0", "#bf8664"],
    ratio: "3:4",
    realism: 8,
    polish: 7,
    creativity: 7
  },
  {
    id: "raw-monochrome",
    name: "Raw Monochrome",
    description: "minimal, cinematic, honest",
    prompt: "raw black and white portrait against a plain wall, minimal black wardrobe, loose hair movement, dramatic diffused contrast",
    palette: ["#efefec", "#898989", "#101010", "#dad8d2", "#b98767"],
    ratio: "4:5",
    realism: 9,
    polish: 6,
    creativity: 6
  },
  {
    id: "glamorous-elegance",
    name: "Glamorous Elegance",
    description: "captivating, glossy, poised",
    prompt: "glamorous studio portrait, warm beige tone, strapless black dress, glassy eyes, dewy skin, delicate hand pose near the face",
    palette: ["#c8a386", "#f0d8c3", "#171312", "#ead6c4", "#c78966"],
    ratio: "4:5",
    realism: 8,
    polish: 9,
    creativity: 6
  },
  {
    id: "pure-quiet",
    name: "Pure Quiet",
    description: "clean, gentle, restrained",
    prompt: "pure quiet portrait, clean pale background, soft natural wardrobe, restrained expression, fresh skin detail and delicate light falloff",
    palette: ["#f8f7f2", "#dce5e2", "#485158", "#ffffff", "#c8916a"],
    ratio: "4:5",
    realism: 8,
    polish: 7,
    creativity: 4
  },
  {
    id: "fresh-modern",
    name: "Fresh Modern",
    description: "current, light, relaxed",
    prompt: "fresh modern portrait, crisp background, smart casual styling, natural light, relaxed confident expression and clean contemporary framing",
    palette: ["#eaf3f1", "#82b7ae", "#27333a", "#f8fbfb", "#c98e68"],
    ratio: "4:5",
    realism: 8,
    polish: 7,
    creativity: 5
  },
  {
    id: "tech",
    name: "Tech Avatar",
    description: "clean, friendly, digital",
    prompt: "refined digital avatar, soft geometric shapes, high-end product profile aesthetic",
    palette: ["#e9f7f5", "#0f766e", "#203534", "#ffffff", "#d3a07a"],
    ratio: "1:1",
    realism: 5,
    polish: 7,
    creativity: 7
  },
  {
    id: "avant-garde",
    name: "Avant-Garde",
    description: "experimental, fashion, sharp",
    prompt: "avant-garde fashion portrait, unconventional pose, crisp geometric styling, bold silhouette, refined art direction",
    palette: ["#f7f0dc", "#0f766e", "#0f1115", "#f3f3ef", "#b98262"],
    ratio: "3:4",
    realism: 7,
    polish: 8,
    creativity: 10
  },
  {
    id: "future-editorial",
    name: "Future Editorial",
    description: "sleek, luminous, futuristic",
    prompt: "futuristic editorial avatar portrait, sleek reflective styling, controlled cool highlights, clean graphic composition",
    palette: ["#e8f4ff", "#6d5bd0", "#172033", "#ffffff", "#c18c69"],
    ratio: "1:1",
    realism: 5,
    polish: 8,
    creativity: 9
  },
  {
    id: "cinematic",
    name: "Cinematic",
    description: "dramatic, deep, memorable",
    prompt: "cinematic portrait, controlled contrast, shallow depth of field, premium film still mood",
    palette: ["#1f2328", "#d59e22", "#17202a", "#ece3d4", "#9d6a4d"],
    ratio: "16:9",
    realism: 9,
    polish: 7,
    creativity: 5
  },
  {
    id: "retro-glam",
    name: "Retro Glam",
    description: "vintage, charming, polished",
    prompt: "retro glamorous portrait, vintage-inspired styling, warm studio color, polished hair volume, charming cinematic expression",
    palette: ["#e7c187", "#9b3d35", "#29313a", "#fff4e6", "#ba7d59"],
    ratio: "3:4",
    realism: 8,
    polish: 8,
    creativity: 7
  },
  {
    id: "runway-confidence",
    name: "Runway Confidence",
    description: "fashion, upright, assured",
    prompt: "runway-inspired portrait, confident fashion posture, clean directional light, strong shoulder line, editorial authority",
    palette: ["#eef0ed", "#b9c0c2", "#15181d", "#ffffff", "#c98d64"],
    ratio: "3:4",
    realism: 8,
    polish: 8,
    creativity: 7
  },
  {
    id: "graphic-bold",
    name: "Graphic Bold",
    description: "high-impact, color, shape",
    prompt: "bold graphic portrait, strong color-blocked background, clean silhouette, high-impact editorial composition",
    palette: ["#f2d06b", "#d85b44", "#14213d", "#ffffff", "#b87d5c"],
    ratio: "1:1",
    realism: 6,
    polish: 7,
    creativity: 10
  },
  {
    id: "mysterious-bw",
    name: "Mysterious B&W",
    description: "shadowed, elegant, quiet",
    prompt: "mysterious black and white portrait, deep shadow control, elegant profile, subtle luminous highlights, quiet cinematic restraint",
    palette: ["#f0f0ed", "#5c6065", "#090909", "#d9d5ce", "#b98365"],
    ratio: "4:5",
    realism: 9,
    polish: 8,
    creativity: 6
  },
  {
    id: "minimal",
    name: "Minimal",
    description: "quiet, exact, refined",
    prompt: "minimalist profile portrait, precise negative space, understated premium finish",
    palette: ["#f7f7f3", "#c7d0d4", "#30343a", "#ffffff", "#c58f6a"],
    ratio: "4:5",
    realism: 8,
    polish: 9,
    creativity: 4
  },
  {
    id: "illustrated",
    name: "Illustrated",
    description: "warm, stylized, distinct",
    prompt: "stylized illustrated avatar, tactile digital paint texture, elegant simplified features",
    palette: ["#f2d06b", "#6d5bd0", "#26324f", "#f8ebdc", "#b87a58"],
    ratio: "1:1",
    realism: 3,
    polish: 7,
    creativity: 9
  }
];

const state = {
  styleId: "studio",
  activeTab: "prompt"
};

const dom = {
  styleGrid: document.querySelector("#styleGrid"),
  paletteStrip: document.querySelector("#paletteStrip"),
  styleName: document.querySelector("#styleName"),
  ratioText: document.querySelector("#ratioText"),
  portraitStage: document.querySelector("#portraitStage"),
  promptOutput: document.querySelector("#promptOutput"),
  promptTab: document.querySelector("#promptTab"),
  negativeTab: document.querySelector("#negativeTab"),
  modelSyntaxToggle: document.querySelector("#modelSyntaxToggle"),
  copyButton: document.querySelector("#copyButton"),
  copyStatus: document.querySelector("#copyStatus"),
  randomizeButton: document.querySelector("#randomizeButton"),
  resetButton: document.querySelector("#resetButton"),
  controls: {
    identity: document.querySelector("#identityInput"),
    expression: document.querySelector("#expressionSelect"),
    wardrobe: document.querySelector("#wardrobeSelect"),
    background: document.querySelector("#backgroundSelect"),
    lighting: document.querySelector("#lightingSelect"),
    faceMatch: document.querySelector("#faceMatchRange"),
    poseLock: document.querySelector("#poseLockRange"),
    realism: document.querySelector("#realismRange"),
    polish: document.querySelector("#polishRange"),
    approach: document.querySelector("#approachRange"),
    creative: document.querySelector("#creativeRange")
  },
  outputs: {
    faceMatch: document.querySelector("#faceMatchValue"),
    poseLock: document.querySelector("#poseLockValue"),
    realism: document.querySelector("#realismValue"),
    polish: document.querySelector("#polishValue"),
    approach: document.querySelector("#approachValue"),
    creative: document.querySelector("#creativeValue")
  }
};

const identities = [
  "confident startup founder",
  "experienced product designer",
  "approachable healthcare professional",
  "thoughtful university researcher",
  "independent creative director",
  "trusted real estate advisor",
  "modern finance executive"
];

function getStyle() {
  return styles.find((style) => style.id === state.styleId) || styles[0];
}

function renderStyles() {
  dom.styleGrid.innerHTML = "";

  styles.forEach((style) => {
    const label = document.createElement("label");
    label.className = "style-option";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "style";
    input.value = style.id;
    input.checked = style.id === state.styleId;
    input.addEventListener("change", () => {
      state.styleId = style.id;
      applyStyleDefaults(style);
      update();
    });

    const card = document.createElement("span");
    card.className = "style-card";

    const thumb = document.createElement("span");
    thumb.className = "style-thumb";
    thumb.style.setProperty("--a", style.palette[0]);
    thumb.style.setProperty("--b", style.palette[1]);
    thumb.style.setProperty("--skin", style.palette[4]);

    const name = document.createElement("strong");
    name.textContent = style.name;

    const description = document.createElement("span");
    description.textContent = style.description;

    card.append(thumb, name, description);
    label.append(input, card);
    dom.styleGrid.append(label);
  });
}

function applyStyleDefaults(style) {
  dom.controls.realism.value = style.realism;
  dom.controls.polish.value = style.polish;
  dom.controls.creative.value = style.creativity;
}

function renderPalette(style) {
  dom.paletteStrip.innerHTML = "";
  style.palette.forEach((color) => {
    const swatch = document.createElement("span");
    swatch.className = "swatch";
    swatch.style.backgroundColor = color;
    dom.paletteStrip.append(swatch);
  });
}

function getFormat() {
  return document.querySelector('input[name="format"]:checked').value;
}

function descriptorFromValue(label, value) {
  const numericValue = Number(value);
  if (numericValue >= 9) return `extremely ${label}`;
  if (numericValue >= 7) return `highly ${label}`;
  if (numericValue >= 5) return `moderately ${label}`;
  if (numericValue >= 3) return `lightly ${label}`;
  return `subtly ${label}`;
}

function buildPrompt() {
  const style = getStyle();
  const targetVibe = dom.controls.identity.value.trim() || "professional profile";
  const faceMatch = descriptorFromValue("faithful to the reference face and identity", dom.controls.faceMatch.value);
  const poseLock = descriptorFromValue("close to the original pose, framing, and facial angle", dom.controls.poseLock.value);
  const details = [
    `Transform the user's provided reference image into a ${getFormat()} with a ${targetVibe} vibe`,
    "use the reference image as the source identity, not as loose inspiration",
    `${faceMatch}; preserve the person's facial structure, age impression, skin tone, hairstyle direction, and recognizable features`,
    `${poseLock}; keep the original head angle, gaze direction, and crop unless the chosen style requires a subtle refinement`,
    style.prompt,
    `${dom.controls.expression.value}, ${dom.controls.wardrobe.value}`,
    `${dom.controls.background.value}, ${dom.controls.lighting.value}`,
    `${descriptorFromValue("realistic", dom.controls.realism.value)}, ${descriptorFromValue("polished", dom.controls.polish.value)}`,
    `${descriptorFromValue("approachable", dom.controls.approach.value)}, ${descriptorFromValue("creative", dom.controls.creative.value)}`,
    "sharp eyes, natural skin texture, balanced facial symmetry, flattering lens compression, professional color grading",
    "do not change the person into a different model, celebrity, gender, ethnicity, or age",
    `palette cues: ${style.palette.join(", ")}`,
    `aspect ratio ${style.ratio}`
  ];

  if (dom.modelSyntaxToggle.checked) {
    return `${details.join(", ")} --ar ${style.ratio} --style raw --v 6`;
  }

  return details.join(". ") + ".";
}

function buildNegativePrompt() {
  return [
    "avoid changing the person's identity",
    "avoid a different face, different age, different ethnicity, different gender, celebrity likeness, or generic stock model",
    "avoid distorted facial anatomy",
    "avoid extra fingers, warped ears, uneven eyes, plastic skin, heavy blur, harsh shadows",
    "avoid over-smoothed retouching, visible watermark, text, logo artifacts, cropped chin, cropped forehead",
    "avoid exaggerated smile unless requested, avoid busy background, avoid low-resolution details"
  ].join(", ");
}

function applyPortrait(style) {
  const root = document.documentElement;
  root.style.setProperty("--stageA", style.palette[0]);
  root.style.setProperty("--stageB", style.palette[1]);
  root.style.setProperty("--jacketTone", style.palette[2]);
  root.style.setProperty("--shirtTone", style.palette[3]);
  root.style.setProperty("--skinTone", style.palette[4]);
  root.style.setProperty("--hairTone", style.id === "minimal" ? "#4d3f37" : "#2b2424");

  const approach = Number(dom.controls.approach.value);
  root.style.setProperty("--mouthHeight", `${Math.max(8, approach + 6)}px`);
}

function updateRangeOutputs() {
  Object.keys(dom.outputs).forEach((key) => {
    dom.outputs[key].textContent = dom.controls[key].value;
  });
}

function updateTabs() {
  const promptActive = state.activeTab === "prompt";
  dom.promptTab.classList.toggle("active", promptActive);
  dom.negativeTab.classList.toggle("active", !promptActive);
  dom.promptTab.setAttribute("aria-selected", String(promptActive));
  dom.negativeTab.setAttribute("aria-selected", String(!promptActive));
}

function update() {
  const style = getStyle();
  updateRangeOutputs();
  updateTabs();
  renderPalette(style);
  applyPortrait(style);
  dom.styleName.textContent = style.name;
  dom.ratioText.textContent = style.ratio;
  dom.promptOutput.value = state.activeTab === "prompt" ? buildPrompt() : buildNegativePrompt();
}

function setSelectToRandom(select) {
  select.selectedIndex = Math.floor(Math.random() * select.options.length);
}

function randomize() {
  const style = styles[Math.floor(Math.random() * styles.length)];
  state.styleId = style.id;
  dom.controls.identity.value = identities[Math.floor(Math.random() * identities.length)];
  setSelectToRandom(dom.controls.expression);
  setSelectToRandom(dom.controls.wardrobe);
  setSelectToRandom(dom.controls.background);
  setSelectToRandom(dom.controls.lighting);
  dom.controls.faceMatch.value = String(Math.ceil(Math.random() * 2) + 8);
  dom.controls.poseLock.value = String(Math.ceil(Math.random() * 4) + 5);
  dom.controls.realism.value = String(Math.ceil(Math.random() * 4) + 6);
  dom.controls.polish.value = String(Math.ceil(Math.random() * 5) + 5);
  dom.controls.approach.value = String(Math.ceil(Math.random() * 6) + 4);
  dom.controls.creative.value = String(Math.ceil(Math.random() * 8) + 2);
  renderStyles();
  update();
}

function reset() {
  state.styleId = "studio";
  state.activeTab = "prompt";
  dom.controls.identity.value = "confident startup founder";
  dom.controls.expression.selectedIndex = 0;
  dom.controls.wardrobe.selectedIndex = 0;
  dom.controls.background.selectedIndex = 0;
  dom.controls.lighting.selectedIndex = 0;
  dom.controls.faceMatch.value = "9";
  dom.controls.poseLock.value = "7";
  dom.modelSyntaxToggle.checked = false;
  applyStyleDefaults(styles[0]);
  renderStyles();
  update();
}

async function copyPrompt() {
  try {
    await navigator.clipboard.writeText(dom.promptOutput.value);
    dom.copyStatus.textContent = "Copied";
  } catch {
    dom.promptOutput.select();
    document.execCommand("copy");
    dom.copyStatus.textContent = "Copied";
  }

  window.setTimeout(() => {
    dom.copyStatus.textContent = "";
  }, 1800);
}

Object.values(dom.controls).forEach((control) => {
  control.addEventListener("input", update);
  control.addEventListener("change", update);
});

document.querySelectorAll('input[name="format"]').forEach((input) => {
  input.addEventListener("change", update);
});

dom.promptTab.addEventListener("click", () => {
  state.activeTab = "prompt";
  update();
});

dom.negativeTab.addEventListener("click", () => {
  state.activeTab = "negative";
  update();
});

dom.modelSyntaxToggle.addEventListener("change", update);
dom.copyButton.addEventListener("click", copyPrompt);
dom.randomizeButton.addEventListener("click", randomize);
dom.resetButton.addEventListener("click", reset);

renderStyles();
update();
