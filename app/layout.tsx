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
          <body>
            <AppRouterCacheProvider>
              <CssBaseline />
              <Header />
              <Box
                sx={{ bgcolor: "background.default", color: "text.primary" }}
                className="min-h-[80vh]"
              >
                {children}
              </Box>
              <Footer />
            </AppRouterCacheProvider>
          </body>
        </ThemeLayout>
      </html>
    </ReduxProvider>
  );
}
