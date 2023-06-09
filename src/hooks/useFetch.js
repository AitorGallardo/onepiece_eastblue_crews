import { useEffect, useState } from 'react';

const APIKEY = import.meta.env.VITE_REACT_APP_API_KEY;

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState();
  useEffect(() => {
    const controller = new AbortController();
    
    fetch(url, {
      headers: {
        'x-api-key': APIKEY,
        'Content-Type': 'application/json',
      },
    })
      .then((res)=>res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));

    return () => {
      controller.abort();
    };
  }, [url]);
  return { loading, data, error };
};
