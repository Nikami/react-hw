import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  async function fetchUrl() {
    const response = await fetch(url);
    const json = await response.json();

    setData(json.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchUrl();
  }, []);

  return [data, isLoading];
};
export default useFetch;
