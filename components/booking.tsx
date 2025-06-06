"use client";

import { useState } from "react";
// import "react-time-picker/dist/TimePicker.css";
import TimePicker from "@/components/TimePickerWrapper";

export function Book() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    date: "",
    time: "00:00", // store 24-hour time string here (e.g. "14:00")
    phone: "",
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Format 24-hour time string (HH:mm) to 12-hour with AM/PM for display
  const formatTimeTo12Hour = (time24: string) => {
    if (!time24) return "";
    const [hourStr, minute] = time24.split(":");
    let hour = parseInt(hourStr, 10);
    const ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12; // convert 0 -> 12
    return `${hour}:${minute} ${ampm}`;
  };

  // Handle time change from TimePicker (24-hour string or null)
  const handleTimeChange = (newTime: string | null) => {
    setForm((prev) => ({ ...prev, time: newTime || "" }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const payload = { ...form, age: Number(form.age) };

      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmitSuccess(true);
        setTimeout(() => {
          window.location.href = "/";
        }, 3000);
      } else {
        const errorData = await res.json();
        setErrorMessage(
          errorData.message || "Failed to submit appointment. Please try again."
        );
      }
    } catch (error) {
      setErrorMessage("An error occurred while submitting. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (submitSuccess) {
    return (
      <div
        className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md mx-auto"
        aria-live="polite"
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
            Appointment Booked!
          </h3>
          <p className="text-gray-600 mb-6">
            Thank you for scheduling your appointment. We will reach out to you.
          </p>
          <p className="text-sm text-gray-500">Redirecting to home page...</p>
        </div>
      </div>
    );
  }

  return (
    <section
      id="booking"
      className="flex flex-col lg:flex-row w-full h-full lg:h-screen bg-white pb-10 lg:pb-0"
    >
      <div className="w-full lg:w-full flex items-center justify-center h-full lg:h-screen">
        <div className="bg-gray-900 shadow-black shadow-2xl rounded-lg w-5/6 mt-8 lg:mt-0 lg:w-1/3 lg:h-5/6 text-white">
          <div className="text-3xl font-medium pt-8 pl-8">
            Book an Appointment!
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col pl-8 p-6"
            noValidate
          >
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}

            <label htmlFor="name" className="mt-6">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              className="border border-gray-400 rounded-sm h-8 mr-4 p-4"
              value={form.name}
              onChange={handleChange}
              required
              autoComplete="name"
            />

            <label htmlFor="phone" className="mt-6">
              Phone no.
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="12345 67890"
              className="border border-gray-400 rounded-sm h-8 mr-4 p-4"
              value={form.phone}
              onChange={handleChange}
              required
              autoComplete="tel"
            />

            <label htmlFor="age" className="mt-6">
              Age
            </label>
            <input
              id="age"
              name="age"
              type="number"
              min={1}
              placeholder="Enter your age"
              className="border border-gray-400 rounded-sm h-8 mr-4 p-4"
              value={form.age}
              onChange={handleChange}
              required
            />

            <label htmlFor="date" className="mt-6">
              Date
            </label>
            <input
              id="date"
              name="date"
              type="date"
              className="border border-gray-400 rounded-sm h-8 mr-4 p-4"
              value={form.date}
              onChange={handleChange}
              required
              autoComplete="off"
            />

            <label htmlFor="time" className="mt-6">
              Time
            </label>
            <TimePicker
              id="time"
              name="time"
              onChange={handleTimeChange}
              value={form.time || null}
              disableClock={false}
              className="mb-4"
              clearIcon={null}
            />
            {/* Optional display of formatted 12-hour time */}
            {form.time && (
              <p className="text-gray-300 text-sm mt-1">
                Selected Time: {formatTimeTo12Hour(form.time)}
              </p>
            )}

            <button
              type="submit"
              className={`rounded-sm h-8 mr-4 w-20 bg-blue-600 hover:bg-blue-700 mt-4 mb-8 lg:mb-0 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
