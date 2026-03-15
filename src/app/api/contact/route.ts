import { NextRequest, NextResponse } from 'next/server';
import { createContact, getAllContacts } from '@/lib/db';

export async function GET() {
  const messages = await getAllContacts();
  return NextResponse.json({ messages });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, phone, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 });
  }

  const msg = await createContact({ name, phone: phone || '', email, message });
  return NextResponse.json({ success: true, message: msg }, { status: 201 });
}
