import React from "react";
import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import ReduxProvider from "@/src/store/StoreProvider";
import { Header, Footer, ThemeLayout } from "../src/components";
import "./globals.css";
import { Box } from "@mui/material";

export const metadata: Metadata = {
  title: "Mohamed Labrassi",
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <html lang="en">
        <ThemeLayout>
          <body className="overflow-y-scroll scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-200">
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
