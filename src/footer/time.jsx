"use client";

import { useEffect, useState } from "react";

export default function Time() {
  const [time, setTime] = useState("");

  useEffect(() => {
    function updateIST() {
      const now = new Date();

      const ist = now.toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });

      setTime(ist + " IST");
    }

    updateIST();
    const interval = setInterval(updateIST, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p>{time}</p>;
}