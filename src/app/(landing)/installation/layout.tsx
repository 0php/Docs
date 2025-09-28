import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Installation Guides - ZeroPHP',
  description: 'Installation Guides for ZeroPHP',
};

export default function InstallationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
