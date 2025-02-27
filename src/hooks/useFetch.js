import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../constants/config';

const useFetch = (url, params = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);

      try {
        const response = await axios.get(API_URL + url, { params });
        setData(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, [url, JSON.stringify(params)]);

  useEffect(() => {
    if (data) console.log(data);
  }, [data]);
  return { data, loading };
};

export default useFetch;
