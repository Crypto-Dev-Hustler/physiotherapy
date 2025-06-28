import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const { name, phone, gender, date, time } = body

    if (!name || !phone || !gender || !date || !time) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Simulate database insertion
    // In a real application, you would save to your database here
    const appointmentData = {
      id: Math.random().toString(36).substr(2, 9), // Generate random ID
      name: name.trim(),
      phone: phone.trim(),
      gender,
      date,
      time,
      status: "confirmed",
      createdAt: new Date().toISOString(),
    }

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Log the appointment (in real app, this would be saved to database)
    console.log("New appointment created:", appointmentData)

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Appointment booked successfully",
      appointment: appointmentData,
    })
  } catch (error) {
    console.error("Error creating appointment:", error)
    return NextResponse.json({ error: "Failed to book appointment. Please try again." }, { status: 500 })
  }
}
