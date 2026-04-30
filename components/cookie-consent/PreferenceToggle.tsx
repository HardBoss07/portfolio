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
    <div className="flex items-start justify-between gap-4">
      <div className="flex-1">
        <h3 className="text-lg font-bold">{label}</h3>
        <p className="text-sm opacity-80">{description}</p>
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
          className={`w-11 h-6 rounded-full transition-all 
          ${checked ? "bg-[#F207A8]" : "bg-gray-600"}
          peer-checked:after:translate-x-full 
          after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
          after:bg-black after:rounded-full after:h-5 after:w-5 after:transition-all`}
        ></div>
      </label>
    </div>
  );
}
