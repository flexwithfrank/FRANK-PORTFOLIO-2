"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import SearchInput from "@/components/ui/search";

export default function Input() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const query = searchParams.get("q") || null;

  const [timer, setTimer] = useState(null);

  const handleChange = e => {
    clearTimeout(timer);
    const newTimer = setTimeout(() => {
      router.push(`/search?q=${e.target.value}`);
    }, 500);
    setTimer(newTimer);
  };

  return (
    <div className="mx-auto mt-5 max-w-md">
      <SearchInput
        q={query}
        handleChange={handleChange}
        placeholder="Enter keywords"
      />
    </div>
  );
}
