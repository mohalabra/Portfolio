import React from "react";

const FeedbackButton = ({
  setOpenFeedback,
}: {
  setOpenFeedback: (value: boolean) => void;
}) => {
  return (
    <button
      onClick={() => setOpenFeedback(true)}
      className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-neutral-950/70 hover:bg-neutral-950 font-medium text-neutral-200 transition-all duration-300 hover:w-32"
    >
      <div className="inline-flex whitespace-nowrap opacity-0 transition-all duration-200 group-hover:-translate-x-3 group-hover:opacity-100 text-[1.1rem]">
        feedback
      </div>
      <div className="absolute right-3.5">
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
        >
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </button>
  );
};

export default FeedbackButton;
