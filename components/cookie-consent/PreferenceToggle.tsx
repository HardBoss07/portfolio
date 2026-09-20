type PreferenceToggleProps = {
  label: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
};

export function PreferenceToggle({
  label,
  description,
  checked,
  disabled,
  onChange,
}: PreferenceToggleProps) {
  return (
    <div className="border-outline-variant/30 flex items-start justify-between gap-4 border-b pb-4">
      <div className="flex-1">
        <h3 className="text-label-mono text-on-surface font-bold uppercase">{label}</h3>
        <p className="text-body-md text-text-secondary/70">{description}</p>
      </div>
      <label
        className={`relative inline-flex items-center ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
      >
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.checked)}
          className="peer sr-only"
        />
        <div
          className={`rounded-pill h-6 w-12 transition-all ${checked ? 'bg-primary' : 'bg-outline-variant'} after:bg-on-surface after:absolute after:top-[4px] after:left-[4px] after:h-4 after:w-4 after:rounded-full after:transition-all after:content-[''] peer-checked:after:translate-x-full`}
        ></div>
      </label>
    </div>
  );
}
