import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Mohamed Labrassi - Home',
  description:
    'Welcome to my portfolio. My name is Mohamed Labrassi. Explore my journey, expertise, and projects.',
};

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <>{children}</>;
};

export default layout;
