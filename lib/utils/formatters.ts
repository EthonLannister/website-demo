/**
 * Formats a phone number for display.
 */
export function formatPhoneNumber(phone: string): string {
  if (!phone) return '';
  return phone.trim();
}

/**
 * Formats date string into human readable localized format.
 */
export function formatDate(dateString: string, locale: string = 'en'): string {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  } catch {
    return dateString;
  }
}

/**
 * Truncates text with an ellipsis if it exceeds maxLength.
 */
export function truncateText(text: string, maxLength: number): string {
  if (!text || text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}
