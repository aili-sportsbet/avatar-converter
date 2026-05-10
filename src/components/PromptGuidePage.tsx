import { useCallback, useMemo, useState } from "react";
import styles from "./PromptGuidePage.module.css";

interface PromptGuidePoint {
  label: string;
  text: string;
}

interface PromptGuideSlide {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  formula?: string;
  points: PromptGuidePoint[];
  takeaway: string;
}

const slides: PromptGuideSlide[] = [
  {
    id: "base",
    eyebrow: "01 / Foundation",
    title: "Start With A Strong Base Prompt",
    summary:
      "Treat the prompt like a blueprint. Define the person, pose, outfit, background, light, and realism constraints before adding style.",
    formula:
      "Subject + Pose + Clothing + Background + Lighting + Realism Constraints",
    points: [
      {
        label: "Realism directive",
        text: "Use phrases like “observe crisp detail” to avoid waxy, over-smoothed faces.",
      },
      {
        label: "Technical modifier",
        text: "Add camera language such as “85mm f/1.8 lens” for natural facial proportions and soft bokeh.",
      },
      {
        label: "Identity preservation",
        text: "For source-image workflows, ask to maintain the exact facial structure, identity, and key features.",
      },
    ],
    takeaway:
      "Best use: high-resolution studio portraits, profile avatars, and consistent headshots.",
  },
  {
    id: "face",
    eyebrow: "02 / Face",
    title: "Describe Natural Facial Detail",
    summary:
      "Professional portraits need texture and expression. Keep facial edits subtle so the result looks photographed instead of rendered.",
    points: [
      {
        label: "Skin texture",
        text: "Ask for natural skin texture, visible pores, dewy finish, and subtle highlights on cheekbones.",
      },
      {
        label: "Eyes",
        text: "Use catchlights, warm eye contact, or a confident expression to guide the emotional tone.",
      },
      {
        label: "Makeup",
        text: "Choose polished natural makeup for business use, or matte lips and earth-tone eyeshadow for editorial looks.",
      },
    ],
    takeaway:
      "Best use: avoiding plastic skin while preserving a polished professional finish.",
  },
  {
    id: "hair",
    eyebrow: "03 / Hair",
    title: "Use Hair To Set The Vibe",
    summary:
      "Hair details help the model distinguish corporate, approachable, creative, and editorial portraits.",
    points: [
      {
        label: "Corporate",
        text: "Use sleek, neatly styled, tied-up, or soft-wave hair for studio and executive portraits.",
      },
      {
        label: "Natural",
        text: "Use natural flow, soft hair at the temples, or a few loose strands for a relaxed portrait.",
      },
      {
        label: "Artistic",
        text: "Messier short hair or face-framing strands can make the shot feel candid and editorial.",
      },
    ],
    takeaway:
      "Best use: shifting the same identity between polished business and creative profile imagery.",
  },
  {
    id: "wardrobe",
    eyebrow: "04 / Wardrobe",
    title: "Match Clothing To The Context",
    summary:
      "Wardrobe anchors the portrait in a professional field and gives the image color harmony.",
    points: [
      {
        label: "Professional",
        text: "Try premium navy suits, beige tailoring, crisp silk-linen shirts, or sleek black turtlenecks.",
      },
      {
        label: "High fashion",
        text: "Use structured shoulders, asymmetrical blazers, emerald tones, or avant-garde gowns for editorial polish.",
      },
      {
        label: "Accessories",
        text: "Add restrained details such as a printed silk scarf or elegant gold stud earrings.",
      },
    ],
    takeaway:
      "Best use: making the portrait feel intentional for LinkedIn, founder pages, or campaign imagery.",
  },
  {
    id: "framing",
    eyebrow: "05 / Composition",
    title: "Control Poses And Framing",
    summary:
      "Precise composition language prevents awkward crops, stiff poses, and confusing body geometry.",
    points: [
      {
        label: "Framing",
        text: "Ask for chest-up framing with ample headroom and negative space above the head.",
      },
      {
        label: "Angles",
        text: "Use three-quarter profile, head slightly turned toward camera, or body at a slight 3/4 angle.",
      },
      {
        label: "Stance",
        text: "Try seated statuesque elegance for premium portraits, or mid-stride energy for runway-inspired shots.",
      },
    ],
    takeaway:
      "Best use: keeping heads, shoulders, hands, and posture under control.",
  },
  {
    id: "lighting",
    eyebrow: "06 / Light & Scene",
    title: "Choose Lighting And Background",
    summary:
      "Lighting and background decide whether the image feels trustworthy, warm, executive, or creative.",
    points: [
      {
        label: "Studio light",
        text: "Soft directional light, bright even front light, or overhead spotlighting create different professional moods.",
      },
      {
        label: "Natural light",
        text: "Use natural soft lighting or seasonal atmosphere when the portrait should feel approachable.",
      },
      {
        label: "Background",
        text: "Use off-white gradients, near-black neutral gray, clean white, navy, or charcoal depending on the industry.",
      },
    ],
    takeaway:
      "Best use: tuning portraits for finance, law, leadership, creative, or official ID contexts.",
  },
  {
    id: "negative",
    eyebrow: "07 / Guardrails",
    title: "Finish With Negative Prompts",
    summary:
      "Negative prompts tell the model what to avoid and are essential for realistic professional photography.",
    points: [
      {
        label: "Common artifacts",
        text: "Exclude extra fingers, warped faces, AI artifacts, blurry output, and low-quality rendering.",
      },
      {
        label: "Texture issues",
        text: "Avoid unnaturally smooth skin, plastic-looking surfaces, and stock-photo overprocessing.",
      },
      {
        label: "Object prevention",
        text: "If hands are visible, specify that no phones or handheld devices should appear.",
      },
    ],
    takeaway:
      "Best use: improving final image quality after the positive prompt has defined the shot.",
  },
];

