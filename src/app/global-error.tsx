"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import "./globals.css"; // Ensure global styles are loaded

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gray-50 dark:bg-slate-900">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Critical System Error
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md">
            Our apologies, a critical error has occurred and the application
            cannot recover automatically.
          </p>
          <Button onClick={() => reset()} variant="primary">
            Refresh Page
          </Button>
        </div>
      </body>
    </html>
  );
}
