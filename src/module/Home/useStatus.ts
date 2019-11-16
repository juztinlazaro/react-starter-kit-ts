import { useState, useCallback } from "react";

const useStatus = (value: boolean) => {
  const [status, setStatus] = useState(value);
  useCallback(() => setStatus(value), [value]);

  return { status, setStatus };
};

export default useStatus;
