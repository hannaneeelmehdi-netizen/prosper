'use client';

import { useEffect, useState, useMemo } from 'react';
import type {
  FirestoreError,
  DocumentReference,
  DocumentData,
  DocumentSnapshot,
} from 'firebase/firestore';
import { onSnapshot } from 'firebase/firestore';

export function useDoc<T = DocumentData>(ref: DocumentReference<T> | null) {
  const [snapshot, setSnapshot] = useState<DocumentSnapshot<T> | null>(null);
  const [error, setError] = useState<FirestoreError | null>(null);
  const [loading, setLoading] = useState(true);

  const memoizedRef = useMemo(() => ref, [ref]);

  useEffect(() => {
    if (!memoizedRef) {
      setLoading(false);
      setSnapshot(null);
      return;
    }

    const unsubscribe = onSnapshot(
      memoizedRef,
      (snap) => {
        setSnapshot(snap);
        setError(null);
        setLoading(false);
      },
      (err) => {
        setError(err);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [memoizedRef]);

  return { data: snapshot, loading, error };
}
