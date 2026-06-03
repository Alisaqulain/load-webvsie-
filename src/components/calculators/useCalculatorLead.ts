"use client";

import { FormEvent, useEffect, useState } from "react";

const STORAGE_KEY = "nr_calculator_lead_unlocked";

export function useCalculatorLead() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    setUnlocked(sessionStorage.getItem(STORAGE_KEY) === "true");
  }, []);

  const handleUnlock = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sessionStorage.setItem(STORAGE_KEY, "true");
    setUnlocked(true);
  };

  return { unlocked, handleUnlock };
}
