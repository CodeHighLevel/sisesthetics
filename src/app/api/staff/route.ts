import { NextRequest, NextResponse } from 'next/server';
import { getAllStaff, createStaff } from '@/lib/db';

export async function GET() {
  const staff = await getAllStaff();
  return NextResponse.json({ staff });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, role, bio, specialties, initials, serviceIds } = body;

  if (!name || !role) {
    return NextResponse.json({ error: 'Name and role are required' }, { status: 400 });
  }

  const member = await createStaff({
    name,
    role,
    bio: bio || '',
    specialties: specialties || [],
    initials: initials || name.split(' ').map((n: string) => n[0]).join('').toUpperCase(),
    serviceIds: serviceIds || [],
  });

  return NextResponse.json({ success: true, member }, { status: 201 });
}
