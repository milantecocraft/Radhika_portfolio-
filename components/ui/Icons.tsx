/** Lightweight inline SVG icons — no icon-library dependency. */

type IconProps = { className?: string };

const base = "h-full w-full";

export function SearchIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={`${base} ${className}`} aria-hidden>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.2-3.2" strokeLinecap="round" />
    </svg>
  );
}

export function WireframeIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={`${base} ${className}`} aria-hidden>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M9 9v11" strokeLinecap="round" />
    </svg>
  );
}

export function DesignIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={`${base} ${className}`} aria-hidden>
      <path d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3Z" strokeLinejoin="round" />
      <path d="M12 12 4 7.5M12 12l8-4.5M12 12v9" />
    </svg>
  );
}

export function PrototypeIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={`${base} ${className}`} aria-hidden>
      <circle cx="6" cy="6" r="2.4" />
      <circle cx="18" cy="18" r="2.4" />
      <path d="M8.2 6.6h6.3a3.5 3.5 0 0 1 0 7H9.5a3.5 3.5 0 0 0 0 7h.3" strokeLinecap="round" />
    </svg>
  );
}

export function TestIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={`${base} ${className}`} aria-hidden>
      <path d="M5 12.5 10 17l9-10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const processIcons = {
  search: SearchIcon,
  wireframe: WireframeIcon,
  design: DesignIcon,
  prototype: PrototypeIcon,
  test: TestIcon,
} as const;

export function ArrowIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ExternalIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className} aria-hidden>
      <path d="M8 7h9v9M17 7 7 17" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CloseIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden>
      <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
    </svg>
  );
}

export function QuoteIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M9.5 6C6.46 7.2 5 9.5 5 12.9V18h5.2v-5.2H7.7c0-2 .9-3.4 2.8-4.2L9.5 6Zm9 0c-3.04 1.2-4.5 3.5-4.5 6.9V18h5.2v-5.2h-2.5c0-2 .9-3.4 2.8-4.2L18.5 6Z" />
    </svg>
  );
}

export function LinkedInIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.4 8.65 22 10.6 22 14v7h-4v-6.2c0-1.48-.03-3.4-2.07-3.4-2.07 0-2.39 1.62-2.39 3.3V21H9V9Z" />
    </svg>
  );
}

export function BehanceIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M8.2 11.3c.86-.43 1.3-1.07 1.3-2.06 0-1.96-1.46-2.74-3.2-2.74H1v11h5.5c1.86 0 3.6-.9 3.6-3 0-1.3-.6-2.36-1.9-2.7ZM3.5 8.5h2.3c.74 0 1.3.33 1.3 1.13 0 .86-.5 1.2-1.32 1.2H3.5V8.5Zm2.6 6.9H3.5v-2.7h2.66c.9 0 1.46.38 1.46 1.33 0 .96-.66 1.37-1.52 1.37ZM23 13.4c0-2.4-1.4-4.4-3.94-4.4-2.46 0-4.18 1.85-4.18 4.28 0 2.5 1.63 4.24 4.18 4.24 1.93 0 3.18-.87 3.78-2.72h-2.1c-.21.6-.86.92-1.55.92-1.03 0-1.78-.6-1.86-1.7H23v-.62ZM15.4 8h4.7v1.2h-4.7V8Zm-.06 4.16c.14-1 .8-1.6 1.7-1.6.96 0 1.55.62 1.6 1.6h-3.3Z" />
    </svg>
  );
}

export function DribbbleIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M5 8.5c4 .5 9 .2 12.5-2M3.5 13c5-1.2 10 .4 12.6 5M9 3.5c3.4 4 5.4 9 5.8 16" />
    </svg>
  );
}

export function MailIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
