export default function Pomegranate() {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true">
      <defs>
        <radialGradient id="pg" cx=".35" cy=".35" r=".8">
          <stop offset="0" stopColor="#e0404c" />
          <stop offset=".6" stopColor="#a3192a" />
          <stop offset="1" stopColor="#5c0b16" />
        </radialGradient>
      </defs>
      <path d="M38 14l6 10 6-12 6 12 6-10-3 18H41z" fill="#c9762a" />
      <circle cx="50" cy="60" r="36" fill="url(#pg)" />
      <circle cx="38" cy="48" r="7" fill="#fff" fillOpacity=".18" />
    </svg>
  );
}
