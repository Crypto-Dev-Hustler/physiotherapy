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
  const { isMobile, isLandscape } = useMobileTouch();
  const scrollRef = useRef<HTMLDivElement>(null);
console.log(isLandscape,scrollRef);
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
      }
    };

    const interval = setInterval(updateDate, 60000);
    updateDate();
    return () => clearInterval(interval);
  }, [today]);

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

    const nameRegex = /^[a-zA-Z\s\-'.]+$/;
    if (!nameRegex.test(trimmedValue)) {
      setNameError(
        "Name can only contain letters, spaces, hyphens, and apostrophes"
      );
      setNameValid(false);
      return false;
    }

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

    if (digitsOnly.length !== 10) {
      setPhoneError("Phone number must be exactly 10 digits");
      setPhoneValid(false);
      return false;
    }

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

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const shortDayNames = ["S", "M", "T", "W", "T", "F", "S"];

  // Generate continuous horizontal dates for scrolling
  const generateContinuousHorizontalDates = () => {
    const dates = [];
    const startDate = new Date(today);

    // Generate dates for next 90 days (3 months)
    for (let i = 0; i < 90; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);

      const day = currentDate.getDate();
      const month = currentDate.getMonth();
      const year = currentDate.getFullYear();
      const dayName = dayNames[currentDate.getDay()];
      const shortDayName = shortDayNames[currentDate.getDay()];

      const isPastDate = currentDate < today;
      const isSelected =
        selectedDate &&
        selectedDate.day === day &&
        selectedDate.month === month &&
        selectedDate.year === year;
      const isToday =
        currentDate.getDate() === today.getDate() &&
        currentDate.getMonth() === today.getMonth() &&
        currentDate.getFullYear() === today.getFullYear();

      dates.push({
        day,
        month,
        year,
        dayName,
        shortDayName,
        isPastDate,
        isSelected,
        isToday,
        fullDate: new Date(currentDate),
        monthName: monthNames[month],
      });
    }

    return dates;
  };

  // Generate traditional calendar grid for desktop
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
      const isSelected =
        selectedDate &&
        selectedDate.day === day &&
        selectedDate.month === currentMonth &&
        selectedDate.year === currentYear;
      const isToday = isCurrentMonth && day === todayDate;

      days.push(
        <button
          key={day}
          onClick={() =>
            !isPastDate &&
            setSelectedDate({ day, month: currentMonth, year: currentYear })
          }
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
        date: `${monthNames[selectedDate.month]} ${selectedDate.day}, ${
          selectedDate.year
        }`,
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
        throw new Error(result.error || "Error in uploading data");
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDateSelect = (dateInfo: any) => {
    if (dateInfo.isPastDate) return;

    // Haptic feedback on mobile
    if (isMobile && "vibrate" in navigator) {
      navigator.vibrate(10);
    }

    setSelectedDate({
      day: dateInfo.day,
      month: dateInfo.month,
      year: dateInfo.year,
    });
  };

  // Scroll to today on mount
  const scrollRefForToday = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (isMobile && scrollRefForToday.current) {
      // Small delay to ensure component is rendered
      setTimeout(() => {
        const todayElement = scrollRefForToday.current?.querySelector(
          '[data-today="true"]'
        );
        if (todayElement) {
          // For LTR, "start" is on the left, so scrolling to "start" or "center" is appropriate
          todayElement.scrollIntoView({ behavior: "smooth", inline: "center" });
        }
      }, 100);
    }
  }, [isMobile]);

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
            <CardContent
              className={`${isMobile ? "p-3" : "p-4 sm:p-6 lg:p-8"}`}
            >
              <h1
                className={`font-semibold text-center mb-6 sm:mb-8 text-gray-900 ${
                  isMobile ? "text-lg" : "text-xl sm:text-2xl lg:text-3xl"
                }`}
              >
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

                  {/* Mobile Continuous Horizontal Calendar */}
                  {isMobile ? (
                    <div className="relative">
                      {/* Month indicator */}
                      <div className="flex justify-center mb-4">
                        <div className="bg-blue-50 px-4 py-2 rounded-full">
                          <span className="text-sm font-medium text-blue-700">
                            Swipe right for more dates →
                          </span>
                        </div>
                      </div>

                      {/* Continuous horizontal scroll */}
                      <div
                        ref={scrollRefForToday}
                        className="overflow-x-auto scrollbar-hide"
                        style={{
                          scrollBehavior: "smooth",
                          WebkitOverflowScrolling: "touch",
                        }}
                      >
                        <div
                          className="flex gap-3 pb-4 px-2"
                          style={{ width: "max-content" }}
                        >
                          {generateContinuousHorizontalDates().map(
                            (dateInfo, index) => {
                              // Show month separator
                              const showMonthSeparator =
                                index === 0 ||
                                dateInfo.month !==
                                  generateContinuousHorizontalDates()[index - 1]
                                    ?.month;

                              return (
                                <div
                                  key={`${dateInfo.year}-${dateInfo.month}-${dateInfo.day}`}
                                  className="flex items-center gap-3"
                                >
                                  {showMonthSeparator && index > 0 && (
                                    <div className="flex flex-col items-center justify-center px-2">
                                      <div className="w-px h-16 bg-gray-200"></div>
                                      <span className="text-xs text-gray-400 mt-2 writing-mode-vertical transform rotate-90 whitespace-nowrap">
                                        {dateInfo.monthName}
                                      </span>
                                    </div>
                                  )}

                                  <button
                                    onClick={() => handleDateSelect(dateInfo)}
                                    disabled={dateInfo.isPastDate}
                                    data-today={dateInfo.isToday}
                                    className={`
                                    flex-shrink-0 flex flex-col items-center justify-center
                                    w-16 h-20 rounded-xl border-2 transition-all duration-200
                                    touch-manipulation select-none relative
                                    ${
                                      dateInfo.isPastDate
                                        ? "text-gray-300 cursor-not-allowed border-gray-200 bg-gray-50"
                                        : dateInfo.isSelected
                                        ? "bg-orange-500 text-white border-orange-500 shadow-lg scale-105 transform"
                                        : dateInfo.isToday
                                        ? "bg-blue-50 text-blue-600 border-blue-300 font-semibold shadow-md ring-2 ring-blue-200"
                                        : "text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-gray-50 active:scale-95"
                                    }
                                    ${
                                      !dateInfo.isPastDate
                                        ? "hover:shadow-md active:shadow-lg"
                                        : ""
                                    }
                                  `}
                                    style={{
                                      WebkitTapHighlightColor: "transparent",
                                      touchAction: "manipulation",
                                    }}
                                  >
                                    <span className="text-xs font-medium mb-1 uppercase tracking-wide">
                                      {dateInfo.shortDayName}
                                    </span>
                                    <span className="text-xl font-bold">
                                      {dateInfo.day}
                                    </span>
                                    {dateInfo.isToday && (
                                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                      </div>
                                    )}
                                    {showMonthSeparator && index === 0 && (
                                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                                        <span className="text-xs font-medium text-gray-500 bg-white px-2 py-1 rounded-full border">
                                          {dateInfo.monthName}
                                        </span>
                                      </div>
                                    )}
                                  </button>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>

                      {/* Removed the "Scroll for more dates" text and pulsing dots */}
                    </div>
                  ) : (
                    /* Desktop Grid Calendar */
                    <div>
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
                        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(
                          (day) => (
                            <div
                              key={day}
                              className="w-8 h-8 sm:w-10 sm:h-10 text-xs sm:text-sm text-gray-500 flex items-center justify-center font-medium"
                            >
                              {day}
                            </div>
                          )
                        )}
                        {generateCalendarDays()}
                      </div>
                    </div>
                  )}
                </div>

                {/* Form and Time Selection Section */}
                <div className="order-1 lg:order-2">
                  {/* Enhanced form fields for mobile */}
                  <div
                    className={`space-y-4 sm:space-y-5 mb-6 sm:mb-8 ${
                      isMobile ? "space-y-5" : ""
                    }`}
                  >
                    {/* Name Field with mobile optimization */}
                    <div>
                      <label
                        className={`font-medium text-gray-700 mb-2 block ${
                          isMobile ? "text-base" : "text-sm sm:text-base"
                        }`}
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Input
                          type="text"
                          placeholder="Enter your full name"
                          value={name}
                          onChange={handleNameChange}
                          className={`w-full text-base pr-10 transition-all duration-200 ${
                            isMobile
                              ? "h-12 text-base"
                              : "h-10 sm:h-11 text-sm sm:text-base"
                          } ${
                            name && nameValid
                              ? "border-green-500 focus:border-green-500 focus:ring-green-500"
                              : name && nameError
                              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                              : ""
                          }`}
                          disabled={isLoading}
                          style={{
                            WebkitTapHighlightColor: "transparent",
                            fontSize: isMobile ? "16px" : undefined, // Prevents zoom on iOS
                          }}
                        />
                        {name && (
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            {nameValid ? (
                              <Check className="w-5 h-5 text-green-500" />
                            ) : (
                              <X className="w-5 h-5 text-red-500" />
                            )}
                          </div>
                        )}
                      </div>
                      {nameError && (
                        <p
                          className={`text-red-500 mt-1 ${
                            isMobile ? "text-sm" : "text-xs sm:text-sm"
                          }`}
                        >
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

                  {/* Enhanced Time Selection for Mobile */}
                  <div>
                    <h3 className="text-sm sm:text-base font-medium text-gray-700 mb-4">
                      Select Time
                    </h3>
                    {isMobile ? (
                      <div
                        className="overflow-x-auto scrollbar-hide" /* Removed dir="rtl" */
                      >
                        <div
                          className="flex gap-2 pb-4"
                          style={{ width: "max-content" }}
                        >
                          {timeSlots.map((time) => (
                            <Button
                              key={time}
                              variant={
                                selectedTime === time ? "default" : "outline"
                              }
                              size="sm"
                              onClick={() => setSelectedTime(time)}
                              disabled={isLoading}
                              className={`
                                flex-shrink-0 h-12 px-4 text-sm font-medium rounded-lg
                                transition-all duration-200 touch-manipulation select-none
                                ${
                                  selectedTime === time
                                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md scale-105 transform"
                                    : "hover:bg-gray-50 active:scale-95"
                                }
                              `}
                              style={{
                                WebkitTapHighlightColor: "transparent",
                                touchAction: "manipulation",
                              }}
                            >
                              {time}
                            </Button>
                          ))}
                        </div>
                      </div>
                    ) : (
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
                    )}
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
