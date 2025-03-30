import React, { useEffect } from "react";
import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import ReduxProvider from "@/src/store/StoreProvider";
import { ThemeLayout } from "../src/components";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohamed Labrassi",
  description:
    "Welcome to Mohamed Labrassi's portfolio. Explore my journey, expertise, and projects in AI, web development, and more.",
  keywords: [
    "Mohamed Labrassi",
    "Portfolio",
    "Machine Learning",
    "Deep Learning",
    "Large Language Models",
    "Artificial Intelligence",
    "AI Projects",
    "Web Development",
    "Machine Learning",
    "Full Stack Developer",
  ],
  authors: {
    name: "Mohamed Labrassi",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <html lang="en">
        <head>
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        </head>
        <ThemeLayout>
          <body
            className="overflow-y-scroll scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-200"
            cz-shortcut-listen="true"
          >
            <AppRouterCacheProvider>
              <CssBaseline />
              {children}
            </AppRouterCacheProvider>
          </body>
        </ThemeLayout>
      </html>
    </ReduxProvider>
  );
}
