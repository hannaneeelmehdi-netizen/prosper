'use client';

import { useMemo } from 'react';
import { initializeFirebase } from '.';
import { FirebaseProvider } from './provider';

export function FirebaseClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const value = useMemo(() => initializeFirebase(), []);

  return <FirebaseProvider value={value}>{children}</FirebaseProvider>;
}
