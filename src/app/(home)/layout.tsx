import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'ZeroPHP — Zero Dependencies PHP Framework & Zero CLI',
  description:
    'ZeroPHP is a dependency-free PHP framework with Zero CLI, DBML, routing, migrations, and more.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
