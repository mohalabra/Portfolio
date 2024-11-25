import { Typography } from "@mui/material";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen text-gray-800 gap-10">
      <img src="/gifs/tenor.gif" alt="Study Gif" className="p-2" />
      <div className="flex flex-col items-center justify-center ">
        <Typography variant="h1" className="text-6xl font-bold text-red-600">
          404
        </Typography>
        <Typography variant="h2" className="text-2xl font-semibold mt-4">
          Page Not Found
        </Typography>
        <Typography variant="body1" className="mt-2 text-gray-600">
          Sorry, the page you’re looking for doesn’t exist.
        </Typography>
        <Link
          href="/"
          className="mt-6 px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700"
        >
          <Typography variant="button">Back to Home</Typography>
        </Link>
      </div>
    </div>
  );
}
