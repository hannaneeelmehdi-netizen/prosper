'use client';

import { useEffect, useState, useMemo } from 'react';
import type {
  FirestoreError,
  Query,
  DocumentData,
  QuerySnapshot,
} from 'firebase/firestore';
import { onSnapshot } from 'firebase/firestore';

export function useCollection<T = DocumentData>(query: Query<T> | null) {
  const [snapshot, setSnapshot] = useState<QuerySnapshot<T> | null>(null);
  const [error, setError] = useState<FirestoreError | null>(null);
  const [loading, setLoading] = useState(true);

  const memoizedQuery = useMemo(() => query, [query]);

  useEffect(() => {
    if (!memoizedQuery) {
      setLoading(false);
      setSnapshot(null);
      return;
    }

    const unsubscribe = onSnapshot(
      memoizedQuery,
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
  }, [memoizedQuery]);

  return { data: snapshot, loading, error };
}
