"use client";

import { LoadingPage } from "@/src/components";
import React, { useEffect, useState } from "react";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.location.href = "/home";
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return isLoading && <LoadingPage />;
}

export default Home;
