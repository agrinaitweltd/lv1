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

const MONTH = 3;
const YEAR = 2026;
const SERVICE_OPTIONS = [
  "Full Detail — £60",
  "Mini Valet — £40",
  "Full Interior — £25",
  "Full Exterior — £25",
];

function buildCalendar(): CalendarDay[] {
  const firstDay = new Date(YEAR, MONTH, 1);
  const startDow = firstDay.getDay();
  const daysInMonth = new Date(YEAR, MONTH + 1, 0).getDate();
  const prevMonthDays = new Date(YEAR, MONTH, 0).getDate();
  const days: CalendarDay[] = [];

  for (let i = startDow - 1; i >= 0; i--) {
    const d = new Date(YEAR, MONTH - 1, prevMonthDays - i);
    days.push({ date: d, dayNumber: prevMonthDays - i, isCurrentMonth: false, isWeekend: d.getDay() === 0 || d.getDay() === 6 });
  }
  for (let n = 1; n <= daysInMonth; n++) {
    const d = new Date(YEAR, MONTH, n);
    days.push({ date: d, dayNumber: n, isCurrentMonth: true, isWeekend: d.getDay() === 0 || d.getDay() === 6 });
  }
  let extra = 1;
  while (days.length < 42) {
    const d = new Date(YEAR, MONTH + 1, extra++);
    days.push({ date: d, dayNumber: d.getDate(), isCurrentMonth: false, isWeekend: d.getDay() === 0 || d.getDay() === 6 });
  }
  return days;
}

function isoKey(d: Date) {
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
}

export default function BookNowPage() {
  const calendarDays = useMemo(() => buildCalendar(), []);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const todayKey = isoKey(new Date());

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2800);
  };

  return (
    <main>
      <Header currentPath="/book-now" />

      <section className="booking-page">
        <div className="container booking-intro fade-in-up">
          <p className="eyebrow">Book Now</p>
          <h1>Reserve Your Weekend Detail</h1>
          <p className="booking-intro-sub">
            Pick a Saturday or Sunday in April 2026, complete your details, and I will confirm your slot directly.
          </p>
        </div>

        <div className="container booking-grid">
          {/* Calendar */}
          <div className="calendar-card">
            <div className="calendar-head">
              <h2>April 2026</h2>
              <p>Weekend slots only · Sat &amp; Sun</p>
            </div>
            <div className="calendar-weekdays">
              {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((d) => <span key={d}>{d}</span>)}
            </div>
            <div className="calendar-grid">
              {calendarDays.map((day) => {
                const key = isoKey(day.date);
                const isToday = key === todayKey;
                const isSelected = selectedDate ? key === isoKey(selectedDate) : false;
                const isSelectable = day.isCurrentMonth && day.isWeekend;
                return (
                  <button
                    key={key + day.dayNumber}
                    type="button"
                    className={[
                      "cal-day",
                      day.isCurrentMonth ? "" : "outside",
                      isSelectable ? "available" : "",
                      isToday ? "today" : "",
                      isSelected ? "selected" : "",
                    ].join(" ").trim()}
                    onClick={() => isSelectable && setSelectedDate(day.date)}
                    disabled={!isSelectable}
                    aria-label={day.date.toDateString()}
                    aria-pressed={isSelected}
                  >
                    {day.dayNumber}
                  </button>
                );
              })}
            </div>
            {selectedDate && (
              <p className="cal-selected-label">
                Selected: <strong>{selectedDate.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" })}</strong>
              </p>
            )}
          </div>

          {/* Form */}
          <form className="booking-form" onSubmit={handleSubmit}>
            <label>
              Service
              <select required defaultValue="">
                <option value="" disabled>Choose a service…</option>
                {SERVICE_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </label>
            <label>
              Full Name
              <input type="text" name="name" required placeholder="Your full name" />
            </label>
            <div className="form-row">
              <label>
                Email
                <input type="email" name="email" required placeholder="you@email.com" />
              </label>
              <label>
                Phone
                <input type="tel" name="phone" required placeholder="07xxx xxxxxx" />
              </label>
            </div>
            <div className="form-row">
              <label>
                Car Make
                <input type="text" name="make" required placeholder="e.g. BMW" />
              </label>
              <label>
                Car Model
                <input type="text" name="model" required placeholder="e.g. 3 Series" />
              </label>
            </div>
            <p className="form-note">
              Prices may vary depending on vehicle type and dirtiness. Payment is made in person.
            </p>
            <button
              type="submit"
              className={`btn-primary booking-submit ${submitted ? "success" : ""}`}
            >
              {submitted ? "✓ Booking Confirmed!" : "Confirm Booking"}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
