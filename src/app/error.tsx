"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] px-4 text-center">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Something went wrong!
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md">
        We apologize for the inconvenience. An unexpected error has occurred.
      </p>
      <div className="flex gap-4">
        <Button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
          variant="primary"
        >
          Try again
        </Button>
        <Button onClick={() => (window.location.href = "/")} variant="outline">
          Go Home
        </Button>
      </div>
    </div>
  );
}
