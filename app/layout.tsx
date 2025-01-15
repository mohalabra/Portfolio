import React from "react";
import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import ReduxProvider from "@/src/store/StoreProvider";
import { Header, Footer, ThemeLayout } from "../src/components";
import "./globals.css";
import { Box } from "@mui/material";

export const metadata: Metadata = {
  title: "Labrassi Mohamed",
  description: "Generated by create next app",
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
              <Box
                sx={{
                  color: "text.primary",
                }}
                className="relative w-full h-full"
              >
                 {/* Overlay for opacity */}
                <Box
                  sx={{ backgroundColor: "background.default" }}
                  className={`absolute z-10 bg-center inset-0 opacity-70 max-w-screen`}
                ></Box>

                {/* Background Image */}
                <Box
                  sx={{
                    backgroundImage: `url('/background.jpeg')`,
                    backgroundSize: "contain",
                    backgroundRepeat: "repeat",
                  }}
                  className="absolute z-0 bg-center inset-0 max-w-screen"
                ></Box>

                {/* Content Layer */}
                <div className="relative z-30 w-full h-full">
                  <Header />
                  <main className="relative my-10">{children}</main>
                  <Footer />
                </div>
              </Box>
            </AppRouterCacheProvider>
          </body>
        </ThemeLayout>
      </html>
    </ReduxProvider>
  );
}
