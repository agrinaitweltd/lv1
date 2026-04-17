"use client";

import { FormEvent, useMemo, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

type CalendarDay = {
  date: Date;
  dayNumber: number;
  isCurrentMonth: boolean;
  isWeekend: boolean;
};

const monthIndex = 3;
const year = 2026;

const serviceOptions = [
  "Mini Valet - £40",
  "Full Detail - £60",
  "Full Interior - £25",
  "Full Exterior - £25",
];

function getCalendarDays(): CalendarDay[] {
  const firstDay = new Date(year, monthIndex, 1);
  const startDayOfWeek = firstDay.getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const previousMonthDays = new Date(year, monthIndex, 0).getDate();

  const days: CalendarDay[] = [];

  for (let i = startDayOfWeek - 1; i >= 0; i -= 1) {
    const dayNumber = previousMonthDays - i;
    const date = new Date(year, monthIndex - 1, dayNumber);
    days.push({
      date,
      dayNumber,
      isCurrentMonth: false,
      isWeekend: date.getDay() === 0 || date.getDay() === 6,
    });
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const date = new Date(year, monthIndex, day);
    days.push({
      date,
      dayNumber: day,
      isCurrentMonth: true,
      isWeekend: date.getDay() === 0 || date.getDay() === 6,
    });
  }

  while (days.length < 42) {
    const dayNumber = days.length - (startDayOfWeek + daysInMonth) + 1;
    const date = new Date(year, monthIndex + 1, dayNumber);
    days.push({
      date,
      dayNumber,
      isCurrentMonth: false,
      isWeekend: date.getDay() === 0 || date.getDay() === 6,
    });
  }

  return days;
}

export default function BookNowPage() {
  const calendarDays = useMemo(() => getCalendarDays(), []);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const today = new Date();
  const todayIso = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2400);
  };

  return (
    <main>
      <Header currentPath="/book-now" />

      <section className="booking-page section-shell">
        <div className="container booking-shell fade-in-up">
          <div className="booking-heading">
            <p className="eyebrow">Book Now</p>
            <h1>Reserve Your Weekend Detail</h1>
            <p>
              Pick a Saturday or Sunday in April 2026, then complete your details
              below. We will confirm your slot directly.
            </p>
          </div>

          <div className="booking-grid">
            <div className="calendar-card">
              <div className="calendar-head">
                <h2>April 2026</h2>
                <p>Weekend slots only</p>
              </div>
              <div className="calendar-weekdays">
                {[
                  "Sun",
                  "Mon",
                  "Tue",
                  "Wed",
                  "Thu",
                  "Fri",
                  "Sat",
                ].map((day) => (
                  <span key={day}>{day}</span>
                ))}
              </div>

              <div className="calendar-grid">
                {calendarDays.map((day) => {
                  const iso = `${day.date.getFullYear()}-${day.date.getMonth()}-${day.date.getDate()}`;
                  const isToday = iso === todayIso;
                  const isSelected =
                    selectedDate && iso === `${selectedDate.getFullYear()}-${selectedDate.getMonth()}-${selectedDate.getDate()}`;
                  const isSelectable = day.isCurrentMonth && day.isWeekend;

                  return (
                    <button
                      key={`${iso}-${day.dayNumber}`}
                      type="button"
                      className={[
                        "calendar-day",
                        day.isCurrentMonth ? "" : "outside",
                        isSelectable ? "available" : "",
                        isToday ? "today" : "",
                        isSelected ? "selected" : "",
                      ].join(" ")}
                      onClick={() => isSelectable && setSelectedDate(day.date)}
                      disabled={!isSelectable}
                      aria-label={`Select ${day.date.toDateString()}`}
                    >
                      {day.dayNumber}
                    </button>
                  );
                })}
              </div>
            </div>

            <form className="booking-form" onSubmit={handleSubmit}>
              <label>
                Service
                <select required defaultValue="">
                  <option value="" disabled>
                    Choose a service
                  </option>
                  {serviceOptions.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Full Name
                <input type="text" name="name" required />
              </label>

              <label>
                Email
                <input type="email" name="email" required />
              </label>

              <label>
                Phone Number
                <input type="tel" name="phone" required />
              </label>

              <label>
                Car Make
                <input type="text" name="make" required />
              </label>

              <label>
                Car Model
                <input type="text" name="model" required />
              </label>

              <p className="form-note">
                Prices may vary depending on vehicle type and dirtiness. Payment is
                made in person.
              </p>

              <button type="submit" className={`btn-primary submit-btn ${submitted ? "success" : ""}`}>
                {submitted ? "Booking Confirmed" : "Confirm Booking"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
