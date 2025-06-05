import mongoose, { Schema, Document } from 'mongoose';

// Define the interface for the Appointment document
export interface IAppointment extends Document {
    _id: string;
    name: string;
    age: number;
    phone: string;
    date: Date;
    time: string;
}

// Define the schema for the Appointment
const AppointmentSchema: Schema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    phone: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
});

// Create and export the Appointment model
const Appointment = mongoose.models?.Appointment || mongoose.model<IAppointment>('Appointment', AppointmentSchema);
export default Appointment;