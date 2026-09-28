/**
 * Conditionally joins class names together.
 * Lightweight alternative to clsx/tailwind-merge without extra external dependencies.
 */
export function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(' ');
}
