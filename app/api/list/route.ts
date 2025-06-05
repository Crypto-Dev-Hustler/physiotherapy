// import { connectToDatabase } from '@/lib/mongodb';
// import { NextResponse } from 'next/server';

// export async function GET() {
//   const db = await connectToDatabase();
//   const forms = await db.collection('appointments').find().toArray();
//   return NextResponse.json(forms);
// }

import { connectToDatabase } from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const db = await connectToDatabase();
    const forms = await db.collection('appointments').find().toArray();

    return NextResponse.json(forms, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch appointments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch appointments' },
      { status: 500 }
    );
  }
}
