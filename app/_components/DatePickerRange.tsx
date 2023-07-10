"use client";
import dayjs from "dayjs";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const DatePickerRange = () => {
  const [startDate, setStartDate] = useState(
    new Date(dayjs().subtract(7, "day").format("YYYY-MM-DD"))
  );
  const [endDate, setEndDate] = useState(
    new Date(dayjs().format("YYYY-MM-DD"))
  );
  return (
    <div className="flex">
      <div className="mr-4 ml-4">
        <p>fecha incial</p>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          minDate={
            new Date(dayjs(endDate).subtract(7, "day").format("YYYY-MM-DD"))
          }
        />
      </div>
      <div className="mr-4 ml-4">
        <p>fecha final</p>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          maxDate={
            new Date(dayjs(startDate).add(7, "day").format("YYYY-MM-DD"))
          }
        />
      </div>
    </div>
  );
};
