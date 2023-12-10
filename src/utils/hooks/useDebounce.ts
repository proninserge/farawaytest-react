import { useEffect, useState } from "react";

export const useDebounce = (value: string, delay: number, cb?: () => void) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      const t = setTimeout(() => {
        if (cb) cb();
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(t);
      };
    },
    [value, delay]
  );
  
  return debouncedValue;
};
