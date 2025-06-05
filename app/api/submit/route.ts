import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';

export async function POST(request: Request) {
  try {
    console.log('Received POST request to /api/submit');

    const db = await connectToDatabase();
    console.log('Connected to database successfully');

    const data = await request.json();

    // Validate required fields
    if (!data.name || !data.age || !data.date || !data.time || !data.phone) {
      return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
    }

    // Regex: check if age is a number and phone is a 10-digit number
    const agePattern = /^\d+$/;
    const phonePattern = /^[6-9]\d{9}$/; // Starts with 6-9, total 10 digits

    if (!agePattern.test(data.age)) {
      return NextResponse.json({ message: 'Age must be a valid number' }, { status: 400 });
    }

    if (!phonePattern.test(data.phone)) {
      return NextResponse.json({ message: 'Phone must be a valid 10-digit number' }, { status: 400 });
    }

    await db.collection('appointments').insertOne({
      ...data,
      age: Number(data.age),
      createdAt: new Date(),
    });

    return NextResponse.json({ message: 'Appointment booked' }, { status: 200 });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
