import styles from "./RangeSlider.module.css";

interface RangeSliderProps {
  label: string;
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
}

export function RangeSlider({
  label,
  value,
  min = 1,
  max = 10,
  onChange,
}: RangeSliderProps) {
  return (
    <label className={styles.rangeField}>
      <span className={styles.label}>{label}</span>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className={styles.range}
      />
      <output className={styles.output}>{value}</output>
    </label>
  );
}
