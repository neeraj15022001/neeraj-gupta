export const WHATSAPP_NUMBER = '918847624755';
export const CONTACT_EMAIL = 'gneeraj32595@gmail.com';

function requiredMessage(value) {
  const message = String(value ?? '').trim();
  if (!message) throw new Error('Message is required.');
  return message;
}

export function buildWhatsAppUrl(message) {
  const text = requiredMessage(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function buildMailtoUrl(subject, message) {
  const body = requiredMessage(message);
  const cleanSubject = String(subject ?? '').trim();
  const query = [];
  if (cleanSubject) query.push(`subject=${encodeURIComponent(cleanSubject)}`);
  query.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${CONTACT_EMAIL}?${query.join('&')}`;
}
