import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Mohamed Labrassi - Projects",
  description: "Explore my diverse portfolio of projects showcasing skills in AI, web development, and more.",
};

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <>{children}</>;
};

export default layout;
