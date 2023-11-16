import { useState, useEffect } from 'react';

export const useFetch = (fetchFn, initialValue) => {
  const [isFetching, setIsFetching] = useState(null);
  const [error, setError] = useState(null);
  const [fetchedData, setFetchedData] = useState(initialValue);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const places = await fetchFn();
        setFetchedData(places);
      } catch (error) {
        setError({ message: error.message || 'Failed to fetch data.' });
      }

      setIsFetching(false);
    }

    fetchData();
  }, [fetchFn]);

  return {
    isFetching,
    error,
    fetchedData,
    setFetchedData,
  };
};
