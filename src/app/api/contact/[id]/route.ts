import { NextRequest, NextResponse } from 'next/server';
import { markContactRead } from '@/lib/db';

export async function PATCH(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const msg = await markContactRead(id);

  if (!msg) {
    return NextResponse.json({ error: 'Message not found' }, { status: 404 });
  }

  return NextResponse.json({ success: true, message: msg });
}
