import { connectToDatabase } from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const db = await connectToDatabase();
    const forms = await db.collection('appointments').find().toArray();
    const cleanForms = forms.map(form => ({
  ...form,
  id: form._id.toString(), // Convert ObjectId to string
    }));
      return NextResponse.json({ success: true, data: cleanForms }, { status: 200 });
 } catch (error) {
    console.error('Failed to fetch appointments:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch appointments',
      },
      { status: 500 }
    );
  }
}
