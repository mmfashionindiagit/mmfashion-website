"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  const [targetDate, setTargetDate] = useState<Date | null>(null);

  // ✅ Load or create target date ONLY ONCE
  useEffect(() => {
    const storedDate = localStorage.getItem("countdown_target");

    if (storedDate) {
      setTargetDate(new Date(storedDate));
    } else {
      const newDate = new Date();
      newDate.setDate(newDate.getDate() + 20);

      localStorage.setItem("countdown_target", newDate.toISOString());
      setTargetDate(newDate);
    }
  }, []);

  useEffect(() => {
    if (!targetDate) return;

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        // ✅ Reset AFTER 20 days completed
        const newDate = new Date();
        newDate.setDate(newDate.getDate() + 20);

        localStorage.setItem("countdown_target", newDate.toISOString());
        setTargetDate(newDate);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (!timeLeft) return null;

  return (
    <div className="flex gap-10 justify-center md:justify-start mt-8">
      <div>
        <p className="text-3xl font-bold text-[color:var(--brand-gold)]">
          {timeLeft.days}
        </p>
        <span>Days</span>
      </div>

      <div>
        <p className="text-3xl font-bold text-[color:var(--brand-gold)]">
          {timeLeft.hours}
        </p>
        <span>Hours</span>
      </div>

      <div>
        <p className="text-3xl font-bold text-[color:var(--brand-gold)]">
          {timeLeft.minutes}
        </p>
        <span>Minutes</span>
      </div>

      <div>
        <p className="text-3xl font-bold text-[color:var(--brand-gold)]">
          {timeLeft.seconds}
        </p>
        <span>Seconds</span>
      </div>
    </div>
  );
}