import type { ReactNode } from "react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type WhatsAppLinkProps = {
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
};

const baseClassName =
  "inline-flex min-h-11 items-center rounded-subtle bg-accent px-6 py-3 text-center text-xs font-medium uppercase tracking-[0.12em] text-ink transition-colors hover:bg-surface";

export default function WhatsAppLink({
  children,
  className = "",
  ariaLabel,
}: WhatsAppLinkProps) {
  const href = getWhatsAppUrl();
  const classes = `${baseClassName} ${className}`.trim();

  if (!href) {
    return (
      <span
        className={`${classes} cursor-not-allowed opacity-60`}
        aria-disabled="true"
        title="Configure NEXT_PUBLIC_WHATSAPP_NUMBER"
      >
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      className={`${classes} interactive-control`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