export function PromptGuidePage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const progressText = useMemo(
    () => `${activeIndex + 1} of ${slides.length}`,
    [activeIndex],
  );

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(Math.min(Math.max(index, 0), slides.length - 1));
  }, []);

  const goToPrevious = useCallback(() => {
    setActiveIndex((current) => Math.max(current - 1, 0));
  }, []);

  const goToNext = useCallback(() => {
    setActiveIndex((current) => Math.min(current + 1, slides.length - 1));
  }, []);

  return (
    <section className={styles.page} aria-labelledby="prompt-guide-title">
      <aside className={styles.outline} aria-label="Prompt guide outline">
        <p className={styles.outlineEyebrow}>Guide Outline</p>
        <nav className={styles.nav}>
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              className={styles.navButton}
              type="button"
              data-active={index === activeIndex}
              onClick={() => goToSlide(index)}
            >
              <span>{slide.eyebrow}</span>
              {slide.title}
            </button>
          ))}
        </nav>
      </aside>

      <div className={styles.deck}>
        <div className={styles.deckHeader}>
          <div>
            <p className={styles.eyebrow}>Prompt Writing Guide</p>
            <h2 id="prompt-guide-title">AI Portrait & Photography Slides</h2>
          </div>
          <span className={styles.progress}>{progressText}</span>
        </div>

        <div className={styles.viewport} aria-live="polite">
          <div
            className={styles.track}
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {slides.map((slide) => (
              <article className={styles.slide} key={slide.id}>
                <p className={styles.slideEyebrow}>{slide.eyebrow}</p>
                <h3>{slide.title}</h3>
                <p className={styles.summary}>{slide.summary}</p>

                {slide.formula && (
                  <div className={styles.formula}>
                    <span>Formula</span>
                    <strong>{slide.formula}</strong>
                  </div>
                )}

                <div className={styles.points}>
                  {slide.points.map((point) => (
                    <div className={styles.point} key={point.label}>
                      <span>{point.label}</span>
                      <p>{point.text}</p>
                    </div>
                  ))}
                </div>

                <div className={styles.takeaway}>
                  <span>Takeaway</span>
                  <p>{slide.takeaway}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.controls}>
          <button
            className={styles.secondaryButton}
            type="button"
            onClick={goToPrevious}
            disabled={activeIndex === 0}
          >
            Previous
          </button>
          <div className={styles.dots} aria-label="Slide position">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                className={styles.dot}
                type="button"
                data-active={index === activeIndex}
                onClick={() => goToSlide(index)}
              >
                <span className="sr-only">{slide.title}</span>
              </button>
            ))}
          </div>
          <button
            className={styles.primaryButton}
            type="button"
            onClick={goToNext}
            disabled={activeIndex === slides.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
