import { useState, useCallback } from "react";

interface UseFigmaAPIResult {
  data: any;
  loading: boolean;
  error: string | null;
  fetchFigmaFile: (fileId: string) => Promise<void>;
}

export const useFigmaAPI = (): UseFigmaAPIResult => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchFigmaFile = useCallback(async (fileId: string) => {
    setLoading(true);
    setError(null);

    try {
      // API Routeを経由してアクセス（トークンはサーバーサイドで管理）
      const response = await fetch(`/api/figma/${fileId}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, fetchFigmaFile };
};
