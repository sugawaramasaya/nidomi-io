"use client";

import { useState } from "react";

interface FigmaData {
  name: string;
  lastModified: string;
  // 他の必要なプロパティ
  [key: string]: any;
}

export default function FigmaTestPage() {
  const [data, setData] = useState<FigmaData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const testFigmaAPI = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/figma-test");

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
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Figma API Test</h1>

      <button
        onClick={testFigmaAPI}
        disabled={loading}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
      >
        {loading ? "Loading..." : "Test Figma API"}
      </button>

      {error && (
        <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          Error: {error}
        </div>
      )}

      {data && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Figma File Data:</h2>
          <div className="bg-gray-100 p-4 rounded">
            <p>
              <strong>Name:</strong> {data.name}
            </p>
            <p>
              <strong>Last Modified:</strong> {data.lastModified}
            </p>
            <details className="mt-4">
              <summary className="cursor-pointer font-medium">
                Full JSON Data
              </summary>
              <pre className="mt-2 text-xs overflow-auto">
                {JSON.stringify(data, null, 2)}
              </pre>
            </details>
          </div>
        </div>
      )}
    </div>
  );
}
