import { useState, useEffect } from 'react';
import { SEARCH_CONFIG } from '@/config/constants';

export function useDebounce<T>(value: T): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), SEARCH_CONFIG.DEBOUNCE_DELAY);
    return () => clearTimeout(timer);
  }, [value]);

  return debouncedValue;
} 