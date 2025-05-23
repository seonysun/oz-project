import { useEffect, useState, useCallback } from 'react';
import { instance } from '../utils/api/instance';

const useFetch = (url, params = {}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await instance.get(url, { params });
      setData(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [url, JSON.stringify(params)]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { data, loading };
};

export default useFetch;
