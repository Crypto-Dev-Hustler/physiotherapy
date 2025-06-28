import mongoose, { Schema, Document } from 'mongoose';

// Define the interface for the Appointment document
export interface IAppointment extends Document {
    _id: string;
    name: string;
    age: number;
    phone: string;
    gender:string;
    // status:string;
    date: Date;
    time: string;
}

// Define the schema for the Appointment
const AppointmentSchema: Schema = new Schema({
    age: { type: Number, required: true },
    name: { type: String, required: true },
    gender: { type: String, required: true },
    // status: { type: String, required: true },
    phone: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
});

// Create and export the Appointment model
const Appointment = mongoose.models?.Appointment || mongoose.model<IAppointment>('Appointment', AppointmentSchema);
export default Appointment;