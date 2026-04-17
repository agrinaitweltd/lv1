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
  "Mini Valet - £40",
  "Full Detail - £60",
  "Full Interior - £25",
  "Full Exterior - £25",
];

const PROCESS_STEPS = [
  {
    title: "Select Your Slot",
    body: "Choose a weekend date from the calendar and pick your preferred service package.",
  },
  {
    title: "Share Vehicle Details",
    body: "Tell us your make, model, and condition so we can prep products and timing correctly.",
  },
  {
    title: "Drop-Off & Detail",
    body: "Bring your car in on the confirmed slot and we handle the rest with a premium finish.",
  },
  {
    title: "Collect & Enjoy",
    body: "Pick up your refreshed vehicle and enjoy that deep-gloss, showroom-level clean.",
  },
];

const FAQS = [
  {
    q: "How long does a booking take?",
    a: "Most bookings are completed within the same day depending on package and vehicle condition.",
  },
  {
    q: "Can prices change?",
    a: "Yes. Final price can vary by vehicle size and dirt level. We confirm this transparently before starting.",
  },
  {
    q: "How do I pay?",
    a: "Payment is made in person on completion.",
  },
];

function buildCalendar(): CalendarDay[] {
  const firstDay = new Date(YEAR, MONTH, 1);
  const startDow = firstDay.getDay();
  const daysInMonth = new Date(YEAR, MONTH + 1, 0).getDate();
  const prevMonthDays = new Date(YEAR, MONTH, 0).getDate();
  const days: CalendarDay[] = [];

  for (let i = startDow - 1; i >= 0; i--) {
    const d = new Date(YEAR, MONTH - 1, prevMonthDays - i);
    days.push({
      date: d,
      dayNumber: prevMonthDays - i,
      isCurrentMonth: false,
      isWeekend: d.getDay() === 0 || d.getDay() === 6,
    });
  }

  for (let n = 1; n <= daysInMonth; n++) {
    const d = new Date(YEAR, MONTH, n);
    days.push({
      date: d,
      dayNumber: n,
      isCurrentMonth: true,
      isWeekend: d.getDay() === 0 || d.getDay() === 6,
    });
  }

  let extra = 1;
  while (days.length < 42) {
    const d = new Date(YEAR, MONTH + 1, extra++);
    days.push({
      date: d,
      dayNumber: d.getDate(),
      isCurrentMonth: false,
      isWeekend: d.getDay() === 0 || d.getDay() === 6,
    });
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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2400);
  };

  return (
    <main>
      <Header currentPath="/book-now" />

      <section className="booking-hero">
        <div className="container booking-intro fade-in-up">
          <p className="eyebrow">Book Now</p>
          <h1>Reserve Your Weekend Detail</h1>
          <p className="booking-intro-sub">
            Choose your date, submit your details, and we will confirm your slot directly.
          </p>
        </div>
      </section>

      <section className="book-form-section section-shell">
        <div className="container book-form-grid">
          <div className="book-copy">
            <h2>REACH <em>OUT</em></h2>
            <p>
              If you have a question, feedback, or would like a quote for your vehicle,
              we would love to hear from you.
            </p>
            <p>
              Response times can vary depending on current schedule, but we always aim
              to get back quickly with the best available slot.
            </p>
            <p className="book-copy-note">
              Prices may vary depending on vehicle type and dirtiness. Payment is made in person.
            </p>

            <div className="calendar-card">
              <div className="calendar-head">
                <h3>April 2026</h3>
                <p>Only weekends are available</p>
              </div>
              <div className="calendar-weekdays">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </div>
              <div className="calendar-grid">
                {calendarDays.map((day) => {
                  const key = isoKey(day.date);
                  const isToday = key === todayKey;
                  const isSelected = selectedDate ? key === isoKey(selectedDate) : false;
                  const isSelectable = day.isCurrentMonth && day.isWeekend;

                  return (
                    <button
                      key={`${key}-${day.dayNumber}`}
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
          </div>

          <div className="book-form-wrap">
            <div className="book-deco" aria-hidden="true" />
            <form className="booking-form image-style" onSubmit={handleSubmit}>
              <label>
                Full Name
                <input type="text" name="name" required />
              </label>

              <div className="form-row">
                <label>
                  Email
                  <input type="email" name="email" required />
                </label>
                <label>
                  Phone
                  <input type="tel" name="phone" required />
                </label>
              </div>

              <div className="form-row">
                <label>
                  Vehicle Make
                  <input type="text" name="make" required />
                </label>
                <label>
                  Vehicle Model
                  <input type="text" name="model" required />
                </label>
              </div>

              <label>
                Service Required
                <select required defaultValue="">
                  <option value="" disabled>Choose service</option>
                  {SERVICE_OPTIONS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </label>

              <label>
                Additional Notes
                <textarea rows={4} name="notes" placeholder="Tell us about current condition, stains, pet hair, or anything useful..." />
              </label>

              <button className={`btn-primary booking-submit ${submitted ? "success" : ""}`} type="submit">
                {submitted ? "Booking Confirmed" : "Confirm Booking"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="booking-process section-shell">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Process</p>
            <h2>How Booking Works</h2>
          </div>
          <div className="process-grid">
            {PROCESS_STEPS.map((step, idx) => (
              <article key={step.title} className="process-card reveal-up" style={{ animationDelay: `${idx * 120}ms` }}>
                <span className="process-index">0{idx + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="booking-faq section-shell">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">FAQ</p>
            <h2>Before You Arrive</h2>
          </div>
          <div className="faq-grid">
            {FAQS.map((item) => (
              <article key={item.q} className="faq-card reveal-up">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

