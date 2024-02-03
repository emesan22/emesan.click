"use client";

import { useEffect, useState } from "react";

export default function TopePage() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const now = new Date();
    const hour = now.getHours();
    console.log(hour);
    if (hour < 12 && hour >= 5) {
      setGreeting("おはよう!");
    } else if (hour >= 12 && hour < 18) {
      setGreeting("こんにちは");
    } else if (hour >= 18) {
      setGreeting("こんばんは");
    } else if (hour >= 22) {
      setGreeting("おやすみ");
    } else if (hour >= 0 && hour < 5) {
      setGreeting("早く寝よう!!!");
    }
  }, []);

  return (
    <div className="grid place-content-center h-screen">
      <div className="w-auto text-center flex flex-col gap-2">
        <h1 className="text-7xl">えめさん</h1>
        <p>
          <span className="text-4xl">{greeting}</span>
        </p>
      </div>
    </div>
  );
}
