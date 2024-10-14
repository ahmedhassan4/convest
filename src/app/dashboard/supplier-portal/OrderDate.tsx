"use client";
import { useState } from "react";
import DateFiled from "@/shared/controlled-table-not-modified/date-field";

export default function OrderDate({ className }: { className?: string }) {
  const [selectedRange, setSelectedRange] = useState<
    [Date | null, Date | null] | null
  >(null);

  const handleDateChange = (date: Date | [Date | null, Date | null] | null) => {
    if (Array.isArray(date)) {
      setSelectedRange(date);
      console.log("Selected Range:", date); // Log the selected range
    } else {
      setSelectedRange([date, null]);
      // console.log("Selected Single Date:", date); // Log the single date
    }
  };

  return (
    <div className={`my-5 ${className}`}>
      <DateFiled
        startDate={selectedRange ? selectedRange[0] : null}
        endDate={selectedRange ? selectedRange[1] : null}
        onChange={handleDateChange}
        className="w-full mx-auto  md:max-w-[400px] lg:max-w-[500px] cursor-pointer"
        placeholderText="Select created date"
      />
    </div>
  );
}
