import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Mohamed Labrassi - Sport",
  description: "Discover my interests and achievements in sports. Stay inspired by my passion for an active lifestyle.",
};

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <>{children}</>;
};

export default layout;
