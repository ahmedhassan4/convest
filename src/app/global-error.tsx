"use client";
import { useEffect } from 'react';

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
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
      <strong className="font-bold">Something went wrong!</strong>
      <span className="block sm:inline"> {error.message}</span>
      <button
        onClick={reset}
        className="absolute top-0 right-0 px-4 py-3"
      >
        <svg className="h-6 w-6 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M6.83 6.71a1 1 0 011.41 0L10 8.59l1.76-1.88a1 1 0 111.46 1.38l-2.5 2.67a1 1 0 01-1.45 0l-2.5-2.67a1 1 0 010-1.46zM10 18a8 8 0 110-16 8 8 0 010 16z"/>
        </svg>
      </button>
    </div>
  );
}
