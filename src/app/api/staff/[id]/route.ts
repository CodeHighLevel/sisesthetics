import { NextRequest, NextResponse } from 'next/server';
import { updateStaff, deleteStaff } from '@/lib/db';

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await req.json();
  const member = await updateStaff(id, body);

  if (!member) {
    return NextResponse.json({ error: 'Staff not found' }, { status: 404 });
  }

  return NextResponse.json({ success: true, member });
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const removed = await deleteStaff(id);

  if (!removed) {
    return NextResponse.json({ error: 'Staff not found' }, { status: 404 });
  }

  return NextResponse.json({ success: true });
}
