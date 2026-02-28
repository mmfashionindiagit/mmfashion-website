"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    const targetDate = new Date("2026-04-01T00:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown(); // initial
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) {
    return null; // prevents hydration mismatch
  }

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