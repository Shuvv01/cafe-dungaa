import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '9779841000000';
  const message = encodeURIComponent('Namaste Cafe Dungaa, I want to ask about your menu/reservation.');

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Message Cafe Dungaa on WhatsApp"
      className="fixed bottom-5 right-5 z-50 rounded-full bg-green-500 p-4 text-white shadow-2xl transition hover:-translate-y-1 hover:scale-105"
    >
      <MessageCircle size={30} />
    </a>
  );
}
