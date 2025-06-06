// components/TimePickerWrapper.tsx
"use client";
import dynamic from "next/dynamic";

// Dynamically import TimePicker with SSR disabled
const TimePicker = dynamic(() => import("react-time-picker"), {
  ssr: false,
});

export default TimePicker;
