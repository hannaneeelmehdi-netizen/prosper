'use client';

import { createContext, useContext, useMemo } from 'react';
import type { FirebaseApp } from 'firebase/app';
import type { Auth } from 'firebase/auth';
import type { Firestore } from 'firebase/firestore';
import { FirebaseErrorListener } from '@/components/FirebaseErrorListener';

export interface FirebaseContextValue {
  app: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
}

const FirebaseContext = createContext<FirebaseContextValue | null>(null);

export const useFirebase = () => {
  return useContext(FirebaseContext);
};

export const useFirebaseApp = () => {
  return useContext(FirebaseContext)?.app;
};

export const useAuth = () => {
  return useContext(FirebaseContext)?.auth;
};

export const useFirestore = () => {
  return useContext(FirebaseContext)?.firestore;
};

export function FirebaseProvider({
  value,
  children,
}: {
  value: FirebaseContextValue;
  children: React.ReactNode;
}) {
  const memoizedValue = useMemo(() => value, [value]);

  return (
    <FirebaseContext.Provider value={memoizedValue}>
      <FirebaseErrorListener>{children}</FirebaseErrorListener>
    </FirebaseContext.Provider>
  );
}
