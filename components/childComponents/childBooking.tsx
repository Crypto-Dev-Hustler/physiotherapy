"use client";

import { useState } from "react";

export function ChildBook() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    date: "",
    time: "",
    phone: "",
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setSubmitSuccess(true);
      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  if (submitSuccess) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md mx-auto">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
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
      id="childbooking"
      className="flex flex-col lg:flex-row w-full h-full lg:h-dvh bg-white pb-10 lg:pb-0"
    >
      <div className="w-full flex items-center justify-center h-full lg:h-dvh">
        <div className="bg-gray-900 shadow-black shadow-2xl rounded-lg w-5/6 mt-8 lg:mt-0 lg:w-1/3 lg:h-5/6 text-white">
          <div className="text-3xl font-medium pt-8 pl-8">
            Book an Appointment!
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col pl-8 p-6">
            <label className="mt-6">Full Name</label>
            <input
              name="name"
              placeholder="Your Name"
              className="border border-gray-400 rounded-sm h-8 mr-4 p-4"
              value={form.name}
              onChange={handleChange}
              required
            />

            <label className="mt-6">Phone no.</label>
            <input
              name="phone"
              placeholder="Your Phone"
              className="border border-gray-400 rounded-sm h-8 mr-4 p-4"
              value={form.phone}
              onChange={handleChange}
              required
            />

            <label className="mt-6">Age</label>
            <input
              name="age"
              placeholder="Your Age"
              className="border border-gray-400 rounded-sm h-8 mr-4 p-4"
              value={form.age}
              onChange={handleChange}
              required
            />

            <label className="mt-6">Date</label>
            <input
              type="date"
              name="date"
              className="border border-gray-400 rounded-sm h-8 mr-4 p-4"
              value={form.date}
              onChange={handleChange}
              required
            />

            <label className="mt-6">Time</label>
            <input
              type="time"
              name="time"
              className="border border-gray-400 rounded-sm h-8 mr-4 p-4"
              value={form.time}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className="rounded-sm h-8 mr-4 w-24 bg-blue-600 hover:bg-blue-700 mt-4 mb-8 lg:mb-0"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
