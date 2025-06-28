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

import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  AlertCircle,
  Loader2,
  Check,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function Book() {
  const [today, setToday] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState("10:00 am");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);
  // const [appointmentDetails, setAppointmentDetails] = useState<any>(null);
  // const [appointmentDetails, setAppointmentDetails] = useState<any>(null);
  const [appointmentDetails, setAppointmentDetails] =
    useState<AppointmentDetails | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Validation states
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [nameValid, setNameValid] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);
  const [ageValid, setAgeValid] = useState(false);

  // Real-time date update effect
  useEffect(() => {
    const updateDate = () => {
      const newToday = new Date();
      const currentToday = today;

      if (
        newToday.getDate() !== currentToday.getDate() ||
        newToday.getMonth() !== currentToday.getMonth() ||
        newToday.getFullYear() !== currentToday.getFullYear()
      ) {
        setToday(newToday);
        if (
          currentMonth === currentToday.getMonth() &&
          currentYear === currentToday.getFullYear() &&
          (newToday.getMonth() !== currentToday.getMonth() ||
            newToday.getFullYear() !== currentToday.getFullYear())
        ) {
          setCurrentMonth(newToday.getMonth());
          setCurrentYear(newToday.getFullYear());
          setSelectedDate(null);
        }
      }
    };

    const interval = setInterval(updateDate, 60000);
    updateDate();
    return () => clearInterval(interval);
  }, [today, currentMonth, currentYear]);

  // Name validation
  const validateName = (value: string) => {
    const trimmedValue = value.trim();

    if (!trimmedValue) {
      setNameError("Name is required");
      setNameValid(false);
      return false;
    }

    if (trimmedValue.length < 2) {
      setNameError("Name must be at least 2 characters");
      setNameValid(false);
      return false;
    }

    if (trimmedValue.length > 50) {
      setNameError("Name must be less than 50 characters");
      setNameValid(false);
      return false;
    }

    // Check for valid characters (letters, spaces, hyphens, apostrophes)
    const nameRegex = /^[a-zA-Z\s\-'.]+$/;
    if (!nameRegex.test(trimmedValue)) {
      setNameError(
        "Name can only contain letters, spaces, hyphens, and apostrophes"
      );
      setNameValid(false);
      return false;
    }

    // Check for at least one letter
    if (!/[a-zA-Z]/.test(trimmedValue)) {
      setNameError("Name must contain at least one letter");
      setNameValid(false);
      return false;
    }

    setNameError("");
    setNameValid(true);
    return true;
  };

  // Phone validation - Only 10 digits allowed
  const validatePhone = (value: string) => {
    const trimmedValue = value.trim();

    if (!trimmedValue) {
      setPhoneError("Phone number is required");
      setPhoneValid(false);
      return false;
    }

    // Remove all non-digit characters for validation
    const digitsOnly = trimmedValue.replace(/\D/g, "");

    if (digitsOnly.length === 0) {
      setPhoneError("Phone number must contain digits");
      setPhoneValid(false);
      return false;
    }

    if (digitsOnly.length < 10) {
      setPhoneError("Phone number must be exactly 10 digits");
      setPhoneValid(false);
      return false;
    }

    if (digitsOnly.length > 10) {
      setPhoneError("Phone number must be exactly 10 digits");
      setPhoneValid(false);
      return false;
    }

    // Check if it's exactly 10 digits
    if (digitsOnly.length !== 10) {
      setPhoneError("Phone number must be exactly 10 digits");
      setPhoneValid(false);
      return false;
    }

    // Check for valid 10-digit phone format
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(digitsOnly)) {
      setPhoneError("Phone number must start with 6, 7, 8, or 9");
      setPhoneValid(false);
      return false;
    }

    setPhoneError("");
    setPhoneValid(true);
    return true;
  };

  // Age validation
  const validateAge = (value: string) => {
    const trimmedValue = value.trim();

    if (!trimmedValue) {
      setAgeError("Age is required");
      setAgeValid(false);
      return false;
    }

    const ageNum = Number.parseInt(trimmedValue);

    if (isNaN(ageNum)) {
      setAgeError("Age must be a number");
      setAgeValid(false);
      return false;
    }

    if (ageNum < 1) {
      setAgeError("Age must be at least 1");
      setAgeValid(false);
      return false;
    }

    if (ageNum > 120) {
      setAgeError("Age must be less than 120");
      setAgeValid(false);
      return false;
    }

    setAgeError("");
    setAgeValid(true);
    return true;
  };

  // Handle input changes with validation
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    validateName(value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow digits and limit to 10 characters
    const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
    setPhone(digitsOnly);
    validatePhone(digitsOnly);
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAge(value);
    validateAge(value);
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

  const navigateMonth = (direction: "prev" | "next") => {
    if (direction === "next") {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    } else {
      const isCurrentMonth =
        currentMonth === today.getMonth() &&
        currentYear === today.getFullYear();
      if (!isCurrentMonth) {
        if (currentMonth === 0) {
          setCurrentMonth(11);
          setCurrentYear(currentYear - 1);
        } else {
          setCurrentMonth(currentMonth - 1);
        }
      }
    }
    setSelectedDate(null);
  };

  const generateCalendarDays = () => {
    const days = [];
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const isCurrentMonth =
      currentMonth === today.getMonth() && currentYear === today.getFullYear();
    const todayDate = today.getDate();

    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div key={`empty-${i}`} className="w-8 h-8 sm:w-10 sm:h-10"></div>
      );
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isPastDate = isCurrentMonth && day < todayDate;
      const isSelected = selectedDate === day;
      const isToday = isCurrentMonth && day === todayDate;

      days.push(
        <button
          key={day}
          onClick={() => !isPastDate && setSelectedDate(day)}
          disabled={isPastDate}
          className={`w-8 h-8 sm:w-10 sm:h-10 text-xs sm:text-sm rounded-md transition-colors ${
            isPastDate
              ? "text-gray-300 cursor-not-allowed"
              : isSelected
              ? "bg-blue-600 text-white"
              : isToday
              ? "bg-blue-100 text-blue-600 font-semibold hover:bg-blue-200"
              : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          }`}
        >
          {day}
        </button>
      );
    }

    return days;
  };

  const canGoBack = () => {
    return !(
      currentMonth === today.getMonth() && currentYear === today.getFullYear()
    );
  };

  const handleBookAppointment = async () => {
    // Validate all fields
    const isNameValid = validateName(name);
    const isPhoneValid = validatePhone(phone);
    const isAgeValid = validateAge(age);

    if (
      !isNameValid ||
      !isPhoneValid ||
      !isAgeValid ||
      !gender ||
      !selectedDate
    ) {
      setError("Please fill in all required fields correctly");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const appointmentData = {
        name: name.trim(),
        phone: phone.trim(),
        age: Number.parseInt(age),
        gender,
        date: `${monthNames[currentMonth]} ${selectedDate}, ${currentYear}`,
        time: selectedTime,
      };

      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Invalid data");
      }

      setAppointmentDetails(result.appointment);
      setShowThankYou(true);
    } catch (err) {
      console.error("Error booking appointment:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Failed to book appointment. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

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
    setNameError("");
    setPhoneError("");
    setAgeError("");
    setNameValid(false);
    setPhoneValid(false);
    setAgeValid(false);
  };

  if (showThankYou) {
    return (
      <div className="min-h-screen bg-gray-50 p-2 sm:p-4 lg:p-6 flex items-center justify-center">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6 sm:p-8 lg:p-10 text-center">
              <div className="mb-6">
                <CheckCircle className="w-16 h-16 sm:w-20 sm:h-20 text-green-500 mx-auto mb-4" />
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  Thank You!
                </h1>
                <p className="text-base sm:text-lg text-gray-600 mb-6">
                  Your appointment has been successfully booked and saved to our
                  database.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 sm:p-6 mb-6 text-left">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 text-center">
                  Appointment Details
                </h3>
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <span className="font-medium text-gray-700">
                      Appointment ID:
                    </span>
                    <span className="text-gray-900 font-mono text-sm">
                      {appointmentDetails?.id}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <span className="font-medium text-gray-700">Name:</span>
                    <span className="text-gray-900">
                      {appointmentDetails?.name}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <span className="font-medium text-gray-700">Phone:</span>
                    <span className="text-gray-900">
                      {appointmentDetails?.phone}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <span className="font-medium text-gray-700">Age:</span>
                    <span className="text-gray-900">
                      {appointmentDetails?.age} years old
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <span className="font-medium text-gray-700">Gender:</span>
                    <span className="text-gray-900 capitalize">
                      {appointmentDetails?.gender}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <span className="font-medium text-gray-700">Date:</span>
                    <span className="text-gray-900">
                      {appointmentDetails?.date}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <span className="font-medium text-gray-700">Time:</span>
                    <span className="text-gray-900">
                      {appointmentDetails?.time}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <span className="font-medium text-gray-700">Status:</span>
                    <span className="text-green-600 font-semibold capitalize">
                      {appointmentDetails?.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-sm sm:text-base text-blue-800">
                  <strong>Important:</strong> Please arrive 15 minutes before
                  your scheduled appointment time. You will receive a
                  confirmation call within 24 hours.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button
                  onClick={resetForm}
                  variant="outline"
                  className="w-full sm:w-auto px-6 py-3 text-sm sm:text-base bg-transparent"
                >
                  Book Another Appointment
                </Button>
                <Button
                  onClick={() => window.print()}
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 px-6 py-3 text-sm sm:text-base"
                >
                  Print Details
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <section id="booking">
      <div className="min-h-screen bg-gray-50 p-2 sm:p-4 lg:p-6">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center mb-6 sm:mb-8 text-gray-900">
                Make an Appointment
              </h1>

              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <p className="text-red-700 text-sm sm:text-base">{error}</p>
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {/* Date Selection Section */}
                <div className="order-2 lg:order-1">
                  <h3 className="text-sm sm:text-base font-medium text-gray-700 mb-4">
                    Select Date
                  </h3>

                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => navigateMonth("prev")}
                      disabled={!canGoBack()}
                      className={`p-2 ${
                        !canGoBack() ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    >
                      <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Button>
                    <span className="text-sm sm:text-base lg:text-lg font-medium text-gray-900">
                      {monthNames[currentMonth]} {currentYear}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => navigateMonth("next")}
                      className="p-2"
                    >
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Button>
                  </div>

                  <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-6">
                    {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                      <div
                        key={day}
                        className="w-8 h-8 sm:w-10 sm:h-10 text-xs sm:text-sm text-gray-500 flex items-center justify-center font-medium"
                      >
                        {day}
                      </div>
                    ))}
                    {generateCalendarDays()}
                  </div>
                </div>

                {/* Form and Time Selection Section */}
                <div className="order-1 lg:order-2">
                  <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8">
                    {/* Name Field */}
                    <div>
                      <label className="text-sm sm:text-base font-medium text-gray-700 mb-2 block">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Input
                          type="text"
                          placeholder="Enter your full name"
                          value={name}
                          onChange={handleNameChange}
                          className={`w-full h-10 sm:h-11 text-sm sm:text-base pr-10 ${
                            name && nameValid
                              ? "border-green-500 focus:border-green-500 focus:ring-green-500"
                              : name && nameError
                              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                              : ""
                          }`}
                          disabled={isLoading}
                        />
                        {name && (
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            {nameValid ? (
                              <Check className="w-4 h-4 text-green-500" />
                            ) : (
                              <X className="w-4 h-4 text-red-500" />
                            )}
                          </div>
                        )}
                      </div>
                      {nameError && (
                        <p className="text-red-500 text-xs sm:text-sm mt-1">
                          {nameError}
                        </p>
                      )}
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label className="text-sm sm:text-base font-medium text-gray-700 mb-2 block">
                        Phone Number <span className="text-red-500">*</span>
                        <span className="text-xs text-gray-500 ml-2">
                          (10 digits only)
                        </span>
                      </label>
                      <div className="relative">
                        <Input
                          type="tel"
                          placeholder="Enter 10-digit phone number"
                          value={phone}
                          onChange={handlePhoneChange}
                          maxLength={10}
                          className={`w-full h-10 sm:h-11 text-sm sm:text-base pr-10 ${
                            phone && phoneValid
                              ? "border-green-500 focus:border-green-500 focus:ring-green-500"
                              : phone && phoneError
                              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                              : ""
                          }`}
                          disabled={isLoading}
                        />
                        {phone && (
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            {phoneValid ? (
                              <Check className="w-4 h-4 text-green-500" />
                            ) : (
                              <X className="w-4 h-4 text-red-500" />
                            )}
                          </div>
                        )}
                      </div>
                      {phoneError && (
                        <p className="text-red-500 text-xs sm:text-sm mt-1">
                          {phoneError}
                        </p>
                      )}
                      {phone && phone.length > 0 && (
                        <p className="text-xs text-gray-500 mt-1">
                          {phone.length}/10 digits entered
                        </p>
                      )}
                    </div>

                    {/* Age Field */}
                    <div>
                      <label className="text-sm sm:text-base font-medium text-gray-700 mb-2 block">
                        Age <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Input
                          type="number"
                          placeholder="Enter your age"
                          value={age}
                          onChange={handleAgeChange}
                          min="1"
                          max="120"
                          className={`w-full h-10 sm:h-11 text-sm sm:text-base pr-10 ${
                            age && ageValid
                              ? "border-green-500 focus:border-green-500 focus:ring-green-500"
                              : age && ageError
                              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                              : ""
                          }`}
                          disabled={isLoading}
                        />
                        {age && (
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            {ageValid ? (
                              <Check className="w-4 h-4 text-green-500" />
                            ) : (
                              <X className="w-4 h-4 text-red-500" />
                            )}
                          </div>
                        )}
                      </div>
                      {ageError && (
                        <p className="text-red-500 text-xs sm:text-sm mt-1">
                          {ageError}
                        </p>
                      )}
                    </div>

                    {/* Gender Field */}
                    <div>
                      <label className="text-sm sm:text-base font-medium text-gray-700 mb-2 block">
                        Gender <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        disabled={isLoading}
                        className="w-full h-10 sm:h-11 px-3 py-2 border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Time Selection */}
                  <div>
                    <h3 className="text-sm sm:text-base font-medium text-gray-700 mb-4">
                      Select Time
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mb-4">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          variant={
                            selectedTime === time ? "default" : "outline"
                          }
                          size="sm"
                          onClick={() => setSelectedTime(time)}
                          disabled={isLoading}
                          className={`h-9 sm:h-10 text-xs sm:text-sm px-2 sm:px-3 ${
                            selectedTime === time
                              ? "bg-blue-600 hover:bg-blue-700"
                              : "hover:bg-gray-50"
                          }`}
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-6 sm:mt-8 lg:mt-10">
                <Button
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 px-6 sm:px-8 py-3 sm:py-2 text-sm sm:text-base font-medium disabled:opacity-50"
                  disabled={
                    !selectedDate ||
                    !nameValid ||
                    !phoneValid ||
                    !ageValid ||
                    !gender ||
                    isLoading
                  }
                  onClick={handleBookAppointment}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Booking Appointment...
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
