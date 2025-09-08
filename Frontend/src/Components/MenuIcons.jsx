import React from "react";

/* ===== Menu & Close Icons ===== */

export const MenuIcon = ({ className = "w-7 h-7" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 6h18"></path>
    <path d="M3 12h18"></path>
    <path d="M3 18h18"></path>
  </svg>
);

export const CloseIcon = ({ className = "w-7 h-7" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 6L6 18"></path>
    <path d="M6 6l12 12"></path>
  </svg>
);

/* ===== Social & Platform Icons ===== */

export const TelegramIcon = ({ className = "w-7 h-7" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="Telegram"
    role="img"
  >
    <path d="M22 2L11 13" />
    <path d="M22 2l-7 20-4-9-9-4 20-7z" />
  </svg>
);

export const YouTubeIcon = ({ className = "w-7 h-7" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-label="YouTube"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M23.5 6.2s-.2-1.6-.9-2.3c-.8-.9-1.6-.9-2-1C16.9 2.5 12 2.5 12 2.5h0s-4.9 0-8.6.4c-.5.1-1.2.1-2 1-.7.7-.9 2.3-.9 2.3S0 8.1 0 10v1.9c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.8.9 1.9.8 2.4.9 1.8.2 7.5.4 7.5.4s4.9 0 8.6-.4c.5-.1 1.2-.1 2-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8V10c0-1.9-.2-3.8-.2-3.8zM9.5 14.3V7.7l6.2 3.3-6.2 3.3z"/>
  </svg>
);

/* ===== WhatsApp ===== */
export const WhatsAppIcon = ({ className = "w-7 h-7" }) => (
  <svg
    className={className}
    viewBox="0 0 32 32"
    fill="currentColor"
    aria-label="WhatsApp"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16 .6C7.5.6.6 7.5.6 16c0 2.8.7 5.5 2.1 7.9L0 32l8.4-2.2c2.3 1.3 5 2 7.6 2 8.5 0 15.4-6.9 15.4-15.4S24.5.6 16 .6zm0 28c-2.4 0-4.7-.6-6.8-1.8l-.5-.3-5 1.3 1.3-4.9-.3-.5c-1.2-2.1-1.9-4.5-1.9-6.9 0-7.5 6.1-13.6 13.6-13.6 3.6 0 7 1.4 9.6 3.9 2.6 2.6 3.9 6 3.9 9.6 0 7.5-6.1 13.6-13.6 13.6zm7.5-10.3c-.4-.2-2.3-1.1-2.6-1.2-.3-.1-.6-.2-.9.2-.3.4-1 1.2-1.2 1.5-.2.2-.4.3-.8.1-.4-.2-1.7-.6-3.3-2-.6-.5-1.1-1.2-1.2-1.5-.3-.5 0-.7.2-1 .2-.2.4-.4.5-.6.2-.2.3-.3.4-.5.1-.2 0-.4 0-.6 0-.2-.9-2.2-1.2-3-.3-.7-.6-.6-.9-.6h-.7c-.2 0-.6.1-1 .4-.3.4-1.3 1.3-1.3 3.1s1.3 3.6 1.5 3.8c.2.2 2.6 4 6.3 5.5.9.4 1.6.6 2.1.8.9.3 1.7.3 2.3.2.7-.1 2.3-.9 2.6-1.8.3-1 .3-1.7.2-1.8-.1-.2-.3-.3-.7-.5z"/>
  </svg>
);

export const InstagramIcon = ({ className = "w-7 h-7" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="Instagram"
    role="img"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="3.2" />
    <circle cx="17.5" cy="6.5" r="0.5" />
  </svg>
);

export const MailIcon = ({ className = "w-7 h-7" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="Email"
    role="img"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 6l-10 7L2 6" />
  </svg>
);

export const GitHubIcon = ({ className = "w-7 h-7" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-label="GitHub"
    role="img"
  >
    {/* Common Octocat silhouette path (compact) */}
    <path d="M12 .5C5.4.5.5 5.4.5 12c0 4.6 3 8.5 7.1 9.9.5.1.7-.2.7-.5v-1.9c-2.9.6-3.5-1.4-3.5-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.3-3.2-.1-.3-.6-1.6.1-3.3 0 0 1-.3 3.3 1.2.9-.3 1.9-.5 2.8-.5s1.9.2 2.8.5c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.3 3 .1 3.3.8.9 1.3 1.9 1.3 3.2 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2v3c0 .3.2.6.7.5C20.5 20.5 24 16.6 24 12 24 5.4 18.6.5 12 .5z" />
  </svg>
);

/* GeeksforGeeks: stylized "G" mark. This is an abstract/simple G-mark to represent GfG. */
export const GeeksforGeeksIcon = ({ className = "w-7 h-7" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="GeeksforGeeks"
    role="img"
  >
    {/* hexagon / diamond-ish background */}
    <path d="M12 2l6 4v8l-6 8-6-8V6z" />
    {/* stylized G inside */}
    <path d="M10.5 9.5h2a2 2 0 1 1 0 4h-2" strokeLinecap="round" />
  </svg>
);

/* LeetCode: simple </> + dot mark to represent the brand concept */
export const LeetCodeIcon = ({ className = "w-7 h-7" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="LeetCode"
    role="img"
  >
    <path d="M8 7L4 11l4 4" />
    <path d="M16 7l4 4-4 4" />
    <circle cx="12" cy="12" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);
