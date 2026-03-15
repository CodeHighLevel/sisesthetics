import { NextRequest, NextResponse } from 'next/server';
import { getWorkingHours, updateWorkingHoursEntry } from '@/lib/db';

export async function GET() {
  const hours = await getWorkingHours();
  return NextResponse.json({ hours });
}

export async function PATCH(req: NextRequest) {
  const body = await req.json();
  const { id, open, close, closed } = body;

  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 });
  }

  const entry = await updateWorkingHoursEntry(id, { open, close, closed });

  if (!entry) {
    return NextResponse.json({ error: 'Entry not found' }, { status: 404 });
  }

  return NextResponse.json({ success: true, entry });
}
