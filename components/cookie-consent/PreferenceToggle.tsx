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
    <div className="flex items-start justify-between gap-4 border-b border-outline-variant/30 pb-4">
      <div className="flex-1">
        <h3 className="text-label-mono font-bold uppercase text-on-surface">
          {label}
        </h3>
        <p className="text-body-md text-text-secondary/70">{description}</p>
      </div>
      <label
        className={`relative inline-flex items-center ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
      >
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.checked)}
          className="sr-only peer"
        />
        <div
          className={`w-12 h-6 rounded-pill transition-all 
          ${checked ? "bg-primary" : "bg-outline-variant"}
          peer-checked:after:translate-x-full 
          after:content-[''] after:absolute after:top-[4px] after:left-[4px] 
          after:bg-on-surface after:rounded-full after:h-4 after:w-4 after:transition-all`}
        ></div>
      </label>
    </div>
  );
}
