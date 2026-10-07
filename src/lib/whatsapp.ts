export const WHATSAPP_INITIAL_MESSAGE =
  "Olá! Conheci o Escritório DOMO pelo site e gostaria de agendar uma visita para conhecer os espaços disponíveis.";

function normalizeWhatsAppNumber(value: string | undefined) {
  return value?.replace(/\D/g, "") ?? "";
}

export function getWhatsAppUrl(message = WHATSAPP_INITIAL_MESSAGE) {
  const number = normalizeWhatsAppNumber(
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
  );

  if (!number) {
    return null;
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
