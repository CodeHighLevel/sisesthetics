import { NextRequest, NextResponse } from 'next/server';
import { createBooking, getAllBookings } from '@/lib/db';

export async function GET() {
  const bookings = await getAllBookings();
  return NextResponse.json({ bookings });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { service, stylist, date, time, name, phone } = body;

  if (!service || !stylist || !date || !time || !name || !phone) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  const booking = await createBooking({ service, stylist, date, time, name, phone });
  return NextResponse.json({ success: true, booking }, { status: 201 });
}
