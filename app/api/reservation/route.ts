import { NextResponse } from 'next/server';

type ReservationBody = {
  name?: string;
  phone?: string;
  date?: string;
  time?: string;
  guests?: string;
  message?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as ReservationBody;
  const requiredFields: Array<keyof ReservationBody> = ['name', 'phone', 'date', 'time', 'guests'];
  const missingField = requiredFields.find((field) => !body[field]);

  if (missingField) {
    return NextResponse.json({ ok: false, message: `${missingField} is required` }, { status: 400 });
  }

  const guests = Number(body.guests);
  const phone = body.phone?.trim() ?? '';
  const date = body.date ?? '';
  const reservationDate = new Date(`${date}T${body.time}`);

  if (!Number.isInteger(guests) || guests < 1 || guests > 20) {
    return NextResponse.json({ ok: false, message: 'Guests must be between 1 and 20' }, { status: 400 });
  }

  if (!/^[+0-9\s-]{7,18}$/.test(phone)) {
    return NextResponse.json({ ok: false, message: 'Please enter a valid phone number' }, { status: 400 });
  }

  if (Number.isNaN(reservationDate.getTime())) {
    return NextResponse.json({ ok: false, message: 'Please enter a valid date and time' }, { status: 400 });
  }

  const reservation = {
    name: body.name?.trim(),
    phone,
    date,
    time: body.time,
    guests,
    message: body.message?.trim() ?? ''
  };

  // Replace this with EmailJS, Firebase, Google Sheets or database persistence for production.
  console.log('New Cafe Dungaa reservation request:', reservation);

  return NextResponse.json({
    ok: true,
    message: 'Reservation request received',
    reservation
  });
}
