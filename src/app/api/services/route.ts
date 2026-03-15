import { NextRequest, NextResponse } from 'next/server';
import { getAllServices, createService } from '@/lib/db';

export async function GET() {
  const services = await getAllServices();
  return NextResponse.json({ services });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, description, price, duration, category, image } = body;

  if (!name || !price || !duration || !category) {
    return NextResponse.json({ error: 'Name, price, duration, and category are required' }, { status: 400 });
  }

  const service = await createService({
    name,
    description: description || '',
    price,
    duration,
    category,
    image: image || '',
  });

  return NextResponse.json({ success: true, service }, { status: 201 });
}
