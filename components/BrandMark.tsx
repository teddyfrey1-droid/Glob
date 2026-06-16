export default function BrandMark({
  className = "",
}: {
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="13" cy="13" r="12" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M2 13h22M5 7.5h16M5 18.5h16"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <circle cx="13" cy="13" r="3" fill="#FF6B5B" />
      </svg>
      <span className="font-display text-lg font-bold tracking-tight">
        Latitude
      </span>
    </span>
  );
}
