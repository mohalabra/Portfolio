"use client";
import { useState, useEffect } from "react";

interface FeedbackFormProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function FeedbackForm({ isOpen, setIsOpen }: FeedbackFormProps) {
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 20000);
  }, []);

  const closeModal = () => setIsOpen(false);

  const submitFeedback = async () => {
    setLoading(true);
    setSuccess(false);
    setError("");

    const res = await fetch("/api/submit-feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, rating }),
    });

    const data = await res.json();

    if (res.ok) {
      setSuccess(true);
      setMessage("");
      setRating(1);
      setTimeout(closeModal, 2000);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } else {
      setError(data.error || "Something went wrong");
    }

    setLoading(false);
  };

  return (
    isOpen && (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        onClick={closeModal} // Close modal when clicking outside
      >
        {/* Modal Content */}
        <div
          className="bg-white p-6 rounded-lg shadow-lg w-[1000px] max-w-[90%]"
          onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from propagating
        >
          {/* Header */}
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">
            Leave a Feedback
          </h2>

          {/* Textarea */}
          <textarea
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 mb-4"
            placeholder="Write your feedback... (Optional)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          {/* Star Rating */}
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`cursor-pointer text-3xl ${i < rating ? "text-yellow-400" : "text-gray-400"} hover:text-yellow-500 transition duration-200`}
                onClick={() => setRating(i + 1)}
              >
                <svg
                  className="w-6 h-6 md:h-8 md:w-8"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </span>
            ))}
          </div>

          {/* Submit Button */}
          <button
            className="w-full bg-blue-500 text-white py-3 px-4 rounded font-medium hover:bg-blue-600 transition duration-200 disabled:bg-gray-400"
            onClick={submitFeedback}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

          {/* Success Message */}
          {success && (
            <p className="text-green-500 mt-4 text-center">
              Thank you for your feedback!
            </p>
          )}

          {/* Error Message */}
          {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

          {/* Close Button */}
          <button
            className="mt-4 w-full py-3 px-4 text-gray-600 border border-gray-300 rounded font-medium hover:bg-gray-100 transition duration-200"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    )
  );
}
