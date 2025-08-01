/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import type React from "react";
type AppointmentDetails = {
  id: string;
  name: string;
  phone: string;
  age: number;
  gender: "male" | "female" | "other";
  date: string;
  time: string;
  status: string;
};

import { useState, useEffect, useRef } from "react";
import {
  // ChevronLeft,
  // ChevronRight,
  CheckCircle,
  AlertCircle,
  Loader2,
  // Check,
  // X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useMobileTouch } from "./hooks/use-mobile-touch";
import "./styles/mobile-calendar.css";

export default function Book() {
  const [today, setToday] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<{
    day: number;
    month: number;
    year: number;
  } | null>(null);
  const [selectedTime, setSelectedTime] = useState("10:00 am");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);
  const [appointmentDetails, setAppointmentDetails] =
    useState<AppointmentDetails | null>(null);
  const { isMobile } = useMobileTouch();
  const scrollRefForToday = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Validation states
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [nameValid, setNameValid] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);
  const [ageValid, setAgeValid] = useState(false);

  // Real-time date update
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      if (
        now.getDate() !== today.getDate() ||
        now.getMonth() !== today.getMonth() ||
        now.getFullYear() !== today.getFullYear()
      ) {
        setToday(now);
      }
    }, 60000);

    return () => clearInterval(interval);
  }, [today]);

  // Validators
  const validateName = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) {
      setNameError("Name is required");
      setNameValid(false);
      return false;
    }
    if (trimmed.length < 2) {
      setNameError("Name must be at least 2 characters");
      setNameValid(false);
      return false;
    }
    const regex = /^[a-zA-Z\s\-'.]+$/;
    if (!regex.test(trimmed)) {
      setNameError("Invalid characters in name");
      setNameValid(false);
      return false;
    }
    setNameError("");
    setNameValid(true);
    return true;
  };

  const validatePhone = (value: string) => {
    const digits = value.trim().replace(/\D/g, "");
    if (digits.length !== 10) {
      setPhoneError("Phone number must be exactly 10 digits");
      setPhoneValid(false);
      return false;
    }
    const regex = /^[6-9]\d{9}$/;
    if (!regex.test(digits)) {
      setPhoneError("Phone must start with 6,7,8,9");
      setPhoneValid(false);
      return false;
    }
    setPhoneError("");
    setPhoneValid(true);
    return true;
  };

  const validateAge = (value: string) => {
    const num = parseInt(value, 10);
    if (isNaN(num) || num < 1 || num > 120) {
      setAgeError("Age must be between 1 and 120");
      setAgeValid(false);
      return false;
    }
    setAgeError("");
    setAgeValid(true);
    return true;
  };

  // Inputs
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    validateName(e.target.value);
  };
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
    setPhone(digits);
    validatePhone(digits);
  };
  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
    validateAge(e.target.value);
  };

  // Calendar logic
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const shortDayNames = ["S", "M", "T", "W", "T", "F", "S"];

  const generateContinuousHorizontalDates = () => {
    const dates = [];
    for (let i = 0; i < 90; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const isToday =
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear();

      dates.push({
        day: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear(),
        shortDayName: shortDayNames[date.getDay()],
        monthName: monthNames[date.getMonth()],
        isToday,
        isSelected:
          selectedDate &&
          selectedDate.day === date.getDate() &&
          selectedDate.month === date.getMonth() &&
          selectedDate.year === date.getFullYear(),
        isPastDate: date < today,
      });
    }
    return dates;
  };

  const continuousDates = generateContinuousHorizontalDates();

  const navigateMonth = (dir: "prev" | "next") => {
    if (dir === "next") {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    } else if (
      !(
        currentMonth === today.getMonth() && currentYear === today.getFullYear()
      )
    ) {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    }
    setSelectedDate(null);
  };

  const handleDateSelect = (date: any) => {
    if (date.isPastDate) return;
    if (isMobile && "vibrate" in navigator) navigator.vibrate(10);
    setSelectedDate({ day: date.day, month: date.month, year: date.year });
  };

  // Scroll to today
  useEffect(() => {
    if (!isMobile) return;
    const container = scrollRefForToday.current;
    if (!container) return;

    const id = setTimeout(() => {
      const el = container.querySelector(
        '[data-today="true"]'
      ) as HTMLElement | null;
      if (!el) return;

      // Scroll the HORIZONTAL container only; never the page.
      const targetLeft = Math.max(
        0,
        el.offsetLeft - (container.clientWidth - el.clientWidth) / 2
      );
      container.scrollTo({ left: targetLeft, behavior: "auto" }); // use "auto"/"instant" to avoid vertical jank
    }, 120);

    return () => clearTimeout(id);
  }, [isMobile]);

  // Appointment booking
  const handleBookAppointment = async () => {
    if (
      !validateName(name) ||
      !validatePhone(phone) ||
      !validateAge(age) ||
      !gender ||
      !selectedDate
    ) {
      setError("Please fill all fields correctly");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          age: parseInt(age),
          gender,
          date: `${monthNames[selectedDate.month]} ${selectedDate.day}, ${
            selectedDate.year
          }`,
          time: selectedTime,
        }),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Error booking");

      setAppointmentDetails(result.appointment);
      setShowThankYou(true);
    } catch (err: any) {
      setError(err.message || "Failed to book appointment");
    } finally {
      setIsLoading(false);
    }
  };

  // Reset form
  const resetForm = () => {
    setShowThankYou(false);
    setAppointmentDetails(null);
    setSelectedDate(null);
    setName("");
    setPhone("");
    setAge("");
    setGender("");
    setSelectedTime("10:00 am");
    setCurrentMonth(today.getMonth());
    setCurrentYear(today.getFullYear());
    setError(null);
  };

  const timeSlots = [
    "09:00 am",
    "10:00 am",
    "11:00 am",
    "12:00 pm",
    "01:00 pm",
    "02:00 pm",
    "03:00 pm",
    "04:00 pm",
    "05:00 pm",
  ];

  if (showThankYou) {
    return (
      <div className="min-h-[calc(var(--vh)*100)] bg-gray-50 p-2 sm:p-4 lg:p-6 flex items-center justify-center">
        <Card className="bg-white shadow-lg max-w-2xl mx-auto">
          <CardContent className="p-6 sm:p-8 lg:p-10 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-2">Thank You!</h1>
            <p className="text-gray-600 mb-6">
              Your appointment has been successfully booked.
            </p>
            <div className="text-left bg-gray-50 p-4 rounded-lg mb-6">
              <p>
                <strong>ID:</strong> {appointmentDetails?.id}
              </p>
              <p>
                <strong>Name:</strong> {appointmentDetails?.name}
              </p>
              <p>
                <strong>Phone:</strong> {appointmentDetails?.phone}
              </p>
              <p>
                <strong>Age:</strong> {appointmentDetails?.age}
              </p>
              <p>
                <strong>Gender:</strong> {appointmentDetails?.gender}
              </p>
              <p>
                <strong>Date:</strong> {appointmentDetails?.date}
              </p>
              <p>
                <strong>Time:</strong> {appointmentDetails?.time}
              </p>
              <p>
                <strong>Status:</strong> {appointmentDetails?.status}
              </p>
            </div>
            <div className="flex gap-4 justify-center">
              <Button onClick={resetForm} variant="outline">
                Book Another
              </Button>
              <Button
                onClick={() => window.print()}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Print Details
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <section id="booking">
      <div className="min-h-[calc(var(--vh)*100)] bg-gray-50 p-2 sm:p-4 lg:p-6">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-white shadow-lg">
            <CardContent className={isMobile ? "p-3" : "p-6"}>
              <h1 className="text-center text-xl font-semibold mb-6">
                Make an Appointment
              </h1>

              {error && (
                <div className="p-4 mb-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <p className="text-red-700">{error}</p>
                </div>
              )}

              {/* Calendar */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Mobile Horizontal Calendar */}
                <div>
                  <h3 className="text-sm font-medium mb-4">Select Date</h3>
                  {isMobile ? (
                    <div
                      ref={scrollRefForToday}
                      className="overflow-x-auto scrollbar-hide"
                    >
                      <div className="flex gap-3 pb-4">
                        {continuousDates.map((date, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleDateSelect(date)}
                            disabled={date.isPastDate}
                            data-today={date.isToday}
                            aria-label={`Select ${date.monthName} ${date.day}, ${date.year}`}
                            className={`w-16 h-20 rounded-lg border-2 flex flex-col items-center justify-center ${
                              date.isPastDate
                                ? "text-gray-300 bg-gray-50"
                                : date.isSelected
                                ? "bg-orange-500 text-white border-orange-500"
                                : date.isToday
                                ? "bg-blue-50 text-blue-600 border-blue-300"
                                : "text-gray-700 border-gray-200"
                            }`}
                          >
                            <span className="text-xs">{date.shortDayName}</span>
                            <span className="text-xl font-bold">
                              {date.day}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    /* Desktop calendar (kept as is for simplicity) */
                    <div className="text-gray-600">
                      Desktop calendar here...
                    </div>
                  )}
                </div>

                {/* Time + Form */}
                <div>
                  {/* Name */}
                  <label className="block mb-1">Full Name *</label>
                  <Input value={name} onChange={handleNameChange} />

                  <label className="block mt-4 mb-1">Phone *</label>
                  <Input value={phone} onChange={handlePhoneChange} />

                  <label className="block mt-4 mb-1">Age *</label>
                  <Input value={age} onChange={handleAgeChange} type="number" />

                  <label className="block mt-4 mb-1">Gender *</label>
                  <select
                    className="w-full border rounded-md p-2"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>

                  {/* Time */}
                  <h3 className="mt-6 mb-2">Select Time</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "outline"}
                        onClick={() => setSelectedTime(time)}
                        aria-label={`Select ${time}`}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Book Button */}

              <div className="mt-6 flex justify-center ">
                <Button
                  onClick={handleBookAppointment}
                  disabled={
                    !selectedDate ||
                    !nameValid ||
                    !phoneValid ||
                    !ageValid ||
                    !gender ||
                    isLoading
                  }
                  className={`bg-white/50 hover:bg-white/70 text-[#80b342] border  border-[#81b342]/50 backdrop-blur-sm
              px-8 py-3 rounded-full text-lg font-medium transition-all duration-700 hover:scale-105 `}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Booking...
                    </>
                  ) : (
                    "Get Appointment"
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
