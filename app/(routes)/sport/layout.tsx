import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Mohamed Labrassi - Sport",
  description: "Welcome to my portfolio",
};

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <>{children}</>;
};

export default layout;
