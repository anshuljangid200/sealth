/**
 * Custom React Hooks for Data Fetching
 * Simplifies loading, error, and data state management
 * 
 * Usage in components:
 * const { data: doctors, loading, error } = useAsync(() => apiService.doctors.getAllDoctors());
 */

import { useState, useEffect, useCallback } from 'react';
import { errorHandler, AppError } from './errorHandler';

export interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: AppError | null;
  refetch: () => Promise<void>;
}

/**
 * Generic async data fetching hook
 * Handles loading, error, and data states automatically
 */
export function useAsync<T>(
  asyncFunction: () => Promise<T>,
  immediate: boolean = true,
  dependencies: any[] = []
): AsyncState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState<AppError | null>(null);

  const execute = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await asyncFunction();
      setData(response);
    } catch (err: any) {
      const appError = errorHandler.handle(err);
      setError(appError);
    } finally {
      setLoading(false);
    }
  }, dependencies);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { data, loading, error, refetch: execute };
}

/**
 * Hook for paginated data fetching
 */
export function usePaginatedAsync<T>(
  asyncFunction: (page: number, limit: number) => Promise<T[]>,
  limit: number = 10
) {
  const [data, setData] = useState<T[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AppError | null>(null);
  const [hasMore, setHasMore] = useState(true);

  const fetch = useCallback(async (nextPage: number) => {
    try {
      setLoading(true);
      setError(null);
      const response = await asyncFunction(nextPage, limit);
      
      if (nextPage === 1) {
        setData(response);
      } else {
        setData(prev => [...prev, ...response]);
      }
      
      setHasMore(response.length === limit);
      setPage(nextPage);
    } catch (err: any) {
      const appError = errorHandler.handle(err);
      setError(appError);
    } finally {
      setLoading(false);
    }
  }, [asyncFunction, limit]);

  useEffect(() => {
    fetch(1);
  }, []);

  const loadMore = () => {
    if (!loading && hasMore) {
      fetch(page + 1);
    }
  };

  const reset = () => {
    setPage(1);
    setData([]);
    setError(null);
    fetch(1);
  };

  return { data, loading, error, hasMore, loadMore, reset };
}

/**
 * Hook for mutations (POST, PUT, DELETE)
 */
export function useAsyncMutation<P, R>(
  asyncFunction: (params: P) => Promise<R>
) {
  const [data, setData] = useState<R | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AppError | null>(null);

  const execute = useCallback(async (params: P): Promise<R | null> => {
    try {
      setLoading(true);
      setError(null);
      const response = await asyncFunction(params);
      setData(response);
      return response;
    } catch (err: any) {
      const appError = errorHandler.handle(err);
      setError(appError);
      return null;
    } finally {
      setLoading(false);
    }
  }, [asyncFunction]);

  const reset = useCallback(() => {
    setData(null);
    setError(null);
    setLoading(false);
  }, []);

  return { data, loading, error, execute, reset };
}

/**
 * Hook for debounced async operations (search, filter)
 */
export function useDebouncedAsync<T>(
  asyncFunction: (query: string) => Promise<T[]>,
  delay: number = 500
) {
  const [query, setQuery] = useState('');
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AppError | null>(null);

  useEffect(() => {
    if (!query.trim()) {
      setData([]);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await asyncFunction(query);
        setData(response);
      } catch (err: any) {
        const appError = errorHandler.handle(err);
        setError(appError);
      } finally {
        setLoading(false);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [query, asyncFunction, delay]);

  return { query, setQuery, data, loading, error };
}

/**
 * Hook for polling data at intervals
 */
export function usePollingAsync<T>(
  asyncFunction: () => Promise<T>,
  interval: number = 5000,
  enabled: boolean = true
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AppError | null>(null);

  useEffect(() => {
    if (!enabled) return;

    let intervalId: ReturnType<typeof setInterval>;

    const poll = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await asyncFunction();
        setData(response);
      } catch (err: any) {
        const appError = errorHandler.handle(err);
        setError(appError);
      } finally {
        setLoading(false);
      }
    };

    // Initial fetch
    poll();

    // Set up polling
    intervalId = setInterval(poll, interval);

    return () => clearInterval(intervalId);
  }, [asyncFunction, interval, enabled]);

  return { data, loading, error };
}

export default {
  useAsync,
  usePaginatedAsync,
  useAsyncMutation,
  useDebouncedAsync,
  usePollingAsync
};
