import { NextRequest, NextResponse } from 'next/server';
import { createSubscriber, getAllSubscribers, deleteSubscriber } from '@/lib/db';

export async function GET() {
  const subscribers = await getAllSubscribers();
  return NextResponse.json({ subscribers });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email } = body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
  }

  try {
    const subscriber = await createSubscriber(email);
    return NextResponse.json({ success: true, subscriber }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Already subscribed' }, { status: 409 });
  }
}

export async function DELETE(req: NextRequest) {
  const body = await req.json();
  const { email } = body;

  const removed = await deleteSubscriber(email);
  if (!removed) {
    return NextResponse.json({ error: 'Subscriber not found' }, { status: 404 });
  }

  return NextResponse.json({ success: true });
}
